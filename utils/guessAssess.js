export function guessAssess(randomWord, input){
    //output an array of length 5 consisting of 0 (letters of same index match), 1 (letter in input exists in randomword), 2(wrong)
    var rand = randomWord.split("")
    var inp = input.split("")
    return inp.map((x,index)=>{
        if (rand[index]==x) {return "correct"}
        else if (rand.includes(x)){return "almost"}
        else {return "ignore"}
    })
}