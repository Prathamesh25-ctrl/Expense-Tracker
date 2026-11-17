import { useState } from 'react';
import TransactionItem from '../components/TransactionItem';

export default function History({ transactions, onDelete }) {
  const [filterType, setFilterType] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = transactions.filter((item) => {
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Transaction History</h1>

        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Search title or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Types</option>
            <option value="income">Income Only</option>
            <option value="expense">Expenses Only</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
          <p className="text-slate-500">No matching transactions found.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((item) => (
            <TransactionItem key={item.id} transaction={item} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
