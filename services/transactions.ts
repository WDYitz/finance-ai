"use server";

import { db } from "@/lib/prisma";
import { addTransactionformSchema } from "@/schemas/addTransactionformSchema";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import type { AddTransactionParams } from "./interfaces/add-transaction-params";

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

export const getTotalInvestment = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const totalInvestment = (
    await db.transaction.aggregate({
      where: { type: "INVESTMENT" },
      _sum: { amount: true },
    })
  )._sum?.amount;

  return Number(totalInvestment);
};

export const getTotalExpenses = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const totalExpenses = (
    await db.transaction.aggregate({
      where: { type: "EXPENSE" },
      _sum: { amount: true },
    })
  )._sum?.amount;

  return Number(totalExpenses);
};

export const getTotalDeposits = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const totalDeposits = (
    await db.transaction.aggregate({
      where: { type: "DEPOSIT" },
      _sum: { amount: true },
    })
  )._sum?.amount;

  return Number(totalDeposits);
};
