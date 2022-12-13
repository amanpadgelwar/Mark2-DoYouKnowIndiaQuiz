var readlineSync = require('readline-sync');
var score = 0;

//welcoming the user
function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW India?");
}


//var  for asking questions

var q1 = {
  question: "Where does PMO of India live?",
  answer: " New Delhi"
}
var q2 = {
  question: "When is Gandhiji's birthday?",
  answer: "2nd Oct"
}
var q3 = {
  question: "Where is Taj Mahal Located?",
  answer: "Agra"
}
var q4 = {
  question: "How many states does India have?",
  answer: "28"
}
var q5 = {
  question: "Financial capital of India is ?",
  answer: "Mumbai"
}

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct Answer");
    score = score + 1
  }
  else {
    console.log("Incorrect  Answer");

  }
  console.log("current score: ", score)
  console.log("-------------")
}


//game fuction
var questionsArray = [q1, q2, q3, q4, q5];


function game() {
  for (var i = 0; i <5; i++){
    var currentQuestions = questionsArray[i];
  play(currentQuestions.question, currentQuestions.answer)
}

}
//scores
var highScores = [
  {
    name: "Tanay",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}



welcome();
game();
showScores();
