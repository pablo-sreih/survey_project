import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginFormBox = () => {

    const navigate = useNavigate()

    function login(){
        var email = document.getElementById('email')
        var password = document.getElementById('password')

        let data = new FormData();
        data.append('email', email.value)
        data.append('password', password.value)

        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/login",
            data: data
        })

        .then(function (response) {
            if (response.data["user"]["is_admin"] === 1){
                navigate('/addsurvey')
            } else {
                navigate('/surveypage')
            }
        })

        .catch((error) => {
            alert("User Not Found")
        })
    }

    return(
        <form className="login-form-container">
            <input id="email" placeholder="Email"></input>
            <input id="password" placeholder="Password"></input>
            <a>Forgot Password?</a>
            <button type="button" onClick={login}>Login</button>
            <Link to={"/signup"}>Create Account</Link>
        </form>
    )
}

export default LoginFormBox;