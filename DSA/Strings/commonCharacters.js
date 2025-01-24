


function commonCharacters(strings) {
  // think about using a set (datastructure)
  let commonChars = new Set(strings.join("")) // this will result to {"a","b","c","d"} sets only allow one of the same character  

  for(const char of commonChars){
    for(let i = 0; i < strings.length; i++){
      if(!strings[i].includes(char)){
        {commonChars.delete(char)}
      }
    }    
  }

  return [...commonChars];
}

let strs = ["abc", "bcd", "cbaccd"];

console.log(commonCharacters(strs));
