import { useApp } from "../../Context/AppContext";

const SummaryCard = ({ title }) => {
  const { transactions } = useApp();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  let value = 0;

  if (title === "Income") value = income;
  if (title === "Expenses") value = expenses;
  if (title === "Total Balance") value = balance;

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-xl font-bold mt-2">₹{value}</p>
    </div>
  );
};

export default SummaryCard;