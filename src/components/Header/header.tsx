import { Link } from "react-router";
import "./styles.css";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/accordian">Accordian</Link>
        <Link to="/color-picker">Color Picker</Link>
        <Link to="/rating">Star Rating</Link>
        <Link to="/image-slider">Image Slider</Link>
      </div>
    </>
  );
}

export default Header;
