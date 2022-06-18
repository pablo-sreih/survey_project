import Login from "./components/Login"
import './App.css';
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyPage from "./components/SurveyPage";
import AddSurveyPage from "./components/AddSurveyPage";

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path = "/" element = {<AddSurveyPage />}></Route>
      <Route path = "/signup" element = {<SignUp />}></Route>
      <Route path = "/surveypage" element = {<SurveyPage />}></Route>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;