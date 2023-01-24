import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import NavBar from "./components/Navbar/NavBar";
import { Step2 } from "./pages/Step2";
import { Step3 } from "./pages/Step3";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
      </Routes>
    </>
  );
}

export default App;
