function Rating() {
  let arr = Array.from(Array(10).keys());
  return (
    <>
      <h2>Star Rating</h2>
      {arr.map((_, index) => {
        return <span key={index + 1}>:D</span>;
      })}
    </>
  );
}

export default Rating;
