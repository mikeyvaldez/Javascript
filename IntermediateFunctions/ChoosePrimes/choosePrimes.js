

// Write a function choosePrimes(nums) that takes in an array of numbers as args.
// The function should return a new array containing the primes from the original array.
// A prime number is a number that is only divisible by 1 and itself.
// Hint: consider creating a helper function to check if a number is prime!



function isPrime(num){
    if(!Number.isInteger(num)) return false;
    if(num < 2) return false;

    for(let i = 2; i < num; i++){
        if(num % i == 0) return false;
    }
    return true;
}



function choosePrimes(nums){
    let newArr = [];

    for(let i = 0; i < nums.length; i++){
        let number = nums[i];
        if(isPrime(number)){
            newArr.push(number);
        }
    }

    return newArr;
}



console.log(choosePrimes([36, 48, 9, 13, 19]));    // [13, 9]
console.log(choosePrimes([5, 6, 4, 11, 2017]));   // [5, 11, 2017]