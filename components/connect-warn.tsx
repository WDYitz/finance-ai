import { SignedIn } from "@clerk/nextjs";
import { Dot } from "lucide-react";

const ConnectedWarn = () => {
  return (
    <SignedIn>
      <div className="relative rounded-sm">
        <p className="pl-6 font-medium">Connected</p>
        <Dot className="absolute bottom-[-7px] right-[69px] z-10 h-10 w-10 animate-pulse text-emerald-300" />
        <Dot className="absolute bottom-[-19px] right-[57px] h-16 w-16 animate-pulse text-emerald-300 opacity-5" />
      </div>
    </SignedIn>
  );
};

export default ConnectedWarn;
