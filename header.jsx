import React from "react";
import logo from "../images/logo.jpeg";
function Header(){
    return (
        <div className="topbox">
            <img src={logo} alt="travelogo"/>
            <p>my travel journal</p>
        </div>
    )
};
export default Header;