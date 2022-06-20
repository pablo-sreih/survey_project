import { useEffect, useState } from "react";
import React from "react";
import NavBar from "../components/NavBar"
import axios from "axios";
import SurveyElement from "./SurveyElement";
import { useNavigate } from "react-router-dom";

const SurveyPage = () => {

    const [surveys, setSurveys] = useState([])
    const navigate = useNavigate()

    function clicked(id){
        console.log(id)
        localStorage.setItem("survey_id", id)
        navigate('/survey')
    }

    function getSurveys(){
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/get-surveys",
        })
    
        .then(function (response) {
            setSurveys(response.data["surveys"])
        })
    }

    useEffect(() => {
        getSurveys()
    },[])

    return(
        <div>
            <NavBar/>
            <h1 className="page-title">Surveys</h1>
            <div className="survey-container">
                {
                    surveys.map((value, index) => {
                        return(
                            <SurveyElement key = {index} pname = {value["name"]} clicked = {() => {
                                clicked(value["id"])
                            }}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SurveyPage;