import { useState } from "react";
import "./App.css";

const characters = [
  {
    src: "src/assets/images/jerry.png",
    rating: 1,
  },
  {
    src: "src/assets/images/tom.png",
    rating: 2,
  },
  {
    src: "src/assets/images/donald.png",
    rating: 3,
  },
  {
    src: "src/assets/images/garfield.png",
    rating: 4,
  },
  {
    src: "src/assets/images/pluto.png",
    rating: 5,
  },
  {
    src: "src/assets/images/mickey.png",
    rating: 6,
  },
];

function App() {
  const [characterMatrix, setCharacterMatrix] = useState([]);

  const handleButtonClick = () => {
    let charMatrix = [...characters, ...characters].sort(() => {
      return Math.random() - 0.5;
    });
    setCharacterMatrix(charMatrix);
  };

  return (
    <>
      <h1>Welcome to Card Memory Game</h1>
      <button onClick={handleButtonClick}>New Game</button>

      <div className="game-grid">
        {characterMatrix.map((character) => {
          return (
            <img
              key={Math.random() * character.rating}
              src={character.src}
              className="game-item"
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
