

function isPalindrome(string){
    
    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        } 
    }

    return true;
}


let string = "racecar"

console.log(isPalindrome(string))