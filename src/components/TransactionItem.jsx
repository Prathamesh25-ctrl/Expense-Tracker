import { Link } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';

export default function TransactionItem({ transaction, onDelete }) {
  const isIncome = transaction.type === 'income';

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
      <div className="flex items-center gap-4">
        <span
          className={`w-2.5 h-10 rounded-full ${
            isIncome ? 'bg-emerald-500' : 'bg-rose-500'
          }`}
        />
        <div>
          <h4 className="font-semibold text-slate-800">{transaction.title}</h4>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
            <span className="bg-slate-100 px-2 py-0.5 rounded font-medium text-slate-600">
              {transaction.category}
            </span>
            <span>•</span>
            <span>{transaction.date}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <span
          className={`font-bold mr-1 ${
            isIncome ? 'text-emerald-600' : 'text-rose-600'
          }`}
        >
          {isIncome ? '+' : '-'}₹{transaction.amount.toLocaleString('en-IN')}
        </span>
        <Link
          to={`/edit/${transaction.id}`}
          aria-label="Edit transaction"
          className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
        >
          <Pencil className="w-4 h-4" />
        </Link>
        <button
          onClick={() => onDelete(transaction.id)}
          aria-label="Delete transaction"
          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
