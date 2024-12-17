import React, { useState } from 'react';

const questions = [
  {
    questionText: 'Who wrote "Romeo and Juliet"?',
    options: ['Shakespeare', 'Dickens', 'Austen', 'Hemingway'],
    correctAnswer: 'Shakespeare',
  },
  {
    questionText: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    questionText: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    questionText: 'What is the largest planet in our Solar System?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Jupiter',
  },
  {
    questionText: 'Who discovered gravity?',
    options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Nikola Tesla'],
    correctAnswer: 'Isaac Newton',
  },
  {
    questionText: 'What is the boiling point of water in Celsius?',
    options: ['0°C', '50°C', '100°C', '200°C'],
    correctAnswer: '100°C',
  },
  {
    questionText: 'Who wrote "Pride and Prejudice"?',
    options: ['Emily Brontë', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 'Jane Austen',
  },
  {
    questionText: 'Which animal is known as the "King of the Jungle"?',
    options: ['Elephant', 'Tiger', 'Lion', 'Cheetah'],
    correctAnswer: 'Lion',
  },
  {
    questionText: 'What is the chemical symbol for water?',
    options: ['O2', 'H2O', 'CO2', 'NaCl'],
    correctAnswer: 'H2O',
  },
  {
    questionText: 'What is the smallest prime number?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '2',
  },
  {
    questionText: 'Who invented the telephone?',
    options: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Marie Curie'],
    correctAnswer: 'Alexander Graham Bell',
  },
  {
    questionText: 'Who was the first person to step on the Moon?',
    options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Michael Collins'],
    correctAnswer: 'Neil Armstrong',
  },
  {
    questionText: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'Japan', 'Thailand', 'South Korea'],
    correctAnswer: 'Japan',
  },
  {
    questionText: 'What is the hardest natural substance on Earth?',
    options: ['Gold', 'Iron', 'Diamond', 'Quartz'],
    correctAnswer: 'Diamond',
  },
  {
    questionText: 'Who wrote the novel "1984"?',
    options: ['George Orwell', 'Mark Twain', 'Aldous Huxley', 'Leo Tolstoy'],
    correctAnswer: 'George Orwell',
  },
  {
    questionText: 'Which element has the chemical symbol "Au"?',
    options: ['Silver', 'Gold', 'Aluminium', 'Argon'],
    correctAnswer: 'Gold',
  },
  {
    questionText: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Venus', 'Mars', 'Mercury'],
    correctAnswer: 'Mars',
  },
  {
    questionText: 'Who is the author of "The Odyssey"?',
    options: ['Homer', 'Virgil', 'Socrates', 'Plato'],
    correctAnswer: 'Homer',
  },
  {
    questionText: 'What is the tallest mountain in the world?',
    options: ['Mount Everest', 'K2', 'Kilimanjaro', 'Denali'],
    correctAnswer: 'Mount Everest',
  },
  {
    questionText: 'Which gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 'Carbon Dioxide',
  },
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');


  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };


  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question or end quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    } else {
      alert(`Quiz finished! Your score is: ${score + 1}`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='center'>
      <h2>Quiz App</h2>
      <div>
        <h3 style={center}>{currentQuestion.questionText}</h3>
        <div>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelection(option)}
              style={{
                backgroundColor: selectedAnswer === option ? 'white' : 'transparent',
                color: selectedAnswer === option ? '#242424' : 'white',

              }}
            >
              {option}
            </button>
          ))}
        </div>
        <br/>
        <div>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
      <div>
        <p style={center}>Score: {score}</p>
        <p style={center}>Question {currentQuestionIndex + 1} of {questions.length}</p>
      </div>
    </div>
  );
}

const center = {
  textAlign: "center"
};



export default QuizApp;
