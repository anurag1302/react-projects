import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

function Rating() {
  let arr = Array.from(Array(10).keys());

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex: number) {
    console.log(currentIndex);
    setRating(currentIndex);
  }

  function handleMouseEnter(currentIndex: number) {
    setHover(currentIndex);
    console.log(currentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <>
      <h2>Star Rating</h2>
      {arr.map((_, index) => {
        index = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={index <= (rating || hover) ? "active" : "passive"}
          >
            <FaStar />
          </span>
        );
      })}
    </>
  );
}

export default Rating;
