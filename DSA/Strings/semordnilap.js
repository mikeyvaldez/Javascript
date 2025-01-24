// reversed palindrome

function semordnilap(words){
    const wordSet = new Set()
    const pairs = []
    for(let i = 0; i < words.length; i++){
      let word = words[i];
      const reversed = word.split("").reverse().join("")
      if(wordSet.has(reversed)){
        pairs.push([word, reversed])
      } else {
        wordSet.add(word)
      }
    }
    return pairs;
}


let wordList = ["diaper", "abc", "test", "cba", "repaid"]

console.log(semordnilap(wordList))