// Import dependencies
import { getRandomWord } from "./utils/getRandomWord.js";
import { createRow } from "./utils/createRow.js";
import { winLoseCheck } from "./utils/winLoseCheck.js";
import { validateWord } from "./utils/validateWord.js";
import { getDefinition } from "./getDefinition.js";

// Get DOM elements
const fiveBtn = document.getElementById('5letter');
const sixBtn = document.getElementById('6letter');
const universals = document.getElementById('game-universals');
const gameBoard5 = document.getElementById('gameBoard5');
const gameBoard6 = document.getElementById('gameBoard6');
const inputArea = document.querySelector("#inputArea");
const closeModalButton = document.getElementById('closeBtn');
const continueModalButton = document.getElementById('continueBtn');
const modal = document.getElementById('modal');
const submitBtn = document.getElementById('submitBtn');
const inputField = document.getElementById('inputField');

// Initialize variables
// let gameData.numberOfGuesses;
const gameData = {
  numberOfGuesses: 5
};
let gameBeingPlayed;
let wordList;
let randomWord;
let definitions
const guessHistory = [];

// Add event listeners
fiveBtn.addEventListener('click', startGame(5, gameBoard5, 'words5.json'));
sixBtn.addEventListener('click', startGame(6, gameBoard6, 'words6.json'));
closeModalButton.addEventListener('click', closeModal);
continueModalButton.addEventListener('click', continueModal);
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
    number5.remove(); //numbers version onlu
    universals.style.display = "block";
    gameBoard.style.display = "block";
    gameData.numberOfGuesses = guesses;
    gameBeingPlayed = guesses;
    fetch(wordFile)
      .then(response => response.json())
      .then(data => {
        wordList = data.map(entry => entry.word).map(word => word.toUpperCase());
        randomWord = getRandomWord(wordList);
        document.querySelector("#theWordWas").textContent = randomWord;
        document.querySelector("#hiddenWord").value = randomWord;
        return randomWord
      })
      .then(async randomWord => {
        definitions = getDefinition(randomWord)
          .then(definitions => {
            if (definitions != undefined){
              document.querySelectorAll(".theDefIs").forEach(x => x.innerHTML = definitions)
            }
        })
      })
      .catch(error => console.error(error));
  };
}


// numbers version only
  const number5 = document.getElementById('5number');
  number5.addEventListener('click', startNumberGame(5,gameBoard5));

  // Function to start the game
  function startNumberGame(guesses, gameBoard) {
    return () => {
      fiveBtn.remove();
      sixBtn.remove();
      number5.remove()
      universals.style.display = "block";
      gameBoard.style.display = "block";
      gameData.numberOfGuesses = guesses;
      gameBeingPlayed = "numbers";
      randomWord = String(Math.floor(Math.random()*90000) + 10000)
    };
  }
//

// Function to close the winning modal
function closeModal() {
  modal.close();
  inputArea.remove();
}

// Function to close the winning modal after the hint
function continueModal() {
  modal.close();
}

// Function to handle form submission
function onSubmit(event) {
  const input = validateWord(event, wordList);
  if (input !== undefined) {
    guessHistory.push(input);
    gameData.numberOfGuesses -= 1;
    const won = createRow(input, randomWord, gameBeingPlayed);
    winLoseCheck(won, gameData);
    inputField.value = "";
  }
}