import { getRandomWord } from "./utils/getRandomWord.js";
import { createRow } from "./utils/createRow.js";
import { winLoseCheck } from "./utils/winLoseCheck.js";
import { validateWord } from "./utils/validateWord.js";
// import { guessAssess } from "./utils/guessAssess.js";

const fiveBtn = document.getElementById('5letter');
const sixBtn = document.getElementById('6letter');
const universals = document.getElementById('game-universals');
const gameBoard5 = document.getElementById('gameBoard5');
const gameBoard6 = document.getElementById('gameBoard6');

let numberOfGuesses
let gameBeingPlayed
let wordList
let randomWord

fiveBtn.addEventListener('click', () => {
    fiveBtn.remove();
    sixBtn.remove();
    universals.style.display = "block"
    gameBoard5.style.display = "block"
    numberOfGuesses = 5;
    gameBeingPlayed = 5;
    fetch('words5.json')
        .then(response => response.json())
        .then(data => {
            wordList = data.map(entry => entry.word)
                            .map(word => word.toUpperCase());
            randomWord = getRandomWord(wordList);
            document.querySelector("#theWordWas").textContent = randomWord;

        })
        .catch(error => console.error(error));
});

sixBtn.addEventListener('click', () => {
    fiveBtn.remove();
    sixBtn.remove();    
    universals.style.display = "block"
    gameBoard6.style.display = "block"
    numberOfGuesses = 6;
    gameBeingPlayed = 6;
    fetch('words6.json')
        .then(response => response.json())
        .then(data => {
            wordList = data.map(entry => entry.word)
                            .map(word => word.toUpperCase());
            randomWord = getRandomWord(wordList);
            document.querySelector("#theWordWas").textContent = randomWord;

        })
        .catch(error => console.error(error));
});

const inputArea = document.querySelector("#inputArea");
const closeModalButton = document.getElementById('closeWinningModal');
const winningModal = document.getElementById('myWinningModal');
const submitBtn = document.getElementById('submitBtn');

var guessHistory = []
// var numberOfGuesses = 5

closeModalButton.addEventListener('click', () => {
    winningModal.close();
    inputArea.remove()
});

submitBtn.addEventListener('click', (event) => {
    onSubmit(event)
});



function onSubmit(event){
    const input = validateWord(event, wordList)
    if (input != undefined){
        guessHistory.push(input)
        numberOfGuesses -= 1
        const won = createRow(input, randomWord,gameBeingPlayed)
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
