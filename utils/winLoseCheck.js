export function winLoseCheck(won,gameData){
    const modal = document.getElementById('modal');
    const theWordWas = document.getElementById('theWordWas');
    const closeBtn = document.getElementById('closeBtn');
    const continueBtn = document.getElementById('continueBtn');
    if (won){
        gameData["numberOfGuesses"] = 0
        document.querySelector("#modalTitle").textContent = "You've won"
        continueBtn.style.display = "none"
        closeBtn.style.display = "block"
        theWordWas.style.display = "block"
        modal.showModal()
    }
    else if (gameData.numberOfGuesses == 0){
        document.querySelector("#modalTitle").textContent = "You lose womp womp"
        continueBtn.style.display = "none"
        closeBtn.style.display = "block"
        theWordWas.style.display = "block"
        modal.showModal()
    } else if (gameData.numberOfGuesses ==1){
        document.querySelector("#modalTitle").textContent = "Hint:"
        theWordWas.style.display = "none"
        closeBtn.style.display = "none"

        if (document.getElementById('wrongWordForm')){
            document.getElementById('wrongWordForm').style.display = "block"
        }
        modal.showModal()
    }
}