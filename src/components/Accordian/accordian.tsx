import { useState } from "react";
import accData from "./data";

function Accordian() {
  const [selected, setSelected] = useState("");
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState<string[]>([]);

  function handleSingleClick(currentId: string) {
    console.log(currentId);
    setSelected(currentId == selected ? "" : currentId);
  }

  function handleMultiSelectClickButton() {
    setEnableMultipleSelection(!enableMultipleSelection);
  }

  function handleMultiSelectClick(currentId: string) {
    let multipleArrayValues: string[] = [];

    multipleArrayValues = [...multiSelected];
    if (multipleArrayValues.indexOf(currentId) === -1) {
      multipleArrayValues.push(currentId);
    } else {
      multipleArrayValues.splice(multipleArrayValues.indexOf(currentId), 1);
    }
    setMultiSelected(multipleArrayValues);
  }

  console.log(enableMultipleSelection);
  console.log(multiSelected);

  return (
    <>
      <h2>Accordian</h2>
      <div>
        <button className="btnMulti" onClick={handleMultiSelectClickButton}>
          Enable Multi Selection
        </button>
        {enableMultipleSelection ? <p>Multi Selection Mode Enabled</p> : null}
        {accData && accData.length ? (
          <div>
            {accData.map((item) => (
              <div className="container" key={item.id}>
                <div
                  className="question-item"
                  onClick={
                    enableMultipleSelection
                      ? () => handleMultiSelectClick(item.id)
                      : () => handleSingleClick(item.id)
                  }
                >
                  <p>{item.question}</p>
                  <span>+</span>
                </div>
                {enableMultipleSelection ? (
                  <div className="answer">
                    {multiSelected.indexOf(item.id) !== -1 ? (
                      <div>{item.answer}</div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div className="answer">
                    {selected == item.id ? <div>{item.answer}</div> : ""}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>No data found</div>
        )}
      </div>
    </>
  );
}

export default Accordian;
