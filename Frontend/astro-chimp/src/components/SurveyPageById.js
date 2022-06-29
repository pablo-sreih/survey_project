import NavBar from "../components/NavBar"
import PossibleAnswer from "./PossibleAnswer";
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from "react";
import { render } from "react-dom";

function SurveyPageById() {
    
    const [questions, setQuestions] = useState([])
    const [possibleAnswers, setPossibleAnswers] = useState([])

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
        console.log(response.data["questions"])
        for (var i =0; i < response.data["questions"].length; i++){
          localStorage.setItem(`question_id${i}`, response.data["questions"][i]["id"])
        }
        }
      )
    }

    async function submitAnswers(id, answer){

      let data = new FormData()
      data.append("question_id", id)
      data.append("answer", answer)

      await axios({
        method: "POST",
        url: "http://localhost:8000/api/user/add-answer",
        data:data
      })

      .then(function (response){
        console.log(response)
      })
    }
      
      
    
    useEffect(() => {
      getQuestions()
    },[])

  return (
    <div>
      <NavBar/>
      <div>
        {questions.map((value, index) => {
          return(
            <div>
            <li className="list-question" id={value["id"]} key={index}>{value["name"]}</li>
            <PossibleAnswer type={value["type"]} question_id={value["id"]}/>
            </div>)
        })}
      </div>
      <button onClick={() => {
        const input = document.getElementsByTagName("input")
        for (var i = 0; i < input.length; i++){
          if (input[i].type == "text"){
            console.log(input[i].id)
            submitAnswers(input[i].id, input[i].value)
          } else if (input[i].checked == true) {
            console.log(input[i].name)
            submitAnswers(input[i].name, input[i].value)
        } 
      }}}>Submit</button>
    </div>
  )
}

export default SurveyPageById;