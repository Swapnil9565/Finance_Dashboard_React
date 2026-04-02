import { useApp } from "../../Context/AppContext";

const Insights = () => {
  const { transactions } = useApp();

  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryTotals = {};

  expenses.forEach((t) => {
    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) + t.amount;
  });

  const highestCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    Object.keys(categoryTotals)[0]
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-2">Insights</h2>

      {highestCategory ? (
        <p>
          Highest spending: <b>{highestCategory}</b> (₹
          {categoryTotals[highestCategory]})
        </p>
      ) : (
        <p>No insights available</p>
      )}
    </div>
  );
};

export default Insights;