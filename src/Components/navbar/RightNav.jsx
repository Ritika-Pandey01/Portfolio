import React from 'react'
import "./navbar.css";
import styled from "styled-components";

const Ul=styled.ul`

list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    padding-top:20px;
    

 @media only screen and (max-width: 600px) {
  padding:10px;
      flex-flow: column nowrap;
      text-align: center;
      position: fixed;
      right: 0;
      background-color: #ecedff;
      border:1px solid #4f5488;
      border-radius:10px;
      width:200px;
      transform: ${({hamburger})=>hamburger?'translateX(0)':'translateX(100%)'};
    
 }
 @media only screen and (max-width: 760px) {
    top:40px;
      padding:10px;
      flex-flow: column nowrap;
      text-align: center;
      position: fixed;
      right: 0;
      border-radius:10px;
      border:1px solid #4f5488;
      background-color: #ecedff;
      width:200px;
      transform: ${({hamburger})=>hamburger?'translateX(0)':'translateX(100%)'};
    
 }`;
function RightNav({hamburger}) {

  return (
    <>
      <Ul hamburger={hamburger}>
                
                <li>
                    <button><a href="/about">ABOUT</a></button>
                </li>
                <li>
                    <button><a href="/projects">PROJECTS</a></button>
                </li>
                <li>
                    <button><a href="/experience">EXPERIENCE</a></button>
                </li>
                <li>
                    <button><a href="/contact">CONTACT</a></button>
                </li>
                <li>
                    <button className='resume'><a href="https://drive.google.com/file/d/1ZSPc_4tME1mb1_9qD-uSV5rRdUDgiy7U/view?usp=sharing" download>RESUME</a></button>
                </li>
            
            </Ul>
    </>
  )
}

export default RightNav;
