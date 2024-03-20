const ques = [
  {
    q: "Which is the biggest continent in the world?",
    options: ["North America", "Asia", "Africa", "Australia"],
    ans: "Asia",
  },
  {
    q: "Which is the longest river in the world?",
    options: ["Great Ganga", "Nile", "Amazon", "Niger"],
    ans: "Nile",
  },
  {
    q: "Which is the largest ocean in the world?",
    options: [
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
      "Atlantic Ocean",
    ],
    ans: "Pacific Ocean",
  },
  {
    q: "Which is India's first super computer?",
    options: ["Param8000", "param80000", "param800", "param8"],
    ans: "Param8000",
  },
  {
    q: "Which bank is called bankers Bank of India?",
    options: [
      "Reserve Bank of India",
      "Punjab National Bank",
      "State Bank of India",
      "ICICI Bank",
    ],
    ans: "Reserve Bank of India",
  },
  {
    q: "Which is the largest animal in the world?",
    options: ["Shark", "Blue whale", "Elephant", "Giraffe"],
    ans: "Blue whale",
  },
  {
    q: "Which is largest animal on land?",
    options: ["Tiger", "White Elephant", "African Elephant", "Crocodile"],
    ans: "African Elephant",
  },
  {
    q: "Which is largest island in the world?",
    options: ["New Guinea", "Andaman Nicobar", "Greenland", "Hawaii"],
    ans: "Greenland",
  },
  {
    q: "Which is the largest flower in the world?",
    options: ["Rafflesia", "Jasmine", "Balloon Flower", "Camellia"],
    ans: "Rafflesia",
  },
  {
    q: "Which is the 29th state of India?",
    options: ["Uttarakhand", "Telangana", "Uttar Pradesh", "Madhya Pradesh"],
    ans: "Telangana",
  },
];

let currentQuestion = 0;
let currentScore = 0;
let flag = false;

loadQuestion(currentQuestion);

const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion == ques.length) {
    showScore();
    currentQuestion = ques.length - 1;
  }
  flag = false;
  verdictOff();
  loadQuestion(currentQuestion);
});

const prevBtn = document.getElementById("prev-btn");
prevBtn.addEventListener("click", () => {
  currentQuestion -= 1;
  if (currentScore > 0) {currentScore -= 1;}
  if (currentQuestion < 0) {currentQuestion = 0;}
  flag = false;
  verdictOff();
  loadQuestion(currentQuestion);
});

function loadQuestion(currentQuestion) {
  if (currentQuestion < ques.length && currentQuestion >= 0) {
    const question = document.getElementById("question");
    const options = document.querySelectorAll(".options");
    const quesNo = document.querySelector(".question-area span strong u");
    let i = 0;
    quesNo.innerHTML = `QUESTION ${currentQuestion + 1}`;
    question.innerHTML = ques[currentQuestion].q;

    options.forEach((item) => {
      item.style.backgroundColor = "";
    });

    options.forEach((item) => {
      item.innerHTML = ques[currentQuestion].options[i];
      i += 1;
    });
  }
}

const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");

op1.addEventListener("click", () => checkAnswer(op1));
op2.addEventListener("click", () => checkAnswer(op2));
op3.addEventListener("click", () => checkAnswer(op3));
op4.addEventListener("click", () => checkAnswer(op4));

function checkAnswer(clickedOption) {
  const selectedOption = clickedOption.innerHTML;
  const correctAnswer = ques[currentQuestion].ans;

  let message = "";
  if (!flag) {
    if (selectedOption === correctAnswer) {
      clickedOption.style.backgroundColor = "lightgreen";
      message = "CORRECT";
      currentScore += 1;
    } else {
      clickedOption.style.backgroundColor = "lightcoral";
      message =
        "INCORRECT. Correct answer is " + ques[currentQuestion].ans + ".";
    }
    verdictOn(message);
    flag = true;
  }
}

function verdictOn(message) {
  const verdict = document.querySelector(".verdict");
  const quizArea = document.querySelector(".quiz-area");
  quizArea.style.height = "75vh";
  verdict.style.display = "flex";
  verdict.innerHTML = message;
  console.log(message);
}

function verdictOff() {
  const verdict = document.querySelector(".verdict");
  const quizArea = document.querySelector(".quiz-area");
  quizArea.style.height = "70vh";
  verdict.style.display = "none";
}

function showScore() {
  alert("Final Score : " + currentScore + " / 10");
  currentQuestion = 0;
  currentScore = 0;
  loadQuestion(currentQuestion);
  window.reload();
}
