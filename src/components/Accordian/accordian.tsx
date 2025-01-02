import { useState } from "react";
import accData from "./data";

function Accordian() {
  const [selected, setSelected] = useState("");

  function handleSingleClick(currentId: string) {
    console.log(currentId);
    setSelected(currentId == selected ? "" : currentId);
  }
  return (
    <>
      <h2>Accordian</h2>
      <div>
        {accData && accData.length ? (
          <div>
            {accData.map((item) => (
              <div className="container">
                <div
                  key={item.id}
                  className="question-item"
                  onClick={() => handleSingleClick(item.id)}
                >
                  <p>{item.question}</p>
                  <span>+</span>
                </div>
                <div className="answer">
                  {selected == item.id ? <div>{item.answer}</div> : ""}
                </div>
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
