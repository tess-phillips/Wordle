import { getRandomWord } from "./utils/getRandomWord.js";
import { createRow } from "./utils/createRow.js";
import { winLoseCheck } from "./utils/winLoseCheck.js";
import { validateWord } from "./utils/validateWord.js";
// import { guessAssess } from "./utils/guessAssess.js";

let wordList
let randomWord

const inputArea = document.querySelector("#inputArea");
const closeModalButton = document.getElementById('closeWinningModal');
const winningModal = document.getElementById('myWinningModal');
const submitBtn = document.getElementById('submitBtn');

var guessHistory = []
var numberOfGuesses = 5

closeModalButton.addEventListener('click', () => {
    winningModal.close();
    inputArea.remove()
});

submitBtn.addEventListener('click', (event) => {
    onSubmit(event)
});

fetch('words.json')
.then(response => response.json())
.then(data => {
    wordList = data.map(entry => entry.word)
                        .map(word => word.toUpperCase());
    randomWord = getRandomWord(wordList);
    document.querySelector("#theWordWas").textContent = randomWord;

})
.catch(error => console.error(error));

function onSubmit(event){
    const input = validateWord(event, wordList)
    if (input != undefined){
        guessHistory.push(input)
        numberOfGuesses -= 1
        const won = createRow(input, randomWord)
        winLoseCheck(won,numberOfGuesses)}
        inputField.value =""
        // updateKeyboardColors(randomWord,input)
        // guessAssess2(randomWord,input)
}

const inputField = document.getElementById('inputField');
// Add event listener for key press event
inputField.addEventListener('keypress', (event) => {
  // Check if the pre   ssed key is Enter (key code 13)
  if (event.key === "Enter") {
    onSubmit(event);
  }
});

// function updateKeyboardColors(randomWord, input) {
//     var assessment = guessAssess(randomWord, input);
//     console.log(assessment)
//     var keyboard = document.getElementsByClassName("keyboard")[0];
//     var cells = keyboard.getElementsByClassName("cell");
  
//     for (var i = 0; i < cells.length; i++) {
//         cells[i].className = "cell"; // Reset the class to remove previous color

//         // Add the appropriate class based on the assessment
//         if (assessment[i] === "correct") {
//             cells[i].classList.add("correct");
//         } else if (assessment[i] === "almost"&& !cells[i].classList.contains("correct")) {
//             cells[i].classList.add("almost");
//         }
//     }
// }

// function guessAssess2(randomWord,input){
//     var keyboard = document.getElementsByClassName("keyboard")[0];
//     var cells = keyboard.getElementsByClassName("cell");
//     var rand = randomWord.split("")
//     var inp = input.split("")   
//     // Array.from(cells).forEach(function(cell,index) {
//     //     var cellId = cell.id;
//     //     console.log(cellId)
//     //     if (cellId === rand[index]) {
//     //         cell.classList.add("correct");
//     //     } 
//         // else if (rand.includes(cellId) && !cell.classList.contains("correct")) {
//         //     cell.classList.add("almost");
//         // }
//         // else {
//         //     cell.classList.add("ignore");
//         // }
//     });    // console.log(cells[0].classList)
//     // return ce
// }
