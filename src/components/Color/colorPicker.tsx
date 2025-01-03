import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("red");

  function handleButtonClick() {
    setColor("green");
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
          width: "100vw",
          height: "100vh",
        }}
      ></div>
    </>
  );
}

export default ColorPicker;
