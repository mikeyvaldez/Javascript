


// Write a function uncompress(str) that takes in a "compressed"
// string as an arg. A compressed string consists of a character
// immediately followed by the number of times it appears in the
// "uncompressed" from. The function should return the uncompressed
// version of the string. See the examples.

// Hint: you can use the built-in Number function should convert
// a numberic string into the number type. For example. Number("4") // => 4


let uncompress = function(str){
    let num = '123456789';
    let numArr= []

    for(let i = 0; i < str.length; i++){    
        let char = str[i];
        let nextChar = str[i+1];
        if(num.includes(nextChar)){ 
            let iterate = Number(nextChar);
                for(let j = 0; j < iterate; j++){
                    numArr.push(char);
                }           
        }
    }
    return numArr.join("");
    
}



console.log(uncompress('x3y4z2'));       // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1'));     // 'aaaaabbccccz'
console.log(uncompress('b1o2t1'));       // 'boot'