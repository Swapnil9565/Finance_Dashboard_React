
import TransactionItem from "./TransactionItem";
import TransactionFilter from "./TransactionFilter";
import { useState } from "react";
import { useApp } from "../../Context/AppContext";

const TransactionList = () => {
  const { transactions, filter, role, setTransactions } = useApp();
  const [newTransaction, setNewTransaction] = useState({
    category: "",
    amount: "",
    type: "expense",
  });

  const filteredData = transactions.filter((t) =>
    t.category.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAdd = () => {
    if (!newTransaction.category || !newTransaction.amount) return;

    const newData = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      ...newTransaction,
      amount: Number(newTransaction.amount),
    };

    setTransactions([...transactions, newData]);
    setNewTransaction({ category: "", amount: "", type: "expense" });
  };

  return (
    <div className="space-y-4">
      {/* Filter */}
      <TransactionFilter />

      {/* Admin Add Form */}
      {role === "admin" && (
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Category"
            value={newTransaction.category}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, category: e.target.value })
            }
            className="border p-2 rounded-md"
          />

          <input
            type="number"
            placeholder="Amount"
            value={newTransaction.amount}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, amount: e.target.value })
            }
            className="border p-2 rounded-md"
          />

          <select
            value={newTransaction.type}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, type: e.target.value })
            }
            className="border p-2 rounded-md"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 rounded-md"
          >
            Add
          </button>
        </div>
      )}

      {/* Transactions */}
      <div className="space-y-2">
        {filteredData.length > 0 ? (
          filteredData.map((t) => (
            <TransactionItem key={t.id} transaction={t} />
          ))
        ) : (
          <p>No Transactions Found</p>
        )}
      </div>
    </div>
  );
};

export default TransactionList;