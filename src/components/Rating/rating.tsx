import { FaStar } from "react-icons/fa";

function Rating() {
  let arr = Array.from(Array(10).keys());
  return (
    <>
      <h2>Star Rating</h2>
      {arr.map((_, index) => {
        return (
          <span key={index + 1}>
            <FaStar />
          </span>
        );
      })}
    </>
  );
}

export default Rating;
