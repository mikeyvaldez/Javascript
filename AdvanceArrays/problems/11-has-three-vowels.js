/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.
*/


let countVowels = function(string){
    let vowels = "aeiouAEIOU";
    let letters = string.split("");
    let count = 0;

    letters.forEach((element) => {
        if(vowels.includes(element)) count++;
    });

    return count;
}


let hasThreeVowels = function(str){
    if(countVowels(str) > 3){
        return true;
    }
    return false;
}






console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}