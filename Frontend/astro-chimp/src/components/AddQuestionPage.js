import React from 'react'
import NavBar from './NavBar';
import SelectOptions from './SelectOptions';
import { render } from "@testing-library/react";

function AddQuestionPage() {

    function addQuestion(){
        render(
            <div className="add-question-container">
                <label>Add Question</label>
                <input></input>
                <SelectOptions/>
            </div>
        )
    }

  return (
    <div>
        <NavBar/>
        <div className='add-survey-page'>
        <button className='add-btn' onClick={addQuestion}>Add question</button>
        </div>
        </div>
  )
}

export default AddQuestionPage;