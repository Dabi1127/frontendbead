import Header from "./Header";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";


const HouseholdSalaryCalculator = () => {
  return (
    <>
      <Header />
      <main className="flex">
        <SalaryCalculator personName='Józsi' />
        <div className="divider divider-horizontal ml-5 mr-5"></div>
        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
