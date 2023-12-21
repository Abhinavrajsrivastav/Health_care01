import React, { useState } from 'react';
import './Quiz.css';

function Quiz(props) {

    const onClick = () => {
        props.setShowApp(false);
    }

  const questions = [
    {
      questionText: 'Who is Prime Minister of India?',
      answerOptions: [
        { answerText: 'Vijay Rupani', isCorrect: false },
        { answerText: 'Manmohan singh', isCorrect: false },
        { answerText: 'Narendra Modi', isCorrect: true },
        { answerText: 'Deep Patel', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tata?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Ratan Tata', isCorrect: true },
        { answerText: 'Mukesh Ambani', isCorrect: false },
        { answerText: 'Gautam Adani', isCorrect: false },
      ],
    },
    {
      questionText: 'who is richest person in the world?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Mukesh Ambani', isCorrect: false },
        { answerText: 'Warren Buffett', isCorrect: false },
      ],
    },
    {
      questionText: 'how many countries in the world?',
      answerOptions: [
        { answerText: '120', isCorrect: false },
        { answerText: '183', isCorrect: false },
        { answerText: '170', isCorrect: false },
        { answerText: '195', isCorrect: true },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <>
      <h1 className='header'>Quiz</h1>
      <div className="app">
       {showScore ? (
  <div>
    <div className='score-section'>
      You scored {score} out of {questions.length}
    </div>
    <button className="back-button" onClick={onClick}>
      Back
    </button>
  </div>
) : null}
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>{questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )
      </div>
    </>
  );
}

export default Quiz;