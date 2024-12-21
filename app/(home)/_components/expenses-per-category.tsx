import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TRANSACTION_CATEGORY_LABELS } from "@/constants/transactions";
import type { ITotalExpensePerCategory } from "@/services/interfaces/total-expense-per-category";

interface ExpensesPerCategoryProps {
  expensesPerCategory: ITotalExpensePerCategory[];
}

const ExpensesPerCategory = ({ expensesPerCategory }: ExpensesPerCategoryProps) => {
  return (
    <ScrollArea className="col-span-2 rounded-md border pb-6 h-full">
      <CardHeader>
        <CardTitle className="font-bold">Gastos per Categoria</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {
          expensesPerCategory.map(category => (
            <div key={category.category} className="space-y-2">
              <div className="flex justify-between w-full">
                <p className="font-bold text-sm">{TRANSACTION_CATEGORY_LABELS[category.category as keyof typeof TRANSACTION_CATEGORY_LABELS]}</p>
                <p className="text-sm font-bold">{category.percentageOfTotal}%</p>
              </div>
              <Progress value={category.total} />
            </div>
          ))
        }
      </CardContent>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}

export default ExpensesPerCategory;