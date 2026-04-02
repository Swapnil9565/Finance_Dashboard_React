const TransactionItem = ({ transaction }) => {
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
      <div>
        <p className="font-medium">{transaction.category}</p>
        <p className="text-sm text-gray-500">{transaction.date}</p>
      </div>

      <div
        className={`font-semibold ${
          transaction.type === "income"
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {transaction.type === "income" ? "+" : "-"} ₹{transaction.amount}
      </div>
    </div>
  );
};

export default TransactionItem;