import { useParams, Link } from 'react-router-dom';
import TransactionForm from '../components/TransactionForm';

export default function EditTransaction({ transactions, onUpdate }) {
  const { id } = useParams();
  const transaction = transactions.find((t) => String(t.id) === String(id));

  if (!transaction) {
    return (
      <div className="max-w-lg mx-auto text-center py-12 bg-white rounded-xl border border-slate-200">
        <h2 className="text-lg font-bold text-slate-800">Transaction Not Found</h2>
        <p className="text-slate-500 text-sm mt-1 mb-4">
          The transaction you are trying to edit does not exist.
        </p>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <TransactionForm
      initialData={transaction}
      onSubmit={onUpdate}
      heading="Edit Transaction"
      submitLabel="Update Transaction"
    />
  );
}
