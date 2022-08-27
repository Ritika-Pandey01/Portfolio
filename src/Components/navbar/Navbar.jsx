import React from "react";
import "./navbar.css";
import logo from "../../assets/Logo.png";
import RightNav from "./RightNav";
import Burger from "./Burger";

function Navbar(){
    return(
        <>
            <nav>
            <a href="#"><img src={logo} alt="logo" className="logo" title="Ritika Pandey's Portfolio"></img></a>
                <Burger/>

                <RightNav/>
            </nav>
        </>
    );
}
export default Navbar;