import NavBar from "@/components/navbar";
import { getDashboard } from "@/services/transactions";
import { auth } from "@clerk/nextjs/server";
import { isMatch } from "date-fns";
import { redirect } from "next/navigation";
import SummaryCards from "./_components/summary-cards";
import MonthSelect from "./_components/time-select";
import TransactionPieChart from "./_components/transactions-pie-chart";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransaction from "./_components/last-transaction";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const isMonthInvalid =
    !searchParams.month || !isMatch(searchParams.month, "MM");
  if (isMonthInvalid) redirect(`?month=${new Date().getMonth() + 1}`);

  const dashboard = await getDashboard(searchParams.month);

  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6 flex flex-col overflow-hidden h-full">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <MonthSelect />
        </div>
        <div className="grid grid-cols-[2fr,1fr] gap-6 overflow-hidden h-full">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards month={searchParams.month} {...dashboard} />
            <div className="grid grid-cols-3 grid-row-1 gap-6 overflow-hidden h-full">
              <TransactionPieChart {...dashboard} />
              <ExpensesPerCategory expensesPerCategory={dashboard.totalExpensePerCategory} />
            </div>
          </div>
          <LastTransaction lastTransaction={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  );
};

export default Home;
