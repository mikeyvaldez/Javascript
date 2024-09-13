

// Write a function yeller(word) that takes in an array of words. The function should
// return a new array where each element of the original array is yelled.



function yeller(word){
    let yell = [];

    for(let i = 0; i < word.length; i++){
        let newWord = word[i].toUpperCase();
        yell.push(newWord + '!');
    }
    return yell;
}



console.log(yeller(['hello', 'world']));             // ['HELLO!', 'WORLD!']
console.log(yeller(['kiwi', 'orange', 'mango']));    // ['KIWI!', 'ORANGE!', 'MANGO!']