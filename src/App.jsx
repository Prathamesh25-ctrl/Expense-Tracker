import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/AddTransaction';
import EditTransaction from './pages/EditTransaction';
import History from './pages/History';

export default function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('expense_tracker_data');
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: 'Monthly Salary',
            amount: 55000,
            type: 'income',
            category: 'Salary',
            date: '2026-11-01',
          },
          {
            id: 2,
            title: 'Apartment Rent',
            amount: 15000,
            type: 'expense',
            category: 'Rent & Bills',
            date: '2026-11-05',
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem('expense_tracker_data', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((item) => (item.id === updatedTransaction.id ? updatedTransaction : item))
    );
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={<Dashboard transactions={transactions} onDelete={deleteTransaction} />}
            />
            <Route
              path="/add"
              element={<AddTransaction onAdd={addTransaction} />}
            />
            <Route
              path="/edit/:id"
              element={<EditTransaction transactions={transactions} onUpdate={updateTransaction} />}
            />
            <Route
              path="/history"
              element={<History transactions={transactions} onDelete={deleteTransaction} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
