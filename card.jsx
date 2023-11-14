import React from "react";
import logo from "../images/locator.png";
function Card(props){
return(
    <div className="cardbox">
        <img src={props.img} className="beauty"/>
        <div className="box1">
        <div className="box2">
            <img src={logo} alt="logo" className="log"/>
            <p>{props.country}</p>
            <a href={props.locator} target="_blank" rel="noopener noreferrer"className="link">view on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <h6>{props.date}</h6>
        <p>{props.explanation}</p>
        </div>
        
    </div>
);
}
export default Card;