import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD

import Display from "./components/DisplayCard/Display";


import "./App.css";

import "./App.css";
import RecruitmentCard from "./components/drawer/RecruitmentCard/RecruitmentCard";
import OnBoarding from "./components/onBoarding/OnBoarding";
import Home from "./pages/home/Home";
import NewHired from "./pages/NewHired/NewHired";
import Recruitment from "./pages/Recruitment";


function App() {
  return (
    <Router>

    <Routes>
      <Route exact  path="/" element={<Home/>} />
      <Route exact  path="/recruitment" element={<Recruitment/>} />
      <Route exact  path="/onBoarding" element={<OnBoarding/>} />
      <Route exact  path="/addcandidate" element={<NewHired/>} />
      {/* <Route exact  path="/card" element={<Display/>} /> */}
    </Routes>
  </Router>
  )

}

export default App;
