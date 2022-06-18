import React from "react";
import NavBar from "./NavBar";

const AddSurveyPage = () => {
    function add_survey(){
        console.log("Clicked")
    }
    return(
        <div>
            <NavBar/>
            <div className="add-survey-page">
                <button className="add-btn" onClick={add_survey}>Add Survey</button>
            </div>
        </div>
    )
}

export default AddSurveyPage;