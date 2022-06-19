import React from "react";

const SurveyElement = (props) => {
    return(
        <div className="survey-box" onClick={props.clicked}>
            {props.pname}
        </div>
    )
}

export default SurveyElement;