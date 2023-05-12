const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const startButton = document.getElementById('start-btn');
const timerElement = document.getElementById('time-remaining');
const gameOverContainer = document.getElementById('game-over-container');
const finalScoreElement = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const saveButton = document.getElementById('save-btn');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuestionIndex = 0;
let timeRemaining = 60;
let timerId;

// Quiz questions
const questions = [
  {
    question: 'Question 1: Which language runs in a web browser?',
    choices: ['Java', 'HTML', 'Pyhton', 'JavaScript'],
    correctAnswer: 'JavaScript'
  },
  {
    question: 'Question 2: What year was JavaScript launched?',
    choices: ['1996', '1995', '1994', '1993'],
    correctAnswer: '1995'
  },
  // Add more questions...
];

// Event listener for the start button
startButton.addEventListener('click', startQuiz);

// Event listener for the save button
saveButton.addEventListener('click', saveScore);

// Function to start the quiz
function startQuiz() {
  startButton.disabled = true;
  quizContainer.style.display = 'block';
  showQuestion();
  startTimer();
}

// Function to show a question
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = '';

  currentQuestion.choices.forEach(choice => {
    const choiceButton = document.createElement('button');
    choiceButton.textContent = choice;
    choiceButton.classList.add('choice');
    choicesElement.appendChild(choiceButton);
  });

  // Add event listeners for each choice button
  const choiceButtons = document.querySelectorAll('.choice');
  choiceButtons.forEach(button => {
    button.addEventListener('click', handleChoice);
  });
}

// Function to handle a choice selection
function handleChoice(event) {
  const selectedChoice = event.target.textContent;
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedChoice === currentQuestion.correctAnswer);
}

