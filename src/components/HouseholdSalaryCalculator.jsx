import { useParams } from "react-router-dom";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { useContext } from "react";
import { PeopleContext } from "../App";

const HouseholdSalaryCalculator = () => {
  const { id } = useParams();
  const { peoples, setPeople } = useContext(PeopleContext);
  const people = peoples.find((elem) => elem.id.toString() === id);

  return (
    <>
      <header className="bg-blue-200">
        <FamilyMemberTabs />
      </header>
      <main className="flex">
        <div className="bg-blue-100 rounded-lg m-1 w-1/2 border border-black">
          {people && (
            <SalaryCalculator
              people={people}
              peoples={peoples}
              id={id - 1}
              setPeople={setPeople}
            />
          )}
        </div>
        <div className="bg-blue-100 m-1 rounded-lg w-1/2 border border-black">
          <HouseholdSummary />
        </div>
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
