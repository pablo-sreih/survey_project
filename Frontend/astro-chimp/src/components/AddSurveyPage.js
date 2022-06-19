import React from "react";
import NavBar from "./NavBar";

const AddSurveyPage = () => {
    
    function addQuestion(){
        var container = document.getElementById("add-question-container");
        var av_options = ["Text", "Radio", "Checkbox", "Dropdown"];
        var div = document.createElement("div");
        var select = document.createElement("select");
        var option = document.createElement("option");
        for (var av_option in av_options){
            option.innerText = av_option
            select.appendChild(option)
        }
        div.appendChild(select);
        container.appendChild(div);
    }

    return(
        <div>
            <NavBar/>
            <div className="add-survey-page">
                <button onClick={addQuestion} className="add-btn">Add Survey</button>
                <div id = "add-question-container"></div>
            </div>
        </div>
    )
}

export default AddSurveyPage;