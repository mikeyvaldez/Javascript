


// Write a function commonFactors that accepts two numbers as argument.
// The function should return an array containing positive numbers
// that are able to divide both arguments.


function commonFactors(numOne, numTwo){
    let newArr = [];

    for(let i = 0; i <= numOne; i++){
        if(numOne % i == 0 && numTwo % i == 0){
            newArr.push(i);
        }
    }

    return newArr;
}



console.log(commonFactors(50, 30));             // [1, 2, 5, 10]
console.log(commonFactors(8, 4));               // [1, 2, 4]
console.log(commonFactors(4, 8));               // [1, 2, 4]
console.log(commonFactors(12, 24));             // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));             // [1, 2, 11, 22]
console.log(commonFactors(7, 9));               // [1]