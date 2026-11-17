import { Link } from 'react-router-dom';
import SummaryCards from '../components/SummaryCards';
import TransactionItem from '../components/TransactionItem';

export default function Dashboard({ transactions, onDelete }) {
  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Financial Overview</h1>
          <p className="text-slate-500 text-sm">Track your daily income and spending.</p>
        </div>
        <Link
          to="/add"
          className="inline-flex justify-center items-center px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          + Add Transaction
        </Link>
      </div>

      <SummaryCards transactions={transactions} />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800">Recent Transactions</h2>
          {transactions.length > 5 && (
            <Link to="/history" className="text-sm text-indigo-600 hover:underline font-medium">
              View All ({transactions.length})
            </Link>
          )}
        </div>

        {recentTransactions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
            <p className="text-slate-500">No transactions yet. Add your first income or expense!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {recentTransactions.map((item) => (
              <TransactionItem key={item.id} transaction={item} onDelete={onDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
