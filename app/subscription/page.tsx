import NavBar from "@/components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SubscriptionPage = async () => {
  const { userId } = auth();
  if (!userId) redirect("/login");

  return (
    <>
      <NavBar />
    </>
  );
};

export default SubscriptionPage;
