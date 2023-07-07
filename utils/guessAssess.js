export function guessAssess(randomWord, input){
    var rand = randomWord.split("")
    var inp = input.split("")
    var keyboard = document.getElementsByClassName("keyboard")[0];
    var cells = keyboard.getElementsByClassName("cell");
    var colouring = inp.map((x,index)=>{
        var charCode = x.toUpperCase().charCodeAt(0);
        var alphabetStartCode = 'A'.charCodeAt(0);
        var index2 = charCode - alphabetStartCode;
        if (rand[index]==x) {
            //ADD className "correct" to the corresponding letter cell (corresponding to the variable x)
            cells[index2].classList.add("correct")
            return "correct"}
        else if (rand.includes(x)){
            //IF the corresponding letter cell to the variable x doesn't already contain the className "correct" then add the class "almost" 
            if (!cells[index2].classList.contains("correct")){
                cells[index2].classList.add("almost")
            }
            return "almost"}
        else {
            cells[index2].classList.add("ignore")
            return "ignore"}
    })
    return colouring
}