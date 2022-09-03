import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Error from "./Error/Error";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Error/>}/>

      </Routes>
    </>
    </Router>
  );
}

export default App;
