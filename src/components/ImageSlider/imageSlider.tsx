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
    //The commented code is also fine, it takes in the form of previous state of the useState
    //Callback update: Pass a function to setState. This function receives the previous state as its argument.
    //setState((previousState) => newValue)

    // setCurrentImage((index) => {
    //   if (index === 0) {
    //     return IMAGES.length - 1;
    //   }
    //   return index - 1;
    // });
    let previousIndex = 0;
    if (currentImage === 0) {
      previousIndex = IMAGES.length - 1;
    } else {
      previousIndex = currentImage - 1;
    }
    setCurrentImage(previousIndex);
  }

  function showNextImage() {
    //The commented code is also fine, it takes in the form of previous state of the useState
    //Callback update: Pass a function to setState. This function receives the previous state as its argument.
    //setState((previousState) => newValue)

    // setCurrentImage((index) => {
    //   if (index === IMAGES.length - 1) {
    //     return 0;
    //   }
    //   return index + 1;
    // });
    let nextIndex = 0;
    if (currentImage === IMAGES.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = currentImage + 1;
    }
    setCurrentImage(nextIndex);
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
