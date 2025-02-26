import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#6F96D1] bg-gradient-to-b from-[#6F96D1] to-[#091F5B]">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
