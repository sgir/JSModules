import assignPlayerName from "./player";
import {printGame, calculateScore, getProblemCount} from "./game";

console.log("App self start with systemJS");

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function() {
    assignPlayerName(document.getElementById('playername').value); // this works because setName is the default exported object
    printGame();
});

// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', function() {
    calculateScore();
});

// set the default number of problems
document.getElementById('problemCount').value = getProblemCount();

