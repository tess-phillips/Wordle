export function winLoseCheck(won,numberOfGuesses){
    const winningModal = document.getElementById('myWinningModal');
    const wrongWordForm = document.getElementById('wrongWordForm');
    const theWordWas = document.getElementById('theWordWas');
    const closeModalButton = document.getElementById('closeWinningModal');
    if (won){
        numberOfGuesses = 0
        console.log(numberOfGuesses,"num guess")
        document.querySelector("#winOrLoseText").textContent = "You've won"
        theWordWas.style.display = "block"
        closeModalButton.textContent = "Close"
        winningModal.showModal()
    }
    else if (numberOfGuesses == 0){
        document.querySelector("#winOrLoseText").textContent = "You lose womp womp"
        // theWordWas.style.display = "block"
        winningModal.showModal()
    } else if (numberOfGuesses<2){
        // document.querySelector("#winOrLoseText").textContent = "Hint:"
        // theWordWas.style.display = "none"
        // playAgainBtn.style.display = "none"
        if (wrongWordForm){
            wrongWordForm.style.display = "block"
        }
        winningModal.showModal()
    }
}