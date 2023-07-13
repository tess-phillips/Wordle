export function winLoseCheck(won,gameData){
    const winningModal = document.getElementById('myWinningModal');
    const wrongWordForm = document.getElementById('wrongWordForm');
    const theWordWas = document.getElementById('theWordWas');
    const closeModalButton = document.getElementById('closeWinningModal');
    if (won){
        console.log(gameData)
        gameData["numberOfGuesses"] = 0
        console.log(gameData.numberOfGuesses,"num guess")
        document.querySelector("#winOrLoseText").textContent = "You've won"
        theWordWas.style.display = "block"
        closeModalButton.textContent = "Close"
        winningModal.showModal()
    }
    else if (gameData.numberOfGuesses == 0){
        document.querySelector("#winOrLoseText").textContent = "You lose womp womp"
        // theWordWas.style.display = "block"
        winningModal.showModal()
    } else if (gameData.numberOfGuesses<2){
        // document.querySelector("#winOrLoseText").textContent = "Hint:"
        // theWordWas.style.display = "none"
        // playAgainBtn.style.display = "none"
        if (wrongWordForm){
            wrongWordForm.style.display = "block"
        }
        winningModal.showModal()
    }
}