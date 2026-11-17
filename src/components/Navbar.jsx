import { NavLink } from 'react-router-dom';
import { Wallet, LayoutDashboard, PlusCircle, History } from 'lucide-react';

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-indigo-600 text-white'
        : 'text-slate-600 hover:bg-slate-100'
    }`;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
          <Wallet className="w-6 h-6" />
          <span>ExpenseFlow</span>
        </div>

        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>
            <LayoutDashboard className="w-4 h-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </NavLink>
          <NavLink to="/add" className={linkClass}>
            <PlusCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Add New</span>
          </NavLink>
          <NavLink to="/history" className={linkClass}>
            <History className="w-4 h-4" />
            <span className="hidden sm:inline">History</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
