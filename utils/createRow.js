import { guessAssess } from "./guessAssess.js";

export function createRow(input, randomWord,gameBeingPlayed){
    const rowTemplate = document.querySelector(`#rowTemplate${gameBeingPlayed}`);
    const domFragment = rowTemplate.content.cloneNode(true);
    var cells = domFragment.querySelectorAll(".cell");
    var colouring = guessAssess(randomWord,input)
    for (var i = 0; i < input.length; i++) {
        cells[i].textContent = input[i];
        cells[i].classList.add(colouring[i])
    }
    gameBoard5.appendChild(domFragment)
    return colouring.every(element => element === 'correct');
}

