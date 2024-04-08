const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const heading = document.getElementById("heading");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNewQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNewQuestion();
}
function setNewQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  heading.innerText = "Quiz App";
  heading.style.color = "black";
  document.body.classList.remove("correct");
  document.body.classList.remove("wrong");
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (setStatusClass(document.body, correct)) {
    heading.innerText = "correct!";
    heading.style.color = "green";
  } else {
    heading.innerText = "wrong !";
    heading.style.color = "tomato";
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = " Restart ";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
    return true;
  } else {
    element.classList.add("wrong");
    return false;
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      {
        text: "Hypertext Markup Language",
        correct: true,
      },
      {
        text: "Hyper Text Markup Language",
        correct: false,
      },
      {
        text: "Home Tool Markup Language",
        correct: false,
      },
      {
        text: "Hyperlinks and Text Markup Language",
        correct: false,
      },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      {
        text: "Cascading Style Sheets",
        correct: true,
      },
      {
        text: "Cascading Sheets Style",
        correct: false,
      },
      {
        text: "Computer Style Sheets",
        correct: false,
      },
      {
        text: "Creative Style Sheets",
        correct: false,
      },
    ],
  },
  {
    question: "Which HTML element is used for creating a hyperlink?",
    answers: [
      {
        text: "<a>",
        correct: true,
      },
      {
        text: "<link>",
        correct: false,
      },
      {
        text: "<hyper>",
        correct: false,
      },
      {
        text: "<url>",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    answers: [
      {
        text: "color",
        correct: true,
      },
      {
        text: "text-color",
        correct: false,
      },
      {
        text: "font-color",
        correct: false,
      },
      {
        text: "text-style",
        correct: false,
      },
    ],
  },
  {
    question: "What is the correct way to comment out code in HTML?",
    answers: [
      {
        text: "<!-- Comment -->",
        correct: true,
      },
      {
        text: "// Comment",
        correct: false,
      },
      {
        text: "/* Comment */",
        correct: false,
      },
      {
        text: "// Comment //",
        correct: false,
      },
    ],
  },
  {
    question: "Which CSS property is used to add spacing between letters?",
    answers: [
      {
        text: "letter-spacing",
        correct: true,
      },
      {
        text: "word-spacing",
        correct: false,
      },
      {
        text: "line-spacing",
        correct: false,
      },
      {
        text: "text-spacing",
        correct: false,
      },
    ],
  },
  {
    question: "What does the 'display: none;' CSS property do?",
    answers: [
      {
        text: "Hides the element",
        correct: true,
      },
      {
        text: "Shows the element",
        correct: false,
      },
      {
        text: "Changes the background color",
        correct: false,
      },
      {
        text: "Increases the font size",
        correct: false,
      },
    ],
  },
  {
    question: "Which HTML tag is used for creating a list with bullet points?",
    answers: [
      {
        text: "<ul>",
        correct: true,
      },
      {
        text: "<ol>",
        correct: false,
      },
      {
        text: "<li>",
        correct: false,
      },
      {
        text: "<dl>",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which CSS property is used for changing the background color of an element?",
    answers: [
      {
        text: "background-color",
        correct: true,
      },
      {
        text: "color",
        correct: false,
      },
      {
        text: "background",
        correct: false,
      },
      {
        text: "background-style",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of the 'href' attribute in an HTML <a> tag?",
    answers: [
      {
        text: "Specifies the URL of the link",
        correct: true,
      },
      {
        text: "Defines the height of the link",
        correct: false,
      },
      {
        text: "Sets the target of the link",
        correct: false,
      },
      {
        text: "Provides alternative text for the link",
        correct: false,
      },
    ],
  },
  // Add more questions here...
];

questions.forEach((question) => {
  shuffleArray(question.answers);
});

// Function to shuffle array elements randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// Make sure to shuffle the questions array if needed
// You can use a shuffling function like Fisher-Yates shuffle
