

function firstNonRepeatingCharacter(string){
    let indexFound = -1
    for(let i = 0; i < string.length; i++){
        const char = string[i];
        const newString = string.slice(0, i) + string.slice(i + 1)
        if(newString.indexOf(char) === -1){
            indexFound = i;
            break;
        }
    }
    return indexFound;
}

let str = "abcdcaf"

console.log(firstNonRepeatingCharacter(str))