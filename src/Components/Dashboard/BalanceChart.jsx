import { useApp } from "../../Context/AppContext";

const BalanceChart = () => {
  const { transactions } = useApp();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const total = income + expenses;

  const incomePercent = total ? (income / total) * 100 : 0;
  const expensePercent = total ? (expenses / total) * 100 : 0;

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-2">Balance Overview</h2>

      <div className="space-y-2">
        <div
          className="bg-green-200 h-4 rounded"
          style={{ width: `${incomePercent}%` }}
        />
        <div
          className="bg-red-200 h-4 rounded"
          style={{ width: `${expensePercent}%` }}
        />
      </div>
    </div>
  );
};

export default BalanceChart;