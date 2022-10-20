
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
    <Routes>
      <Route exact  path="/" element={<Home/>} />
      {/* <Route exact  path="/signup" element={<SignUp/>} />
      <Route exact  path="/forgot-password" element={<ForgotPassword/>} />
      <Route exact  path="/user/resetPassword/:id" element={<ResetPassword/>} />
      <Route exact  path="/home" element={<Home/>}/> */}
    </Routes>
  </Router>
  )
}

export default App;
