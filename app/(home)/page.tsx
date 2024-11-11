import NavBar from "@/components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SummaryCards from "./_components/summary-cards";
import MonthSelect from "./_components/time-select";
import { isMatch } from "date-fns";

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
  if (isMonthInvalid) redirect("?month=01");

  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <MonthSelect />
        </div>
        <SummaryCards month={searchParams.month} />
      </div>
    </>
  );
};

export default Home;
