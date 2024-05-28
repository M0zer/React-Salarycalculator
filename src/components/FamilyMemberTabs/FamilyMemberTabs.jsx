import { useContext } from "react";
import { PeopleContext } from "../../App";
import { NavLink } from "react-router-dom";

const FamilyMemberTabs = () => {
  const { peoples, setPeople } = useContext(PeopleContext);
  const addMenuItem = () => {
    const newId = peoples.length + 1;
    const newPeopleItem = {
      id: newId,
      name: "New member",
      gross: 0,
      old: false,
      personalTax: false,
      kid: false,
      kidsNumber: 0,
      actualKids: 0,
      net: 0,
      married: false,
    };
    setPeople([...peoples, newPeopleItem]);
  };

  return (
    <>
      <h1 className="border-b-2 border-black">Bérkalkulátor</h1>
      <nav className="border-b-2 border-black px-2 pb-2">
        <ul className="flex">
          {peoples.map((item) => (
            <li className="-mb-px mr-2" key={item.id}>
              <NavLink
                className="inline-block border border-blue-500 rounded py-1 px-3 m-1 bg-blue-500 text-white hover:text-black"
                to={`/${item.id}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              className="inline-block border m-1 border-blue-500 rounded py-1.5 px-4 bg-blue-500 text-white"
              onClick={addMenuItem}
            >
              +
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default FamilyMemberTabs;
