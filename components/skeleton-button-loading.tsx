import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const SkeletonButtonLoading = () => {
  return (
    <Button
      className="animate-pulse border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
      disabled
    >
      <Loader2 className="animate-spin text-white" />
    </Button>
  );
};

export default SkeletonButtonLoading;
