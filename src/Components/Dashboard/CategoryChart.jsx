import { useApp } from "../../Context/AppContext";


const CategoryChart = () => {
  const { transactions } = useApp();

  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-2">Spending by Category</h2>

      {Object.keys(categoryTotals).map((cat) => (
        <div key={cat} className="flex justify-between">
          <span>{cat}</span>
          <span>₹{categoryTotals[cat]}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryChart;