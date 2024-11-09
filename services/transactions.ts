"use server";

import { db } from "@/lib/prisma";
import { addTransactionformSchema } from "@/schemas/addTransactionformSchema";
import { auth } from "@clerk/nextjs/server";
import {
  type TransactionCategory,
  type TransactionPaymentMethod,
  type TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getAllTransactions = async () => {
  const transactions = await db.transaction.findMany({});

  return transactions;
};

interface AddTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentmethod: TransactionPaymentMethod;
  date: Date;
}

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
    where: {
      id: params.id,
    },
    update: { ...data, userId },
    create: { ...data, userId },
  });
  revalidatePath("/transactions");
};

/* export const deleteTransaction = async (id: number) => {
  await db.transaction.delete({
    where: {
      id
    }
  })
  revalidatePath("/transactions")
} */
