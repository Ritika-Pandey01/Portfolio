import React from "react";
import "./navbar.css";


import Burger from "./Burger";

function Navbar(){
    return(
        <>
            <nav>
            <a href="#"><h1>Ritika Pandey</h1></a>
                <Burger/>

                
            </nav>
        </>
    );
}
export default Navbar;