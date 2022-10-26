
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import RecruitmentCard from "./components/drawer/RecruitmentCard/RecruitmentCard";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
    <Routes>
      <Route exact  path="/" element={<Home/>} />
      <Route exact  path="/card" element={<RecruitmentCard/>} />
    </Routes>
  </Router>
  )
}

export default App;
