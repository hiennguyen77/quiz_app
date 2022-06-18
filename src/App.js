import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QuestionPage } from "./components/QuestionPage";
import { StartPage } from "./components/StartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/question" element={<QuestionPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
