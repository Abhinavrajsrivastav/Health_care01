import React, { useState } from 'react';
import './Quiz.css';

function Quiz(props) {

    const onClick = () => {
        props.setShowApp(false);
    }

  const questions = [
  {
    questionText: 'How often do you find it difficult to concentrate on tasks due to racing thoughts or excessive worry?',
    answerOptions: [
      { answerText: 'Rarely or never', isCorrect: false },
      { answerText: 'Occasionally', isCorrect: false },
      { answerText: 'Frequently', isCorrect: false },
      { answerText: 'Almost all the time', isCorrect: true },
    ],
  },
  {
    questionText: 'How would you describe your sleep patterns over the past month?',
    answerOptions: [
      { answerText: 'Regular and restful', isCorrect: false },
      { answerText: 'Occasionally disrupted', isCorrect: false },
      { answerText: 'Frequently disturbed', isCorrect: false },
      { answerText: 'Severely irregular or consistently poor', isCorrect: true },
    ],
  },
  {
    questionText: 'In the past two weeks, how often have you experienced a lack of interest or pleasure in activities that you usually enjoy?',
    answerOptions: [
      { answerText: 'Rarely or never', isCorrect: false },
      { answerText: 'Occasionally', isCorrect: false },
      { answerText: 'Frequently', isCorrect: false },
      { answerText: 'Almost all the time', isCorrect: true },
    ],
  },
  {
    questionText: 'How would you rate your overall energy levels throughout the day?',
    answerOptions: [
      { answerText: 'High and consistent', isCorrect: false },
      { answerText: 'Moderate, with fluctuations', isCorrect: false },
      { answerText: 'Low, especially in the afternoon', isCorrect: false },
      { answerText: 'Very low, struggling to stay awake', isCorrect: true },
    ],
  },
  {
    questionText: 'Over the past month, how often have you experienced feelings of hopelessness or a sense that things will never get better?',
    answerOptions: [
      { answerText: 'Rarely or never', isCorrect: false },
      { answerText: 'Occasionally', isCorrect: false },
      { answerText: 'Frequently', isCorrect: false },
      { answerText: 'Almost all the time', isCorrect: true },
    ],
  },
  {
    questionText: 'How do you typically cope with stress or challenging situations?',
    answerOptions: [
      { answerText: 'Effectively, using healthy coping mechanisms', isCorrect: false },
      { answerText: 'Moderately, with occasional reliance on unhealthy coping methods', isCorrect: false },
      { answerText: 'Ineffectively, often resorting to unhealthy coping mechanisms', isCorrect: false },
      { answerText: 'I don\'t cope well; stress overwhelms me', isCorrect: true },
    ],
  },
  {
    questionText: 'Have you noticed any significant changes in your appetite (either increase or decrease) over the past few weeks?',
    answerOptions: [
      { answerText: 'No changes', isCorrect: false },
      { answerText: 'Slight changes', isCorrect: false },
      { answerText: 'Noticeable changes', isCorrect: false },
      { answerText: 'Drastic changes', isCorrect: true },
    ],
  },
  {
    questionText: 'Over the past month, how has your motivation to engage in activities or work changed?',
    answerOptions: [
      { answerText: 'Increased motivation', isCorrect: false },
      { answerText: 'Moderate motivation with fluctuations', isCorrect: false },
      { answerText: 'Decreased motivation', isCorrect: false },
      { answerText: 'No motivation at all', isCorrect: true },
    ],
  },
  {
    questionText: 'How often do you feel overwhelmed by stress or a sense of impending doom?',
    answerOptions: [
      { answerText: 'Rarely or never', isCorrect: false },
      { answerText: 'Occasionally', isCorrect: false },
      { answerText: 'Frequently', isCorrect: false },
      { answerText: 'Almost all the time', isCorrect: true },
    ],
  },
  {
    questionText: 'Over the past month, how would you describe your social interactions and desire to connect with others?',
    answerOptions: [
      { answerText: 'Active and fulfilling', isCorrect: false },
      { answerText: 'Somewhat limited', isCorrect: false },
      { answerText: 'Isolated or withdrawn', isCorrect: false },
      { answerText: 'Completely withdrawn, avoiding social contact', isCorrect: true },
    ],
  },
];


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
            <>
  {currentQuestion < questions.length ? (
    <div className="question-area">
      <div className='question-section'>
        <div className='question-count'>
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className='question-text'>
          {questions[currentQuestion].questionText}
        </div>
      </div>

      <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  ) : null}
</>

      </div>
    </>
  );
}

export default Quiz;