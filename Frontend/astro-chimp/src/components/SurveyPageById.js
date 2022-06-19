import NavBar from "../components/NavBar"
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from "react";

function SurveyPageById() {
    
    const [questions, setQuestions] = useState([])
    let survey_id = localStorage.getItem("survey_id")

    async function getQuestions(){
      let data = new FormData()
      data.append('survey_id', survey_id)
      
    await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/api/get-questions",
        data:data
      })

    .then(function(response){
        setQuestions(response.data["questions"])
        // console.log(response.data["questions"])
        }
      )
    }
    
    useEffect(() => {
      getQuestions()
      console.log(questions)
    },[])

  return (
    <div>
      <NavBar/>
      <ul>
        {questions.map((value, index) => {
          return(
            <li key={index}>{value["name"]}</li>)
        })}
      </ul>
    </div>
  )
}

export default SurveyPageById;