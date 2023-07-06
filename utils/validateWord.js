export function validateWord(event, wordList) {
    event.preventDefault(); 
    var input = document.getElementById("inputField").value.toUpperCase();
    if (wordList.includes(input)) {
        return input
    } else {
        alert("Word is not valid!");
    }
}