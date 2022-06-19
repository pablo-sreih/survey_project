import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginFormBox = () => {

    const navigate = useNavigate()
    const email = useRef(null)
    const password = useRef(null)

    function login(){
        let data = new FormData();
        data.append('email', email.current.value)
        data.append('password', password.current.value)

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
            <input ref={email} id="email" placeholder="Email"></input>
            <input ref={password} id="password" placeholder="Password"></input>
            <a>Forgot Password?</a>
            <button type="button" onClick={login}>Login</button>
            <Link to={"/signup"}>Create Account</Link>
        </form>
    )
}

export default LoginFormBox;