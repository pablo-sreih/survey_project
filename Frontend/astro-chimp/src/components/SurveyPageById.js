import axios from 'axios';
import React from 'react'

function SurveyPageById() {
    
    let survey_id = localStorage.getItem("survey_id")

    let data = new FormData()
    data.append('survey_id', survey_id)

    axios({
        method: "POST",
        url: "http://127.0.0.1:8000/api/get-questions",
        data:data
    })

    .then(function(response){
        console.log(response.data["questions"][0]["name"])
    })

  return (
    <div></div>
  )
}

export default SurveyPageById;