import Login from "./components/Login"
import './App.css';
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyPage from "./components/SurveyPage";
import AddSurveyPage from "./components/AddSurveyPage";
import SurveyPageById from "./components/SurveyPageById";
import AddQuestionPage from "./components/AddQuestionPage";

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path = "/" element = {<Login />}></Route>
      <Route path = "/signup" element = {<SignUp />}></Route>
      <Route path = "/surveypage" element = {<SurveyPage />}></Route>
      <Route path = "/addsurvey" element = {<AddSurveyPage />}></Route>
      <Route path = "/survey" element = {<SurveyPageById />}></Route>
      <Route path = "/addquestion" element = {<AddQuestionPage />}></Route>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;