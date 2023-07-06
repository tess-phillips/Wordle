import { guessAssess } from "./guessAssess.js";

export function createRow(input, randomWord){
    const rowTemplate = document.querySelector("#rowTemplate");
    const domFragment = rowTemplate.content.cloneNode(true);
    var cells = domFragment.querySelectorAll(".cell");
    var colouring = guessAssess(randomWord,input)
    for (var i = 0; i < input.length; i++) {
        cells[i].textContent = input[i];
        cells[i].classList.add(colouring[i])
    }
    gameBoard.appendChild(domFragment)
    return colouring.every(element => element === 'correct');
}

