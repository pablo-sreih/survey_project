import React from "react";
import SignUpFormBox from "../components/SignUpFormBox"
import image from "../assets/logos/Logo.png"

const SignUp = () => {
    return(
        <div className="BG">
            <div className="login-container">
                <img src={image} alt=""></img>
                <SignUpFormBox/>
            </div>
        </div>
    )
}

export default SignUp;