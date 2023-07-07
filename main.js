import { getRandomWord } from "./utils/getRandomWord.js";
import { createRow } from "./utils/createRow.js";
import { winLoseCheck } from "./utils/winLoseCheck.js";
import { validateWord } from "./utils/validateWord.js";

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
})
.catch(error => console.error(error));

function onSubmit(event){
    const input = validateWord(event, wordList)
    if (input != undefined){
        guessHistory.push(input)
        numberOfGuesses -= 1
        const won = createRow(input, randomWord,correctList,almostList)
        winLoseCheck(won,numberOfGuesses)}
        inputField.value =""
}