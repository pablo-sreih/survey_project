import React from "react";
import NavBar from "../components/NavBar"
import axios from "axios";
import SurveyElement from "./SurveyElement";


const SurveyPage = () => {
    function createSurvey(surveyName){
        var div = document.createElement("div");
        div.setAttribute("class", "survey-box");
        div.innerText = surveyName;
        var div2 = document.getElementsByClassName("survey-container");
        div2[0].appendChild(div)
    }
    
    return(
        
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/get-surveys",
        })
    
        .then(function (response) {
            console.log(response.data)
            var data = response.data["surveys"]
            for (var i = 0; i < data.length; i++){
                var surveyName = data[i]["name"]
                createSurvey(surveyName)
            }
        }),
        

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