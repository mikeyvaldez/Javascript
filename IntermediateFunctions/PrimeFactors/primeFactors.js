




// Write a function primeFactors that takes in a number and returns
// an array containing all of the prime factors of the given number.


function isPrime(number){
    if(!Number.isInteger(number)) return false;
    if(number < 2) return false;

    for(let i = 2; i < number; i++){
        if(number % i === 0) return false;
    }

    return true;
}



function primeFactors(num){
    let newArr = [];

    for(let i = 1; i < num; i++){
        if(num % i === 0 && isPrime(i)){
            newArr.push(i);
        }
    }

    return newArr;
}





console.log(primeFactors(24));    // [2, 3]
console.log(primeFactors(60));    // [2, 3, 5]