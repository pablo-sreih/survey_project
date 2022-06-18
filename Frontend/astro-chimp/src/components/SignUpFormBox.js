import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpFormBox = () => {
    const navigate = useNavigate()

    function signUp(){
        var name = document.getElementById("name")
        var email = document.getElementById("email")
        var password = document.getElementById("password")

        let data = new FormData()
        data.append("name", name.value)
        data.append("email", email.value)
        data.append("password", password.value)

        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/register",
            data:data
        })

        .then(() => {
            navigate('/surveypage')
        })
    }

    return(
        <form className="login-form-container">
            <input id="name" placeholder="Name"></input>
            <input id="email" placeholder="Email"></input>
            <input id="password" placeholder="Password"></input>
            <button type="button" onClick={signUp}>Sign Up</button>
            <Link to={"/"}>Log in</Link>
        </form>
    )
}

export default SignUpFormBox;