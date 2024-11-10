import SummaryCard from "@/app/(home)/_components/summary-card";
import {
  getTotalDeposits,
  getTotalExpenses,
  getTotalInvestment,
} from "@/services/transactions";
import {
  PiggyBankIcon,
  TrendingDown,
  TrendingUp,
  WalletIcon,
} from "lucide-react";

const SummaryCards = async () => {
  const [deposit, expense, investment] = await Promise.all([
    getTotalDeposits(),
    getTotalExpenses(),
    getTotalInvestment(),
  ]);
  const balance = deposit - expense - investment;
  return (
    <div className="space-y-6 p-6">
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
          amount={investment}
        />
        <SummaryCard
          icon={<TrendingUp size={16} className="text-primary" />}
          title="Receita"
          amount={deposit}
        />
        <SummaryCard
          icon={<TrendingDown size={16} className="text-red-500" />}
          title="Despesas"
          amount={expense}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
