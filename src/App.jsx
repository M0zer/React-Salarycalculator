import { createContext, useState } from "react";
import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

export const PeopleContext = createContext();

function App() {
  const [peoples, setPeople] = useState([
    {
      id: 1,
      name: "Teszt",
      gross: 0,
      old: false,
      personalTax: false,
      kid: false,
      kidsNumber: 0,
      actualKids: 0,
      net: 0,
      married: false,
    },
  ]);

  return (
    <PeopleContext.Provider value={{ peoples, setPeople }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/1" />} />
          <Route
            path="/:id"
            index
            element={<HouseholdSalaryCalculator />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </PeopleContext.Provider>
  );
}

export default App;
