import { useApp } from "../../Context/AppContext";

const TransactionFilter = () => {
  const { filter, setFilter } =useApp();

  return (
    <input
      type="text"
      placeholder="Search category..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="border p-2 rounded-md w-full md:w-1/3"
    />
  );
};

export default TransactionFilter;