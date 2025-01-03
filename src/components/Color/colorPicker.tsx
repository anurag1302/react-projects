import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("red");

  function getRandomHexNumber() {
    let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let randomCharacter = hexArray[Math.floor(Math.random() * hexArray.length)];
    return randomCharacter;
  }

  function getRandomRGBNumber() {
    //to get a random number in a range -> 0 to 256 (256 not included)
    //Math.random()*(max-min)+min;
    return Math.floor(Math.random() * (256 - 0) + 0);
  }

  function getHEXColor() {
    let str = "";
    for (let i = 0; i < 6; i++) {
      str = str + getRandomHexNumber();
    }
    let randomColor = "#" + str;
    setColor(randomColor);
  }

  function getRGBColor() {
    let outer = "";
    for (let i = 0; i < 3; i++) {
      outer = outer + "," + getRandomRGBNumber();
    }
    outer = outer.replace(",", "");
    let randomColor = `RGB(${outer})`;
    console.log(randomColor);
    setColor(randomColor);
  }

  function handleButtonClick() {
    getHEXColor();
  }
  function handleButtonClickRGB() {
    getRGBColor();
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
        Generate Random Color HEX
      </button>
      <button
        onClick={handleButtonClickRGB}
        style={{
          marginBottom: "10px",
          fontWeight: "bold",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
          borderRadius: "5px",
          marginLeft: "5px",
        }}
      >
        Generate Random Color RGB
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
