import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("red");

  function getRandom() {
    let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let randomCharacter = hexArray[Math.floor(Math.random() * hexArray.length)];
    return randomCharacter;
  }

  function getHEXColor() {
    let str = "";
    for (let i = 0; i < 6; i++) {
      str = str + getRandom();
    }
    let randomColor = "#" + str;
    setColor(randomColor);
  }

  function handleButtonClick() {
    getHEXColor();
  }
  return (
    <>
      <h2>Color Picker</h2>
      <button
        onClick={handleButtonClick}
        style={{
          marginBottom: "10px",
          fontWeight: "bold",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Generate Random Color
      </button>

      <div
        style={{
          backgroundColor: color,
          width: "50vw",
          height: "50vh",
          fontWeight: "bold",
          fontSize: "50px",
          textAlign: "center",
        }}
      >
        {color}
      </div>
    </>
  );
}

export default ColorPicker;
