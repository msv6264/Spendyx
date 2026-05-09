import { useEffect, useState } from "react";
import { getAllExpenses } from "../api/fetchWithAuth";
import StatsCard from "../components/StatsCard";
import { Wallet, Receipt, TrendingUp, PieChart } from "lucide-react";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchExpenses() {
      const token = localStorage.getItem("spendyx-token");

      const obj = await getAllExpenses(token);
      console.log(obj);

      if (obj) {
        setExpenses(obj);
      }
    }

    fetchExpenses();
  }, []);

  const totaSpent = expenses.reduce(
    (sum, expense) => sum + Number(expense.price),
    0,
  );

  const totalExpenses = expenses.length;
  const averageExpense = totalExpenses > 0 ? totaSpent / totalExpenses : 0;
  
  const categoryTotals = expenses.reduce((acc, expense) => {
    const cat = expense.category || "Other";
    acc[cat] = (acc[cat] || 0) + Number(expense.price || 0);
    return acc;
  }, {});

  const categoryData = Object.entries(categoryTotals)
    .map(([name, amount]) => ({ name, amount }))
    .sort((a, b) => b.amount - a.amount);

  return (
    <div className="w-full p-6 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-400">Overview of your spending habits</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Total Spent"
          value={`₹${totaSpent.toLocaleString()}`}
          icon={Wallet}
        />
        <StatsCard
          title="Total Transactions"
          value={totalExpenses}
          icon={Receipt}
        />
        <StatsCard
          title="Average Expense"
          value={`₹${averageExpense.toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
          icon={TrendingUp}
        />
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#0d0f18] p-6">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
          <PieChart className="text-[#7C3AED]" size={24} />
          <h2 className="text-xl font-bold">Category Breakdown</h2>
        </div>

        {categoryData.length > 0 ? (
          <div className="space-y-4">
            {categoryData.map((category) => (
              <div key={category.name} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED] font-bold">
                    {category.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-gray-400 text-sm">
                      {totaSpent > 0 ? ((category.amount / totaSpent) * 100).toFixed(1) : 0}% of total
                    </p>
                  </div>
                </div>
                <div className="text-xl font-bold">
                  ₹{category.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No expenses found. Start adding some!
          </div>
        )}
      </div>
    </div>
  );
}
