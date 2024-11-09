import { DataTable } from "@/components/ui/data-table";
import { getAllUserTransactions } from "@/services/transactions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { transactionsColumns } from "./_columns";
import AddTransactionButton from "@/components/add-transaction-button";
import NavBar from "@/components/navbar";

const TransactionsPage = async () => {
  const { userId } = auth();
  if (!userId) redirect("/login");

  const transactions = await getAllUserTransactions(userId);

  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold leading-8">Transações</h2>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionsColumns} data={transactions} />
      </div>
    </>
  );
};

export default TransactionsPage;
