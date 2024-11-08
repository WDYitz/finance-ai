import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { getAllTransactions } from "@/services/transactions";
import { auth } from "@clerk/nextjs/server";
import { ArrowUpDown } from "lucide-react";
import { redirect } from "next/navigation";
import { transactionsColumns } from "./_columns";

const TransactionsPage = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }

  const transactions = await getAllTransactions();

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold leading-8">Transações</h2>
        <Button className="rounded-full">
          Adicionar Transação
          <ArrowUpDown />
        </Button>
      </div>
      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
