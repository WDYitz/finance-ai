import type { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  percentage: number;
}

const PercentageItem = ({ icon, percentage, title }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-white bg-opacity-[3%] p-2 rounded-lg">
          {icon}
        </div>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="text-sm font-bold">{percentage}%</p>
    </div>
  );
};

export default PercentageItem;
