let yours = document.getElementById("you_choose");
let comp = document.getElementById("comp_choose");
let result = document.getElementById("result");
let image = document.getElementById("image");
let user_score = document.getElementById("user_score");
let comp_score = document.getElementById("comp_score");
let your_score = 0;
let opponent_score = 0;

function stone() {
    yours.innerHTML = "You Chose: Stone"
    var options = ["Stone", "Paper", "Scissors"];

    var randomIndex = Math.floor(Math.random() * options.length);


    var chosenOption = options[randomIndex];
    if (chosenOption == "Paper") {
        comp.innerHTML = "Computer Chose: Paper"
        result.innerHTML = "You Lose!"
        opponent_score++
        comp_score.innerHTML = opponent_score

    }
    else if (chosenOption == "Scissors") {
        comp.innerHTML = "Computer Chose: Scissors"
        result.innerHTML = "You Win!"
        your_score++
        user_score.innerHTML = your_score
    }
    else {
        comp.innerHTML = "Computer Chose: Stone"
        result.innerHTML = "It's a Tie!"

    }
}
function paper() {
    yours.innerHTML = "You Chose: Paper"
    var options = ["Stone", "Paper", "Scissors"];

    var randomIndex = Math.floor(Math.random() * options.length);


    var chosenOption = options[randomIndex];
    if (chosenOption == "Scissors") {
        comp.innerHTML = "Computer Chose: Scissors"
        result.innerHTML = "You Lose!"
        opponent_score++
        comp_score.innerHTML = opponent_score
    }
    else if (chosenOption == "Stone") {
        comp.innerHTML = "Computer Chose: Stone"
        result.innerHTML = "You Win!"
        your_score++
        user_score.innerHTML = your_score
    }
    else {
        comp.innerHTML = "Computer Chose: Paper"
        result.innerHTML = "It's a Tie!"

    }
}
function scissors() {
    yours.innerHTML = "You Chose: Scissors"
    var options = ["Stone", "Paper", "Scissors"];

    var randomIndex = Math.floor(Math.random() * options.length);


    var chosenOption = options[randomIndex];
    if (chosenOption == "Stone") {
        comp.innerHTML = "Computer Chose: Stone"
        result.innerHTML = "You Lose!"
        opponent_score++
        comp_score.innerHTML = opponent_score
    }
    else if (chosenOption == "Paper") {
        comp.innerHTML = "Computer Chose: Paper"
        result.innerHTML = "You Win!"
        your_score++
        user_score.innerHTML = your_score
    }
    else {
        comp.innerHTML = "Computer Chose: Scissors"
        result.innerHTML = "It's a Tie!"

    }
}
function reset() {
    your_score = 0
    opponent_score = 0
    user_score.innerHTML = 0
    comp_score.innerHTML = 0
    yours.innerHTML = ""
    comp.innerHTML = ""
    result.innerHTML = ""
}