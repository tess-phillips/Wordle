export function winLoseCheck(won,numberOfGuesses){
    const winningModal = document.getElementById('myWinningModal');

    if (won){
        winningModal.showModal()
    }
    else if (numberOfGuesses == 0){
        document.querySelector("#winOrLoseText").textContent = "You lose womp womp"
        winningModal.showModal()
    }
}