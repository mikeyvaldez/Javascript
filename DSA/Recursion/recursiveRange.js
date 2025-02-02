


// RECURSIVE RANGE
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 


function recursiveRange(num){
    let accum = 0;
    
    if(accum >= num) return 0;
    
    accum = num + recursiveRange(num - 1)
    return accum
}


console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 