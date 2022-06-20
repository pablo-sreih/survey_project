import React from 'react'
import NavBar from './NavBar';
import SelectOptions from './SelectOptions';


function QuestionAdd() {
  return (
    <div>
        <NavBar/>
        <div className="add-question-container">
                <label>Add Question</label>
                <input></input>
                <SelectOptions/>
        <button>Submit</button>
        </div>
    </div>
  )
}

export default QuestionAdd;