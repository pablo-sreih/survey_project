import React from "react";
import { Link } from "react-router-dom";

const SignUpFormBox = () => {
    function signUp(){
        console.log("SignUp Clicked")
    }
    return(
        <form className="login-form-container">
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <button onClick={signUp}>Sign Up</button>
            <Link to={"/"}>Log in</Link>
        </form>
    )
}

export default SignUpFormBox;