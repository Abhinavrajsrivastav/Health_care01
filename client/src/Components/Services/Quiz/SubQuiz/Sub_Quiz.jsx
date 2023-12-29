import React from 'react';
import { Link } from 'react-router-dom';
import './Sub_quiz.css';

const Sub_Quiz = ({
  showScore,
  isSubmitVisible,
  score,
  questions,
  onClick,
  currentQuestion,
  handleAnswerButtonClick,
  handleSubmitButtonClick,
  popUpMessage,
}) => {
  return (
    <> 
    <Link to ="/Quiz">
      <>
      <a href="#" className="logo">
        <i className="fas fa-heartbeat"></i> Sukoon
      </a>
      <div className="app">
        {showScore&&!isSubmitVisible ? (
          <div className="scoreSection">
            <div className="score-section">
              <span>you scored {score} out of {questions.length}<br></br>{popUpMessage}</span>
            </div>
            <div className="submit_quiz_response">
            <button className="back-button" onClick={onClick}>
              Back
            </button>
            <button className="back-button" onClick={onClick}>
              Yes
            </button>
            </div>
          </div>
        ) : null}
        <>
          {currentQuestion < questions.length&&isSubmitVisible ? (
            <div className="question-area">
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">{questions[currentQuestion].questionText}</div>
              </div>

              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </>
        <div>
          {isSubmitVisible && showScore&& (
              <button className="submit-button" onClick={handleSubmitButtonClick}>
                Submit
              </button>
              
            )}
        </div>
      </div>
    </>
    </Link>
    </>
  )
}

export default Sub_Quiz
