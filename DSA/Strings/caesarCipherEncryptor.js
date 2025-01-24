



function caesarCipherEncryptor(string, key){
    let newString = [];

    for(let i = 0; i < string.length; i++){
        let charCode = (string.charCodeAt(i) - 97 + key) % 26;
        newString.push(String.fromCharCode(charCode + 97))
    }

    return newString.join("");
}

let str = "xyz"
let num = 2

console.log(caesarCipherEncryptor(str, num))