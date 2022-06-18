import React from "react";
import NavBar from "../components/NavBar"
import SurveyElement from "./SurveyElement";


const SurveyPage = () => {
    return(
        <div>
            <NavBar/>
            <h1 className="page-title">Surveys</h1>
            <div className="survey-container">
                <SurveyElement/>
                <SurveyElement/>
                <SurveyElement/>
                <SurveyElement/>
                <SurveyElement/>
                <SurveyElement/>
                <SurveyElement/>
                <SurveyElement/>
            </div>
        </div>
    )
}

export default SurveyPage;