import { useState } from "react";
import {
  Button,
  Modal,
  ModalActions,
  ModalContent,
  ModalHeader,
} from "semantic-ui-react";

const NewMarigeTax = ({ setMarried }) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(0);
  const handleChecked = () => {
    setMarried(!checked);
    setChecked(!checked);
  };
  const date_diff_indays = function (date1, date2) {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    const isValid =
      Math.floor(
        (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
          Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
          (1000 * 60 * 60 * 24)
      ) <
      365 * 2
        ? true
        : false;
    setMarried(isValid);
    return isValid;
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          onChange={handleChecked}
          checked={checked}
        ></input>
        Friss házasok kedvezménye
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open && checked}
          trigger={
            checked && (
              <div>
                <button className="inline-block border border-blue-500 rounded m-2 py-1 px-3 bg-blue-500 text-white hover:text-black ">
                  Dátum módosítása
                </button>
                {date_diff_indays(date, Date()) ? (
                  <span className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-green-500 text-white">
                    jogosult
                  </span>
                ) : (
                  <span className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-red-500 text-white">
                    nem jogosult
                  </span>
                )}
              </div>
            )
          }
        >
          <ModalHeader>Friss házasok kedvezménye</ModalHeader>
          <ModalContent>
            <form className="ui form">
              <div className="field">
                <label>Add meg a házasság kötés dátumát</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                ></input>
              </div>
            </form>
          </ModalContent>
          <ModalActions>
            <Button color="black" onClick={() => setOpen(false)}>
              OK
            </Button>
          </ModalActions>
        </Modal>
      </div>
    </>
  );
};

export default NewMarigeTax;
