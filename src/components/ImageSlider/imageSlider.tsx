import { useState } from "react";

const img1 = "src/assets/images/donald.png";
const img2 = "src/assets/images/garfield.png";
const img3 = "src/assets/images/jerry.png";
const img4 = "src/assets/images/mickey.png";
const img5 = "src/assets/images/pluto.png";
const img6 = "src/assets/images/tom.png";

const IMAGES = [img1, img2, img3, img4, img5, img6];

function ImageSilder() {
  const [currentImage, setCurrentImage] = useState(0);

  function showPreviousImage() {
    setCurrentImage((index) => {
      if (index === 0) {
        return IMAGES.length - 1;
      }
      return index - 1;
    });
  }

  function showNextImage() {
    setCurrentImage((index) => {
      if (index === IMAGES.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }
  return (
    <>
      <img src={IMAGES[currentImage]} style={{ width: "30%", height: "30%" }} />
      <div>
        <button
          onClick={showPreviousImage}
          style={{
            cursor: "pointer",
            borderRadius: "2px",
            fontSize: "20px",
          }}
        >
          Previous
        </button>
        <button
          onClick={showNextImage}
          style={{ fontSize: "20px", cursor: "pointer", borderRadius: "2px" }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default ImageSilder;
