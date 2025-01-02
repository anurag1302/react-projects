import accData from "./data";

function Accordian() {
  return (
    <>
      <h2>Accordian</h2>
      <div>
        {accData && accData.length ? (
          <div>
            {accData.map((item) => (
              <div>
                <p className="question-item">{item.question}</p>
                <span>+</span>
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
