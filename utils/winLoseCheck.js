export function winLoseCheck(won,gameData){
    const winningModal = document.getElementById('myWinningModal');
    const theWordWas = document.getElementById('theWordWas');
    const closeModalButton = document.getElementById('closeWinningModal');
    if (won){
        gameData["numberOfGuesses"] = 0
        document.querySelector("#winOrLoseText").textContent = "You've won"
        theWordWas.style.display = "block"
        closeModalButton.textContent = "Close"
        winningModal.showModal()
    }
    else if (gameData.numberOfGuesses == 0){
        document.querySelector("#winOrLoseText").textContent = "You lose womp womp"
        theWordWas.style.display = "block"
        closeModalButton.textContent = "Close"
        winningModal.showModal()
    } else if (gameData.numberOfGuesses<2){
        if (document.getElementById('wrongWordForm')){
            document.getElementById('wrongWordForm').style.display = "block"
        }
        winningModal.showModal()
    }
}