import { ArrowUpRight, ArrowDownRight, IndianRupee } from 'lucide-react';

export default function SummaryCards({ transactions }) {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  const formatINR = (num) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(num);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between text-slate-500 text-sm font-medium">
          <span>Current Balance</span>
          <IndianRupee className="w-4 h-4 text-indigo-600" />
        </div>
        <p className={`text-2xl font-bold mt-2 ${balance < 0 ? 'text-rose-600' : 'text-slate-900'}`}>
          {formatINR(balance)}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between text-slate-500 text-sm font-medium">
          <span>Total Income</span>
          <div className="p-1 bg-emerald-100 rounded-md">
            <ArrowUpRight className="w-4 h-4 text-emerald-600" />
          </div>
        </div>
        <p className="text-2xl font-bold text-emerald-600 mt-2">
          +{formatINR(income)}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between text-slate-500 text-sm font-medium">
          <span>Total Expenses</span>
          <div className="p-1 bg-rose-100 rounded-md">
            <ArrowDownRight className="w-4 h-4 text-rose-600" />
          </div>
        </div>
        <p className="text-2xl font-bold text-rose-600 mt-2">
          -{formatINR(expense)}
        </p>
      </div>
    </div>
  );
}
