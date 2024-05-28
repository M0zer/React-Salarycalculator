import { useEffect } from "react";

const NettoSalary = ({
  gross,
  old,
  personalTax,
  actualKids,
  setNet,
  kidsNumber,
  net,
  married,
}) => {
  useEffect(() => {
    let szja = gross * 0.15;
    let tb = gross * 0.185;
    if (old) {
      if (gross > 499952) {
        szja = (gross - 499952) * 0.15;
      } else {
        szja = 0;
      }
    }
    if (personalTax) {
      if (szja + tb < 77300) {
        szja = 0;
        tb = 0;
      } else {
        szja = szja - 77300;
        if (szja < 0) {
          tb = tb + szja;
        }
      }
    }
    if (actualKids == 0) {
      setNet(
        Math.round(gross - tb - (szja > 0 ? szja : 0) + (married ? 5000 : 0))
      );
    }
    if (actualKids == 1) {
      setNet(
        Math.round(
          gross -
            tb -
            (szja > 0 ? szja : 0) +
            10000 * kidsNumber +
            (married ? 5000 : 0)
        )
      );
    }
    if (actualKids == 2) {
      setNet(
        Math.round(
          gross -
            tb -
            (szja > 0 ? szja : 0) +
            20000 * kidsNumber +
            (married ? 5000 : 0)
        )
      );
    }
    if (actualKids == 3) {
      setNet(
        Math.round(
          gross -
            tb -
            (szja > 0 ? szja : 0) +
            33000 * kidsNumber +
            (married ? 5000 : 0)
        )
      );
    }
  }, [gross, old, personalTax, actualKids, kidsNumber, setNet, married]);
  return (
    <h3 className="rounded-md shadow-sm p-1 align-middle text-xl font-bold bg-white">
      Számított nettó bér:
      <span> {net}</span>
    </h3>
  );
};

export default NettoSalary;
