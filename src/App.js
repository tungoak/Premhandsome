import DetailsPage from "./pages/DetailsPage";
import './App.css';
import './input.css'
import LandingPage from "./pages/LandingPages";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#96be7f] to-[#26381c]">
      <Routes>
        
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/details" element={<DetailsPage/>}></Route>
      </Routes>
    </div>
  );
}


export default App;
