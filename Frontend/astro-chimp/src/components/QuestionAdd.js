import React from 'react'
import NavBar from './NavBar';
import SelectOptions from './SelectOptions';
import { useRef } from 'react';
import axios from 'axios';


function QuestionAdd() {

    let question_name = useRef(null)

    function addQuestion(){
        let data = new FormData()
        data.append("survey_id", localStorage.getItem("survey_id"))
        data.append("name", question_name.current.value)
        data.append("type", "type")

        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/admin/add-question",
            data:data
        })

        .then(function(response){
            console.log(response)
        })
    }

  return (
    <div>
        <NavBar/>
        <div className="add-question-container">
                <label>Add Question</label>
                <input ref={question_name}></input>
                <SelectOptions/>
        <button onClick={addQuestion}>Submit</button>
        </div>
    </div>
  )
}

export default QuestionAdd;