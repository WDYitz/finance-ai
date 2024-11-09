import NavBar from "@/components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  return (
    <>
      <NavBar />
      <div className="flex h-full items-center justify-center gap-2">
        <p>Pagina dashboard</p>
      </div>
    </>
  );
};

export default Home;
