import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import type { ChartConfig } from "@/components/ui/chart";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionPaymentMethod.OTHER]: "other.svg",
  [TransactionPaymentMethod.PIX]: "pix.svg",
}

export const TRANSACTION_TYPE_LABELS = {
  EXPENSE: "Despesa",
  INVESTMENT: "Investimento",
  DEPOSIT: "Deposito",
};

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    label: TRANSACTION_TYPE_LABELS[TransactionType.EXPENSE],
    value: TransactionType.EXPENSE,
  },
  {
    label: TRANSACTION_TYPE_LABELS[TransactionType.INVESTMENT],
    value: TransactionType.INVESTMENT,
  },
  {
    label: TRANSACTION_TYPE_LABELS[TransactionType.DEPOSIT],
    value: TransactionType.DEPOSIT,
  },
];

export const TRANSACTION_PAYMENT_METHODS_OPTIONS = [
  {
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_TRANSFER],
    value: TransactionPaymentMethod.BANK_TRANSFER,
  },
  {
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_SLIP],
    value: TransactionPaymentMethod.BANK_SLIP,
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
    value: TransactionPaymentMethod.CASH,
  },
  {
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CREDIT_CARD],
    value: TransactionPaymentMethod.CREDIT_CARD,
  },
  {
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.DEBIT_CARD],
    value: TransactionPaymentMethod.DEBIT_CARD,
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.OTHER],
    value: TransactionPaymentMethod.OTHER,
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
    value: TransactionPaymentMethod.PIX,
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
    value: TransactionCategory.EDUCATION,
  },
  {
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
    value: TransactionCategory.ENTERTAINMENT,
  },
  {
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
    value: TransactionCategory.FOOD,
  },
  {
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
    value: TransactionCategory.HEALTH,
  },
  {
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
    value: TransactionCategory.HOUSING,
  },
  {
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
    value: TransactionCategory.OTHER,
  },
  {
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
    value: TransactionCategory.SALARY,
  },
  {
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
    value: TransactionCategory.TRANSPORTATION,
  },
  {
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY],
    value: TransactionCategory.UTILITY,
  },
];


//////* TRANSACTION PIE CHART *//////
export const chartConfig = {
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#FFFFFF",
  },
  [TransactionType.INVESTMENT]: {
    label: "Investimento",
    color: "#55B02E",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#E93030",
  },
} satisfies ChartConfig