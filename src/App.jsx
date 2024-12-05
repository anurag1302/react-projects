import { useState } from "react";
import jerry from "./assets/images/jerry.png";

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
  const characterMatrix = [...characters, ...characters];
  console.log(characterMatrix);
  return (
    <>
      <h1>Welcome to Card Memory Game</h1>
      <button>New Game</button>

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
