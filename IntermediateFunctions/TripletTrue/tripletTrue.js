

// Write a function tripletTrue that accepts a string as an argument.
// The function should return a boolean indicating whether or not
// the string contains three of the same character consecutively.


function tripletTrue(string){

    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i+1] && string[i+1] === string[i+2]) return true;
    }

    return false;
}




console.log(tripletTrue('caaab'));          // true
console.log(tripletTrue('terrrrrrible'));   // true
console.log(tripletTrue('runninggg'));      // true
console.log(tripletTrue('bootcamp'));       // false
console.log(tripletTrue('e'));              // false