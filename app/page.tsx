import { SignedIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Dot } from "lucide-react";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <div className="flex h-full items-center justify-center gap-2">
      <UserButton showName />
      <SignedIn>
        <div className="relative rounded-sm">
          <p className="pl-6 font-medium">Connected</p>
          <Dot className="absolute bottom-[-7px] right-[69px] z-10 h-10 w-10 animate-pulse text-emerald-300" />
          <Dot className="absolute bottom-[-19px] right-[57px] h-16 w-16 animate-pulse text-emerald-300 opacity-5" />
        </div>
      </SignedIn>
    </div>
  );
};

export default Home;
