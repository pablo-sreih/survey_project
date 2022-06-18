import React from "react";
import LoginFormBox from "../components/LoginFormBox"
import image from "../assets/logos/Logo.png"

const Login = () => {
    return(
        <div className="BG">
            <div className="login-container">
                <img src={image} alt=""></img>
                <LoginFormBox/>
            </div>
        </div>
    )
}

export default Login;