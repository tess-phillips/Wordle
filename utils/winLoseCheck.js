export function winLoseCheck(won,numberOfGuesses){
    const winningModal = document.getElementById('myWinningModal');
    const wrongWordForm = document.getElementById('wrongWordForm');
    const theWordWas = document.getElementById('theWordWas');
    if (won){
        theWordWas.style.display = "block"
        winningModal.showModal()
    }
    else if (numberOfGuesses == 0){
        document.querySelector("#winOrLoseText").textContent = "You lose womp womp"
        theWordWas.style.display = "block"
        winningModal.showModal()
    } else if (numberOfGuesses<2){
        document.querySelector("#winOrLoseText").textContent = "Hint:"
        wrongWordForm.style.display = "block"
        winningModal.showModal()
    }
}