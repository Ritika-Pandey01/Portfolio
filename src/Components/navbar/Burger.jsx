import React,{useState} from 'react';
import styled from "styled-components";

const StyledBurger=styled.div`
width:2rem;
height:2rem;
position:fixed;
top:15px;
right:20px;
display:flex;
justify-content:space-around;
flex-flow:column nowrap;

div{
    width:2rem;
    height:0.25rem;
    background-color:${({hamburger})=>hamburger?'#EDE6DB':'#FFFFFF'};
    border-radius:2px;
    transform-origin:1px;

    &:nth-child(1){
        transform:${({hamburger})=>hamburger?'rotate(45deg)':'rotate(0)'};

    }
    &:nth-child(2){
        
        opacity:${({hamburger})=>hamburger?'0':'1'};
    }
    &:nth-child(3){
        transform:${({hamburger})=>hamburger?'rotate(-45deg)':'rotate(0)'};
    }
}
`;
function Burger() {
    const [hamburger,setHamburger]=useState(false);
  return (
    <StyledBurger hamburger={hamburger} onClick={()=>setHamburger(!hamburger)}>
      <div/>
      <div/>
      <div/>
    </StyledBurger>
  )
}

export default Burger;
