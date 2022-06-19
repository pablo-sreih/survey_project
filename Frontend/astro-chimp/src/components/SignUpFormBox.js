import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpFormBox = () => {
    const navigate = useNavigate()
    var name = useRef(null)
    var email = useRef(null)
    var password = useRef(null)

    function signUp(){

        let data = new FormData()
        data.append("name", name.current.value)
        data.append("email", email.current.value)
        data.append("password", password.current.value)

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
            <input ref={name} id="name" placeholder="Name"></input>
            <input ref={email} id="email" placeholder="Email"></input>
            <input ref={password} id="password" placeholder="Password"></input>
            <button type="button" onClick={signUp}>Sign Up</button>
            <Link to={"/"}>Log in</Link>
        </form>
    )
}

export default SignUpFormBox;