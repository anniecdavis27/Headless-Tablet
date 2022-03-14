import { Route, Routes, withRouter } from "react-router-dom";
import AboutTablet from "./Components/AboutTablet/AboutTablet";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about-tablet" element={<AboutTablet/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </div>
  );
}

export default App;
