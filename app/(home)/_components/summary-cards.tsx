import SummaryCard from "@/app/(home)/_components/summary-card";
import {
  PiggyBankIcon,
  TrendingDown,
  TrendingUp,
  WalletIcon,
} from "lucide-react";

interface SummaryCardsProsp {
  month: string;
  balance: number;
  depositTotal: number;
  expensesTotal: number;
  investmentTotal: number;
}

const SummaryCards = async ({
  balance,
  depositTotal,
  expensesTotal,
  investmentTotal,
}: SummaryCardsProsp) => {
  return (
    <div className="space-y-6">
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amount={investmentTotal}
        />
        <SummaryCard
          icon={<TrendingUp size={16} className="text-primary" />}
          title="Receita"
          amount={depositTotal}
        />
        <SummaryCard
          icon={<TrendingDown size={16} className="text-red-500" />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
