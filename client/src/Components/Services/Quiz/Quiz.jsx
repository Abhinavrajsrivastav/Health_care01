// Quiz.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sub_Quiz from './SubQuiz/Sub_Quiz.jsx';

function Quiz() {
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);

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

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [isSubmitVisible, setSubmitVisible] = useState(true);
  const [popUp, setPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState(null);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setSubmitVisible(true);
    }
  };

  const handleSubmitButtonClick = () => {
    setSubmitVisible(false);
    setPopUp(true);

    // Define the pop-up messages based on the user's score
    if (score < 5) {
      setPopUpMessage("Would you like to talk to our expert?");
    } else if (score >= 5 && score <= 7) {
      setPopUpMessage("Consider taking some time to relax and try meditation.");
    } else if (score >= 8 && score <= 10) {
      setPopUpMessage("You are absolutely fine! Enjoy your day.");
    }
  };

  return (
    <>
      <Sub_Quiz
        setPopUp={setPopUp}
        showScore={showScore}
        isSubmitVisible={isSubmitVisible}
        score={score}
        questions={questions}
        onClick={() => navigate(-1)}
        currentQuestion={currentQuestion}
        handleAnswerButtonClick={handleAnswerButtonClick}
        handleSubmitButtonClick={handleSubmitButtonClick}
        popUpMessage={popUpMessage}
      />
    </>
  );
}

export default Quiz;
