import React from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const AddSurveyPage = () => {

    const navigate = useNavigate()
    
    return(
        <div>
            <NavBar/>
            <div className="add-survey-page">
                <button onClick={() => {navigate("/addquestion")}} className="add-btn">Add Survey</button>
                <div id = "add-question-container"></div>
            </div>
        </div>
    )
}

export default AddSurveyPage;