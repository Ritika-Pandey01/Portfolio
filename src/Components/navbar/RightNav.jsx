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
 @media only screen and (max-width: 600px) {
  padding:10px;
      flex-flow: column nowrap;
      text-align: center;
      position: fixed;
      right: 0;
      background-color: #0d2022;
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
      background-color: #0d2022;
      width:200px;
      transform: ${({hamburger})=>hamburger?'translateX(0)':'translateX(100%)'};
    
 }`;
function RightNav({hamburger}) {
  return (
    <>
      <Ul hamburger={hamburger}>
                
                <li>
                    <button><a href="#">ABOUT</a></button>
                </li>
                <li>
                    <button><a href="#">EDUCATION</a></button>
                </li>
                <li>
                    <button><a href="#">EXPERIENCE</a></button>
                </li>
                <li>
                    <button><a href="#">SOCIALS</a></button>
                </li>
            
            </Ul>
    </>
  )
}

export default RightNav;
