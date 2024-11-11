"use server";

import { db } from "@/lib/prisma";
import { addTransactionformSchema } from "@/schemas/addTransactionformSchema";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import type { AddTransactionParams } from "./interfaces/add-transaction-params";
import { TransactionType } from "@prisma/client";
import type { ITotalExpensePerCategory } from "./interfaces/total-expense-per-category";

export const getAllUserTransactions = async (userId: string) => {
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return transactions;
};

export const upsertTransaction = async (params: AddTransactionParams) => {
  addTransactionformSchema.parse(params);
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const data = {
    ...params,
    userId,
    type: params.type,
    amount: params.amount,
    paymentmethod: params.paymentmethod,
    date: params.date,
    name: params.name,
  };

  await db.transaction.upsert({
    update: { ...data, userId },
    create: { ...data, userId },
    where: {
      id: params?.id ?? "",
    },
  });
  revalidatePath("/transactions");
};

export const getDashboard = async (month: string) => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const whereContructor = (month: string) => {
    return {
      userId,
      date: {
        gte: new Date(`2024-${month}-01`),
        lt: new Date(`2024-${month}-31`),
      },
    };
  };

  const where = whereContructor(month);

  const investmentTotal = Number((
    await db.transaction.aggregate({
      where: { ...where, type: "INVESTMENT" },
      _sum: { amount: true },
    }))?._sum?.amount
  )

  const expensesTotal = Number((
    await db.transaction.aggregate({
      where: { ...where, type: "EXPENSE" },
      _sum: { amount: true },
    }))._sum?.amount
  )

  const depositTotal = Number((
    await db.transaction.aggregate({
      where: { ...where, type: "DEPOSIT" },
      _sum: { amount: true },
    }))._sum?.amount
  )

  const balance = depositTotal - expensesTotal - investmentTotal;

  const transactionsTotal = Number((
    await db.transaction.aggregate({
      where,
      _sum: { amount: true },
    }))._sum?.amount
  )

  const typesPercentage = {
    [TransactionType.INVESTMENT]: Math.round(
      (Number(investmentTotal || 0) / Number(transactionsTotal)) * 100,
    ),
    [TransactionType.EXPENSE]: Math.round(
      (Number(expensesTotal || 0) / Number(transactionsTotal)) * 100,
    ),
    [TransactionType.DEPOSIT]: Math.round(
      (Number(depositTotal || 0) / Number(transactionsTotal)) * 100,
    ),
  }

  const totalExpensePerCategory: ITotalExpensePerCategory[] = (
    await db.transaction.groupBy({
      by: ["category"],
      where: { ...where, type: "EXPENSE" },
      _sum: { amount: true },
    })
  ).map((category) => ({
    category: category.category,
    total: Number(category._sum.amount),
    percentageOfTotal: Math.round((Number(category._sum.amount) / Number(expensesTotal)) * 100),
  }))

  const lastTransactions = await db.transaction.findMany({
    where,
    orderBy: { date: "desc" },
    take: 10,
  });

  return {
    investmentTotal,
    expensesTotal,
    depositTotal,
    balance,
    typesPercentage,
    totalExpensePerCategory,
    lastTransactions
  }

}

