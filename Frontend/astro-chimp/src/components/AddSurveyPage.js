import React, { useRef } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddSurveyPage = () => {
    
    const navigate = useNavigate()
    const survey_name = useRef(null)

    function addSurvey(){
        let data = new FormData()
        data.append('name', survey_name.current.value)

        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/admin/add-survey",
            data:data
        })

        .then(function(response){
            localStorage.setItem("survey_id", response.data["survey"]["id"])
            navigate("/addquestion")
        })
    }
    
    return(
        <div>
            <NavBar/>
            <center>
                <input className="input" ref={survey_name} placeholder="Survey Name"></input>
                <button onClick={addSurvey} className="add-btn">Add Survey</button>
            </center>
        </div>
    )
}

export default AddSurveyPage;