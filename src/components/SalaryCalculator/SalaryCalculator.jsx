import { useEffect, useState } from "react";
import Button from "./components/Button";
import Slider from "./components/Slider";
import NettoSalary from "./components/NettoSalary";
import Benefits from "./components/Benefits";

const SalaryCalculator = ({ people, setPeople, id, peoples }) => {
  const buttons = [
    {
      name: "-5%",
      value: -0.05,
    },
    {
      name: "-1%",
      value: -0.01,
    },
    {
      name: "+1%",
      value: 0.01,
    },
    {
      name: "+5%",
      value: 0.05,
    },
  ];
  const [gross, setGross] = useState(people.gross);
  const [old, setOld] = useState(false);
  const [personalTax, setPersonalTax] = useState(false);
  const [kid, setKid] = useState(false);
  const [kidsNumber, setKidsNumber] = useState(0);
  const [actualKids, setActualKids] = useState(0);
  const [net, setNet] = useState(0);
  const [married, setMarried] = useState(false);
  const [name, setName] = useState("teszt");
  useEffect(() => {
    const oldData = [...peoples];
    oldData[id] = {
      gross,
      old,
      personalTax,
      kid,
      kidsNumber,
      actualKids,
      net,
      married,
      name,
      id: id + 1,
    };
    setPeople(oldData);
  }, [
    gross,
    old,
    personalTax,
    kid,
    kidsNumber,
    actualKids,
    net,
    married,
    name,
  ]);

  return (
    <div className="w-full max-w-xl">
      <label className="block text-gray-700 text-lg font-bold mb-2">
        Családtga neve
      </label>
      <label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </label>
      <p className="text-sm text-gray-500 ">Add meg a családtag nevét</p>
      <label className="block text-gray-700 text-lg font-bold mb-2">
        Bruttó bér
      </label>
      <label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={gross}
          onChange={(e) => {
            setGross(Math.round(e.target.value));
          }}
        ></input>
      </label>
      <p className="text-sm text-gray-500 ">Add meg a családtag bruttó bérét</p>
      <Slider setGross={setGross} gross={gross} />
      <div className="flex items-center justify-center">
        {buttons.map((elem, index) => (
          <Button
            value={elem.value}
            name={elem.name}
            key={index}
            setGross={setGross}
            gross={gross}
          />
        ))}
      </div>
      <Benefits
        personalTax={personalTax}
        setPersonalTax={setPersonalTax}
        setOld={setOld}
        setKid={setKid}
        old={old}
        kid={kid}
        actualKids={actualKids}
        setActualKids={setActualKids}
        setKidsNumber={setKidsNumber}
        kidsNumber={kidsNumber}
        married={married}
        setMarried={setMarried}
      />
      <NettoSalary
        gross={gross}
        old={old}
        personalTax={personalTax}
        actualKids={actualKids}
        setNet={setNet}
        kidsNumber={kidsNumber}
        net={net}
        married={married}
      />
    </div>
  );
};

export default SalaryCalculator;
