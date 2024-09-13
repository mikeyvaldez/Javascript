

// Write a function shortestWord that accepts a sentence as an argument.
// The function should return the shortest word in the sentence. If there is a tie,
// return the word that appears later in the sentence.



let shortestWord = function(sentence){
    let words = sentence.split(" ");
    let newArr = [];

    for(let i = 0; i < words.length; i++){
        if(newArr[0] === undefined){
            newArr.push(words[i]);
        } else if(newArr[0].length >= words[i].length){
            newArr.pop();
            newArr.push(words[i]);
        }
    }
    return newArr.join("");
}



console.log(shortestWord('what a wonderful life'));          // 'a'
console.log(shortestWord('the quick brown fox jumps'));      // 'fox'
console.log(shortestWord('do what you enjoy'));              // 'do'