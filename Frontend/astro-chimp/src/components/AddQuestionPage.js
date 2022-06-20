import React from 'react'
import NavBar from './NavBar';
import SelectOptions from './SelectOptions';
import { render } from "@testing-library/react";

function AddQuestionPage() {
  return (
    <div>
        <NavBar/>
        AddQuestionPage
        <button className='add-btn' onClick={() => {
            console.log("cl")
            render(
                <div className="add-question-container">
                    <label>Add Question</label>
                    <input></input>
                    <SelectOptions/>
                </div>
            )
        }}>Add question</button>
        </div>
  )
}


export default AddQuestionPage;