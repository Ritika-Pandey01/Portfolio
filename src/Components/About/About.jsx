import React from "react";
import "./about.css";
import image from "../../assets/girl.png";

function About() {
  return (
    <>
    <h1 className="aboutH">ABOUT ME</h1>
      <div className="about" >
      
      <div className="textSection">
      
      <p>Hello, my name is Ritika Pandey. I learn new technologies and am deeply interested in web development. My interest in web development started in 2021, when I started with a university project. It brought me so much more than just project.</p>
      <p>I have had the privilege to work as a <span className="highlight">Cloud Security Solutions Engineer Intern</span> at a startup and I am currently a <span className="highlight"> Frontend Developer Intern</span> in the same organization.</p>
      <p>I also enjoy working in communities and am very  active on tech twitter. I am a part of WiCYs, EddieHub and have also been an active volunteer at Null:the open source community.Apart from this I have been a speaker in one of the talk series by Infosec Girls.</p>
      <p>Few technologies I've been working on:</p>
      <ul>
        <li>React</li>
        <li>Express JS</li>
        <li>Node JS</li>
      </ul>
      </div>
      <div className="graphic">
      <img src={image} alt="Avatar"/>
      
      </div>
      </div>
    </>
  )
}

export default About
