import { useEffect } from "react";

const FamilyTax = ({
  actualKids,
  setActualKids,
  kidsNumber,
  setKidsNumber,
}) => {
  const handleActualKidsPlus = () =>
    actualKids < 3 && kidsNumber > actualKids
      ? setActualKids(actualKids + 1)
      : "";
  const handleActualKidsMinus = () =>
    actualKids > 0 ? setActualKids(actualKids - 1) : "";
  useEffect(() => {
    kidsNumber < actualKids ? setActualKids(kidsNumber) : "";
  }, [kidsNumber, actualKids, setActualKids]);
  const handleKidsMinus = () =>
    kidsNumber > 0 ? setKidsNumber(kidsNumber - 1) : "";

  const handleKidsPlus = () => setKidsNumber(kidsNumber + 1);
  return (
    <div>
      <button
        className="inline-block border border-blue-500 rounded m-2 py-1 px-3 bg-blue-500 text-white hover:text-black "
        onClick={handleKidsMinus}
      >
        -
      </button>
      <input className="w-8" readOnly type="text" value={kidsNumber}></input>
      <button
        className="inline-block border border-blue-500 rounded m-2 py-1 px-3 bg-blue-500 text-white hover:text-black "
        onClick={handleKidsPlus}
      >
        +
      </button>
      <label>Eltartott, ebből kedvezményezetten eltartott</label>
      <button
        className="inline-block border border-blue-500 rounded m-2 py-1 px-3 bg-blue-500 text-white hover:text-black "
        onClick={handleActualKidsMinus}
      >
        -
      </button>
      <input type="text" className="w-8" readOnly value={actualKids}></input>
      <button
        className="inline-block border border-blue-500 rounded m-2 py-1 px-3 bg-blue-500 text-white hover:text-black "
        onClick={handleActualKidsPlus}
      >
        +
      </button>
    </div>
  );
};

export default FamilyTax;
