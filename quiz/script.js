// banco de dados (perguntas)
const questions = [
  {
    question: "qual a capital da França?",
    options: [
      { option: "Roma", correct: false },
      { option: "Londres", correct: false },
      { option: "Paris", correct: true },
      { option: "Berlim", correct: false },
    ], // array
  }, //objeto

  {
    question: "Qual é o maior páis do mundo",
    options: [
      { option: "Brasil", correct: false },
      { option: "EUA", correct: false },
      { option: "China", correct: false },
      { option: "Russia", correct: true },
    ], // array
  }, //objeto

  {
    question: "Quem escreveu a obra 'O Príncipe'?",
    options: [
      { option: "Maquiavel", correct: false },
      { option: "Monstesquieu", correct: false },
      { option: "Rousseau", correct: true },
      { option: "Voltaire", correct: false },
    ], // array
  }, //objeto
];

// question container
const question = document.querySelector(".question");
const questionText = document.querySelector(".question-text");
const answerOptions = document.querySelectorAll("input[type='radio']");
// timer container
const timer = document.querySelector(".time-left");
// button container
const submitButton = document.querySelector("#submit-button");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
// result container
const resultContainer = document.querySelector(".result-container");
const result = document.querySelector(".result");

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let intervalId;

// functions sequence

// time function
const setTimeLeft = () => {
  timeLeft--;
  timer.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(intervalId);
    checkAnswer();
  }
};

// start timer
const startTimer = () => {
  intervalId = setInterval(setTimeLeft, 1000);
};

// stop timer
const stopTimer = () => {
  clearInterval(intervalId);
};

// question change function
const displayQuestions = () => {
  question.textContent = `Questão ${currentQuestion + 1};`;
  questionText.textContent = questions[currentQuestion].question;
  for (i = 0; i < answerOptions.length; i++) {
    answerOptions[i].value = questions[currentQuestion].options[i].correct;

    answerOptions[i].nextSibling.textContent =
      questions[currentQuestion].options[i].option;

    answerOptions[i].checked = false;
  }
};
