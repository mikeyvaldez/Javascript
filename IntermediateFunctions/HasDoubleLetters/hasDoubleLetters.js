

// Write a function hasDoubleLetters(str) that accepts a string.
// The function should return a boolean indicating whether the string
// contains two of the same character consecutively. If the value
// passed into the function is not a string, return null.


function hasDoubleLetters(string){
    if(typeof string !== 'string') return null;

    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i+1]){
            return true;
        }
    }

    return false;
}




console.log(hasDoubleLetters('deer'));           // true
console.log(hasDoubleLetters('boot camp'));      // true
console.log(hasDoubleLetters('toggle'));         // false
console.log(hasDoubleLetters('taco'));          // false
console.log(hasDoubleLetters('jumper'));        // false
console.log(hasDoubleLetters(18));            // null
console.log(hasDoubleLetters(['array']));       // null



