let wordList
let randomWord

const gameBoard = document.querySelector("#gameBoard");
const inputArea = document.querySelector("#inputArea");
const closeModalButton = document.getElementById('closeWinningModal');
const winningModal = document.getElementById('myWinningModal');
const submitBtn = document.getElementById('submitBtn');

var guessHistory = []
var numberOfGuesses = 5
var win = false;
var lose = false;

closeModalButton.addEventListener('click', () => {
    winningModal.close();
    inputArea.remove()
});

submitBtn.addEventListener('click', (event) => {
    onSubmit(event)
});

function winLoseCheck(won){
    if (won){
        winningModal.showModal()
    }
    else if (numberOfGuesses == 0){
        document.querySelector("#winOrLoseText").textContent = "You lose womp womp"
        winningModal.showModal()
    }
}

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
        const won = createRow(input)
        winLoseCheck(won)}
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

function createRow(input){
    const rowTemplate = document.querySelector("#rowTemplate");
    const domFragment = rowTemplate.content.cloneNode(true);
    var cells = domFragment.querySelectorAll(".cell");
    var colouring = guessAssess(randomWord,input)
    for (var i = 0; i < input.length; i++) {
        cells[i].textContent = input[i];
        cells[i].classList.add(colouring[i])
    }
    gameBoard.appendChild(domFragment)
    return allCorrect = colouring.every(element => element === 'correct');
}


function guessAssess(randomWord, input){
    //output an array of length 5 consisting of 0 (letters of same index match), 1 (letter in input exists in randomword), 2(wrong)
    var rand = randomWord.split("")
    var inp = input.split("")
    return inp.map((x,index)=>{
        if (rand[index]==x) {return "correct"}
        else if (rand.includes(x)){return "almost"}
        else {return "ignore"}
    })
}

function getRandomWord(words) {
    if (!Array.isArray(words) || words.length === 0) {
        return null; // Return null if the input is not a non-empty array
    }
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}