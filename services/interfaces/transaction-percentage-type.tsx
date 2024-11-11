import type { TransactionType } from "@prisma/client";

export type TypesPercentageType = {
  [key in TransactionType]: number
}