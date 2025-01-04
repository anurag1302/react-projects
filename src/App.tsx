import "./App.css";
import Accordian from "./components/Accordian/accordian";
import ColorPicker from "./components/Color/colorPicker";
import Rating from "./components/Rating/rating";
import Header from "./components/Header/header";

import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <Router>
      <h1>hello from TS react</h1>
      <Header />
      <Routes>
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/color-picker" element={<ColorPicker />} />
        <Route path="/rating" element={<Rating />} />
      </Routes>
    </Router>
  );
}

export default App;
