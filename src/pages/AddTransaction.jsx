import TransactionForm from '../components/TransactionForm';

export default function AddTransaction({ onAdd }) {
  return (
    <TransactionForm
      onSubmit={onAdd}
      heading="Add New Transaction"
      submitLabel="Save Transaction"
    />
  );
}
