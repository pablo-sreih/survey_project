import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/logos/Logo2.png"

const NavBar = () => {
    return(
        <div className="Nav-Div">
            <img src={image} alt=""></img>
            <div className="links">
                <Link to = {"/surveypage"}>Surveys</Link>
                <Link to = {"/"} onClick={localStorage.clear()}>Logout</Link>
            </div>
        </div>
    )
}

export default NavBar;