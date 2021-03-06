import React, {useState, useEffect} from 'react'
import axios from "axios"

function PossibleAnswer(props) {

    const [possibleAnswers, setPossibleAnswers] = useState([])
    let type = props.type
    let data = new FormData()
    data.append("question_id", props.question_id)


    async function getPossibleAnswers(){
        await axios({
            method: "POST",
            url: "http://localhost:8000/api/get-all-possible-answers",
            data:data
        })
        .then(function (response){
            setPossibleAnswers(response.data["possible_answers"])
            console.log(response.data)
        })
    }
    

    useEffect(() => {
        getPossibleAnswers()
    },[])


  return (
    <div>
        {(type == "text") ? <input id={props.question_id} className='input' type="text"/> : ""} 
        {possibleAnswers.map((value, index) => {
        return(
            (type == "radio") ? <label className='radio'>
            <input value={value["possible_answer"]} type="radio" key={index} name={props.question_id}/> {value["possible_answer"]}</label> : 
            (type == "checkbox") ? <label className='radio'>
            <input value={value["possible_answer"]} type="checkbox" key={index} name={props.question_id}/> {value["possible_answer"]}</label> : ""
            //(type == "dropdown") ? <select className='radio'>
            //<option key={index} name={props.question_id}>{value["possible_answer"]}</option></select> : 
        )
    })}
    </div>
  )
}


export default PossibleAnswer;