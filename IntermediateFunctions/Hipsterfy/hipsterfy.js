


// Write a function hipsterfy(sentence) that takes in a sentence string
// and returns the sentence where every word is missing its last vowel.


function removeLastVowel(word){
    let vowel = 'aeiou';
    for(let i = word.length-1; i >= 0; i--){
        let letter = word[i];
        if(vowel.includes(letter)){
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}




let hispsterfy = function(sentence){
    let arr = sentence.split(" ");
    let newSentence = [];

    for(let i = 0; i < arr.length; i++){
        let word = removeLastVowel(arr[i]);
        newSentence.push(word);
    }

    return newSentence.join(" ");
}

 
console.log(hispsterfy('When should everyone wake up?'));     // 'Whn shold everyon wak p?'
console.log(hispsterfy('get ready for our bootcamp'));        // 'gt redy fr or bootcmp'
console.log(hispsterfy('panthers are great animals'));        // 'panthrs ar gret animls'