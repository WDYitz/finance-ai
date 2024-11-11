"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { chartConfig } from "@/constants/transactions"
import type { TypesPercentageType } from "@/services/interfaces/transaction-percentage-type"
import { TransactionType } from "@prisma/client"
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react"
import PercentageItem from "./percentage-item"

interface TransactionPieChartProps {
  depositTotal: number
  expensesTotal: number
  investmentTotal: number
  typesPercentage: TypesPercentageType
}

const TransactionPieChart = ({ depositTotal, expensesTotal, investmentTotal, typesPercentage }: TransactionPieChartProps) => {
  const chartData = [
    { type: TransactionType.INVESTMENT, amount: investmentTotal, fill: "#FFFFFF" },
    { type: TransactionType.DEPOSIT, amount: depositTotal, fill: "#55B02E" },
    { type: TransactionType.EXPENSE, amount: expensesTotal, fill: "#E93030" },
  ]

  return (
    <Card className="flex flex-col p-6">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={70}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-2">
          <PercentageItem icon={<TrendingUpIcon size={16} className="text-primary" />} title="Receita" percentage={typesPercentage[TransactionType.DEPOSIT]} />
          <PercentageItem icon={<TrendingDownIcon size={16} className="text-danger" />} title="Despesa" percentage={typesPercentage[TransactionType.EXPENSE]} />
          <PercentageItem icon={<PiggyBankIcon size={16} className="text-muted-foreground" />} title="Investimento" percentage={typesPercentage[TransactionType.INVESTMENT]} />
        </div>
      </CardContent>
    </Card>
  )
}

export default TransactionPieChart;
