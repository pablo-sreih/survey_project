import React from "react";
import NavBar from "./NavBar";
import SelectOptions from "./SelectOptions";
import { render } from "@testing-library/react";

const AddSurveyPage = () => {

    
    return(
        <div>
            <NavBar/>
            <div className="add-survey-page">
                <button onClick={() => {
                    console.log("cl")
                    render(
                        <SelectOptions/>
                    )
                }} className="add-btn">Add Survey</button>
                <div id = "add-question-container"></div>
            </div>
        </div>
    )
}

export default AddSurveyPage;