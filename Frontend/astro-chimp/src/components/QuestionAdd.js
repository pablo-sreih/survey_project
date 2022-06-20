import React from 'react'
import NavBar from './NavBar';
import { useRef } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

function QuestionAdd() {

    let question_name = useRef(null)
    let select = useRef(null)
    function addQuestion(){
        let data = new FormData()
        data.append("survey_id", localStorage.getItem("survey_id"))
        data.append("name", question_name.current.value)
        data.append("type", select.current.value)

        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/admin/add-question",
            data:data
        })

        .then(function(response){
            console.log(response)
        })
    }

    function onchange(){
        if (select.current.value === "text"){
            render (<div>{question_name.current.value}
            <label>{select.current.value}</label></div>)
        } else {
            render (<div>
                <div>{question_name.current.value}</div>
                <label>{select.current.value}</label>
                <input></input>
                <button>Submit</button>
                </div>)
            }
        }

  return (
    <div>
        <NavBar/>
        <div className="add-question-container">
                <label>Add Question</label>
                <input ref={question_name}></input>
                <select ref={select}>
                  <option value="text">Text</option>
                  <option value="radio">Radio</option>
                  <option value="dropdown">Dropdown</option>
                  <option value="checkbox">Checkbox</option>
                </select>
                {}
        <button onClick={() => {onchange(); addQuestion()}}>Submit</button>
        </div>
    </div>
  )
}

export default QuestionAdd;