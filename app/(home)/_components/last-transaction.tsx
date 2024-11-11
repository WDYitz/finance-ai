import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/constants/transactions";
import { formatCurrency } from "@/lib/utils";
import { TransactionType, type Transaction } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface LastTransactionProps {
  lastTransaction: Transaction[];
}

const LastTransaction = ({ lastTransaction }: LastTransactionProps) => {
  const getAmountColor = (transaction: Transaction) => {
    if (transaction.type === TransactionType.EXPENSE) return "text-red-500";
    if (transaction.type === TransactionType.DEPOSIT) return "text-primary";
    return "text-white";
  }

  const getAmountPrefix = (transaction: Transaction) => {
    if (transaction.type === TransactionType.DEPOSIT) return "+";
    return "-"
  }

  return (
    <ScrollArea className="rounded-md border">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>Ultimas transações</CardTitle>
        <Button variant="outline" className="rounded-full font-bold">
          <Link href="/transactions">Ver mais</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {lastTransaction.map((transaction) => (
          <div className="flex justify-between" key={transaction.id}>
            <div className="flex items-center gap-2 ">
              <div className="p-3 bg-opacity-[3%] bg-white rounded-lg">
                <Image src={TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentmethod]} width={20} height={20} alt="PIX" />
              </div>
              <div>
                <p className="text-sm font-bold">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <p className={`text-sm font-bold ${getAmountColor(transaction)}`}>
              {getAmountPrefix(transaction)}
              {formatCurrency(Number(transaction.amount))}
            </p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
}

export default LastTransaction;