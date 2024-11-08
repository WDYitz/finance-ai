import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";

export const addTransactionformSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, { message: "Campo deve ter no minimo 3 caracteres" })
    .max(40, { message: "Campo deve ter menos de 40 caracteres" }),
  amount: z.string(),
  transactionType: z.nativeEnum(TransactionType, {
    required_error: "Tipo de transação e obrigatório",
  }),
  category: z.nativeEnum(TransactionCategory, {
    required_error: "Categoria e obrigatória",
  }),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod, {
    required_error: "Metodo de pagamento e obrigatório",
  }),
  date: z.date({ required_error: "Data e obrigatória" }),
});
