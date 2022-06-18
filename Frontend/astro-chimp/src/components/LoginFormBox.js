import React from "react";
import { Link } from "react-router-dom";

const LoginFormBox = () => {
    function login(){
        console.log("Login Clicked")
    }
    return(
        <form className="login-form-container">
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <a href="#">Forgot Password?</a>
            <button onClick={login}>Login</button>
            <Link to={"/signup"}>Create Account</Link>
        </form>
    )
}

export default LoginFormBox;