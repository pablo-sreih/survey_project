import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginFormBox = () => {

    function login(){
        var email = document.getElementById('email')
        var password = document.getElementById('password')

        let data = new FormData;
        data.append('email', email.value)
        data.append('password', password.value)

        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/login",
            data: data
        })

        .then(() => {
            alert("User Found")
        })

        .catch((error) => {
            alert("User Not Found")
        })
    }
    
    return(
        <form className="login-form-container">
            <input id="email" placeholder="Email"></input>
            <input id="password" placeholder="Password"></input>
            <a href="#">Forgot Password?</a>
            <button type="button" onClick={login}>Login</button>
            <Link to={"/signup"}>Create Account</Link>
        </form>
    )
}

export default LoginFormBox;