import { createContext, useContext, useState } from "react";
import { transactions as initialData } from "../Data/TransactionData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("");

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);