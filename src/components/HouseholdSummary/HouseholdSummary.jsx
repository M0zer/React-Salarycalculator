import { useContext } from "react";
import { PeopleContext } from "../../App";

const HouseholdSummary = () => {
  const { peoples } = useContext(PeopleContext);
  return (
    <>
      <h1>Háztarás összes jövedelme</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Családtag
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nettó Bér
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {peoples.map((elem) => (
            <tr key={elem.id}>
              <td className="px-6 py-4 whitespace-nowrap">{elem.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{elem.net}</td>
            </tr>
          ))}
          <tr className="border-b border-gray-800">
            <td className="px-6 py-4 whitespace-nowrap">Összesen</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {peoples.reduce(
                (total, currentItem) => total + currentItem.net,
                0
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default HouseholdSummary;
