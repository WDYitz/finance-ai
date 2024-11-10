import NavBar from "@/components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SummaryCards from "./_components/summary-cards";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  return (
    <>
      <NavBar />
      <SummaryCards />
    </>
  );
};

export default Home;
