let wordList
let randomWord

const gameBoard = document.querySelector("#gameBoard");
const inputArea = document.querySelector("#inputArea");
const closeModalButton = document.getElementById('closeWinningModal');
const winningModal = document.getElementById('myWinningModal');

var guessHistory = []
var numberOfGuesses = 5
var win = false;
var lose = false;

closeModalButton.addEventListener('click', () => {
    winningModal.close();
    inputArea.remove()
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