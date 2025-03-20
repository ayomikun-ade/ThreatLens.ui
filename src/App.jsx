import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GeneralCyber from "./pages/GeneralCyber";
import Prediction from "./pages/Prediction";
import About from "./pages/About";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#6F96D1] relative bg-gradient-to-b from-[#6F96D1] to-[#091F5B]">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/general" element={<GeneralCyber />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Copyright />
      </div>
    </BrowserRouter>
  );
};

export default App;
