import React from 'react'
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

function AddQuestionPage() {
    const navigate = useNavigate()

  return (
    <div>
      <NavBar/>
      <div className='add-survey-page'>
      <button className='add-btn' onClick={() => {navigate("/questionadd")}}>Add question</button>
      </div>
      </div>
  )
}

export default AddQuestionPage;