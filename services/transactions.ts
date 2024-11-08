import { db } from "@/lib/prisma";

export const getAllTransactions = async () => {
  const transactions = await db.transaction.findMany({});

  return transactions;
};
