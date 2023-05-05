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

const timer = document.querySelector(".time-left");
const question = document.querySelector(".question");
const questioText = document.querySelector(".question-text");



const answerOptions = document.querySelectorAll("input[type='radio']");
