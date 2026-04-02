import SummaryCard from "../Components/Dashboard/SummaryCard";
import Insights from "../Components/Insights/insights";
import RoleSwitcher from "../Components/Role/RoleSwitcher";
import TransactionList from "../Components/Transactions/TransactionList";


const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6">
  
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>
        <RoleSwitcher/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Total Balance" />
        <SummaryCard title="Income" />
        <SummaryCard title="Expenses" />
      </div>

      <TransactionList />

      <Insights/>
    </div>
  );
};

export default DashboardPage;