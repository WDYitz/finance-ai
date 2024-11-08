import { Badge } from "@/components/ui/badge";
import { TransactionType, type Transaction } from "@prisma/client";
import { CircleDot } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="gap-2 rounded-full bg-[#55B02E] bg-opacity-10 text-primary hover:bg-muted">
        <CircleDot size={10} className="fill-primary" />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="gap-2 rounded-full bg-danger bg-opacity-10 text-danger hover:bg-muted">
        <CircleDot size={10} className="fill-danger" />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="gap-2 rounded-full bg-white bg-opacity-10 text-white hover:bg-muted">
      <CircleDot size={10} className="fill-white" />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
