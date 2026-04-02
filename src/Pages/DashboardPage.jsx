import SummaryCard from "../Components/Dashboard/SummaryCard";
import TransactionList from "../Components/Transactions/TransactionList";
import RoleSwitcher from "../Components/Role/RoleSwitcher";
import Insights from "../Components/Insights/insights";
import BalanceChart from "../Components/Dashboard/BalanceChart";
import CategoryChart from "../Components/Dashboard/CategoryChart";

const DashboardPage = () => {
  return (
    <div className='p-6 space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Finance Dashboard</h1>
        <RoleSwitcher />
      </div>

      {/* Summary */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <SummaryCard title='Total Balance' />
        <SummaryCard title='Income' />
        <SummaryCard title='Expenses' />
      </div>

      {/* Charts */}
      <div className='grid md:grid-cols-2 gap-4'>
        <BalanceChart />
        <CategoryChart />
      </div>

      <TransactionList />
      <Insights />
    </div>
  );
};

export default DashboardPage;
