export function validateWord(event, wordList) {
    event.preventDefault(); 

    //this is for my number version only
    const inputValue = document.getElementById("inputField").value
    if (isNaN(inputValue) == false){
        return document.getElementById("inputField").value
    }
    //

    var input = document.getElementById("inputField").value.toUpperCase();
    if (wordList.includes(input)) {
        return input
    } else {
        alert("Word is not valid!");
    }
}