// Import dependencies
import { getRandomWord } from "./utils/getRandomWord.js";
import { createRow } from "./utils/createRow.js";
import { winLoseCheck } from "./utils/winLoseCheck.js";
import { validateWord } from "./utils/validateWord.js";
import { getDefinition } from "./getDefinition.js";
// import { guessAssess } from "./utils/guessAssess.js";

// Get DOM elements
const fiveBtn = document.getElementById('5letter');
const sixBtn = document.getElementById('6letter');
const universals = document.getElementById('game-universals');
const gameBoard5 = document.getElementById('gameBoard5');
const gameBoard6 = document.getElementById('gameBoard6');
const inputArea = document.querySelector("#inputArea");
const closeModalButton = document.getElementById('closeWinningModal');
const winningModal = document.getElementById('myWinningModal');
const submitBtn = document.getElementById('submitBtn');
const inputField = document.getElementById('inputField');
const closeHintModalButton = document.getElementById('closeHintModal');
const hintModal = document.getElementById('myHintModal');


// Initialize variables
let numberOfGuesses;
let gameBeingPlayed;
let wordList;
let randomWord;
let definitions
const guessHistory = [];

// Add event listeners
fiveBtn.addEventListener('click', startGame(5, gameBoard5, 'words5.json'));
sixBtn.addEventListener('click', startGame(6, gameBoard6, 'words6.json'));
closeModalButton.addEventListener('click', closeWinningModal);
closeHintModalButton.addEventListener('click', closeHintModal);
submitBtn.addEventListener('click', onSubmit);
inputField.addEventListener('keypress', (event) => {
  if (event.key === "Enter") {
    onSubmit(event);
  }
});

// Function to start the game
function startGame(guesses, gameBoard, wordFile) {
  return () => {
    fiveBtn.remove();
    sixBtn.remove();
    universals.style.display = "block";
    gameBoard.style.display = "block";
    numberOfGuesses = guesses;
    gameBeingPlayed = guesses;
    fetch(wordFile)
      .then(response => response.json())
      .then(data => {
        wordList = data.map(entry => entry.word).map(word => word.toUpperCase());
        randomWord = getRandomWord(wordList);
        document.querySelector("#theWordWas").textContent = randomWord;
        return randomWord
      })
      .then(async randomWord => {
        definitions = getDefinition(randomWord)
          .then(definitions => {
            console.log(document.querySelectorAll(".theDefIs"))
            document.querySelectorAll(".theDefIs").forEach(x => x.innerHTML = definitions)
            console.log(document.querySelectorAll(".theDefIs"))
            console.log(document.querySelectorAll(".theDefIs").innerHTML)
            // document.querySelectorAll(".theDefIs").innerHTML = definitions;
        })
      })
      .catch(error => console.error(error));
  };
}

// Function to close the winning modal
function closeWinningModal() {
  winningModal.close();
  inputArea.remove();
}

// Function to close the hint modal
function closeHintModal() {
  console.log("run")
  hintModal.close();
}

// Function to handle form submission
function onSubmit(event) {
  const input = validateWord(event, wordList);
  if (input !== undefined) {
    guessHistory.push(input);
    numberOfGuesses -= 1;
    const won = createRow(input, randomWord, gameBeingPlayed);
    winLoseCheck(won, numberOfGuesses);
  }
  inputField.value = "";
}
