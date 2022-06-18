import "./Question.scss";
import { questionData } from "../data/data";
import { useState } from "react";
import { Link } from "react-router-dom";

export const QuestionPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);

  const handleNextQuestion = () => {
    const newQuestion = currentQuestion + 1;
    setCurrentQuestion(newQuestion);
  };
  const handlePrevQuestion = () => {
    const newQuestion = currentQuestion - 1;
    setCurrentQuestion(newQuestion);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setAnswer(answer + 1);
    }

    if (currentQuestion < questionData.length - 1) {
      const newQuestion = currentQuestion + 1;
      setCurrentQuestion(newQuestion);
    }
  };
  // console.log(answer);

  return (
    <>
      <div className="question_wrap">
        <Link to="/">
          <p style={{ color: "#fff" }}> Về Start</p>
        </Link>
        <div className="question_container">
          <h4 className="question_number">
            {currentQuestion + 1}
            <span>/{questionData.length}</span>
          </h4>
          {answer ? (
            <p
              style={{ color: "#fff", marginBottom: "2rem", fontSize: "2rem" }}
            >
              Độ khớp {answer}/ {questionData.length}
            </p>
          ) : (
            ""
          )}

          <div className="question">
            <h4>{questionData[currentQuestion].questionText}</h4>
            {questionData[currentQuestion].answerOption.map((answer, index) => (
              <button
                className="answer"
                onClick={() => handleAnswer(answer.isCorrect)}
                key={index}
              >
                <p>{answer.answerText}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="question_btn">
          <button
            onClick={handlePrevQuestion}
            className={currentQuestion + 1 === 1 ? "disable" : "prev"}
          >
            <p>Trở về</p>
          </button>
          <button
            onClick={handleNextQuestion}
            className={
              currentQuestion + 1 === questionData.length ? "disable" : "next"
            }
          >
            <p>Tiếp tục</p>
          </button>
        </div>
      </div>
    </>
  );
};
