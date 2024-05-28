import FamilyTax from "./FamilyTax";
import NewMarigeTax from "./NewMarigeTax";

const Benefits = ({
  personalTax,
  setPersonalTax,
  setOld,
  setKid,
  old,
  kid,
  actualKids,
  setActualKids,
  setKidsNumber,
  kidsNumber,
  setMarried,
  married,
}) => {
  const handlePersonalTaxClick = () => setPersonalTax(!personalTax);
  const handleOldClick = () => setOld(!old);
  const handleKidClick = () => setKid(!kid);

  return (
    <>
      <h3>Kedvezmények</h3>
      <ul>
        <li>
          <input
            type="checkbox"
            onChange={handleOldClick}
            checked={old}
          ></input>
          25 év alattiak kedvezménye
        </li>
        <li>
          <NewMarigeTax
            setMarried={setMarried}
            married={married}
          ></NewMarigeTax>
        </li>
        <li>
          <input
            type="checkbox"
            onChange={handlePersonalTaxClick}
            checked={personalTax}
          ></input>
          Személyi adókedvezmény
        </li>
        <li>
          <input
            type="checkbox"
            onChange={handleKidClick}
            checked={kid}
          ></input>
          Családi adókedvezmény
          {kid && (
            <FamilyTax
              actualKids={actualKids}
              setActualKids={setActualKids}
              setKidsNumber={setKidsNumber}
              kidsNumber={kidsNumber}
            />
          )}
        </li>
      </ul>
    </>
  );
};

export default Benefits;
