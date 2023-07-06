import { getRandomWord } from "./utils/getRandomWord.js";
import { createRow } from "./utils/createRow.js";
import { winLoseCheck } from "./utils/winLoseCheck.js";

let wordList
let randomWord

const gameBoard = document.querySelector("#gameBoard");
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



fetch('wordsCopy.json')
.then(response => response.json())
.then(data => {
    wordList = data.map(entry => entry.word)
                        .map(word => word.toUpperCase());
    randomWord = getRandomWord(wordList);
})
.catch(error => console.error(error));

function onSubmit(event){
    const input = validateWord(event)
    if (input != undefined){
        guessHistory.push(input)
        numberOfGuesses -= 1
        const won = createRow(input, randomWord)
        winLoseCheck(won,numberOfGuesses)}
}


function validateWord(event) {
    event.preventDefault(); 
    var input = document.getElementById("inputField").value.toUpperCase();
    if (wordList.includes(input)) {
        return input
    } else {
        alert("Word is not valid!");
    }
}






