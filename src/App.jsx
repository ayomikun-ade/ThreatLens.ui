import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GeneralCyber from "./pages/GeneralCyber";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#6F96D1] bg-gradient-to-b from-[#6F96D1] to-[#091F5B]">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/general" element={<GeneralCyber />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
