import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Error from "./Error/Error";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
function App() {
  return (
    <Router>
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Error/>}/>

      </Routes>
    </>
    </Router>
  );
}

export default App;
