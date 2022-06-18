import Login from "./components/Login"
import './App.css';
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyPage from "./components/SurveyPage";

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path = "/" element = {<SurveyPage />}></Route>
      <Route path = "/signup" element = {<SignUp />}></Route>
      <Route path = "/surveypage" element = {<SurveyPage />}></Route>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;