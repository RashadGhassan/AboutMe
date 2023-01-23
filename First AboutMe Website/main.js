var Name = (document.getElementById("welcome").textContent =
  "Welcome " + prompt("Please Enter Your Name:") + "!");
// var Name = (document.getElementById("welcome").textContent = "Welcome Rashad!");
var correctDishes = new Array();
correctDishes[0] = "Fried Chicken";
correctDishes[1] = "Shrimp Tempura";
correctDishes[2] = "Pansit";
correctDishes[3] = "Fried Rice";
correctDishes.sort();
var userAttempts = new Array();
var answerStat = new Array();
var answerCounter = 0;
var rightAnswer = 0;
var wrong = 3;
var done = false;
var printTimes = true;
var resultTable = '<table border="1" id="tableJs">';
function checkAnswer(check) {
  if (done) {
    alert("The Game is done... Refresh to retry!!");
  } else if (
    check === "Fried Chicken" ||
    check === "Shrimp Tempura" ||
    check === "Pansit" ||
    check === "Fried Rice"
  ) {
    //goes in if the user answered the question correctly
    rightAnswer++;
    answerStat[answerCounter] = "correct";
    userAttempts[answerCounter] = check;
    done = true;
    //goes in if all the answer is answered correctly
    alert("Congratulations you answered Correctly!! 😄😄😁");
    document.getElementById("section3").innerHTML +=
      '<img src="img/win.gif" alt="winner" id="winner"/>';
  } else {
    //goes in if the answer is wrong
    wrong--;
    answerStat[answerCounter] = "incorrect";
    userAttempts[answerCounter] = check;

    if (wrong <= 0) {
      done = true;
      //goes in if the user has no tries left and answered all the question incorrectly
      alert(
        "No tries Left 😓... Check the correct answers in the console section."
      );
    } else {
      alert("Wrong! Try Again...");
    }
  }
  answerCounter++;
  if (printTimes) {
    if (done) {
      printTimes = false;
      for (i = 0; i < userAttempts.length; i++) {
        resultTable += "<tr>";
        if (answerStat[i] == "correct") {
          resultTable +=
            "<td class='correctAnswer'>" +
            userAttempts[i] +
            "</td><td class='correctAnswer'>" +
            answerStat[i] +
            "</td></tr>";
        } else {
          resultTable +=
            "<td class='wrongAnswer'>" +
            userAttempts[i] +
            "</td><td class='wrongAnswer'>" +
            answerStat[i] +
            "</td></tr>";
        }
      }
      document.getElementById("tableResult").innerHTML = resultTable;
      document.getElementById("message").innerHTML =
        "<br><p>Check all possible correct answers in the console section</p>";
      //logging the correct answers in the console
      for (i = 0; i < correctDishes.length; i++) {
        console.log(i, correctDishes[i]);
      }
    }
  }
}
