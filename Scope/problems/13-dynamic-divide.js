/***********************************************************************
Write a function named `dynamicDivide(divisor)`. The dynamicDivide function will
return a new function that when invoked will divide the argument number by the
divisor.
***********************************************************************/

 
let dynamicDivide = divisor => {
    return function(num){
        return num / divisor;
    }
}


const halfer = dynamicDivide(2); // returns a function
console.log(halfer(20)); // returns 10

const divideByThree = dynamicDivide(3);
console.log(divideByThree(30)); // returns 10

const  divideByFive = dynamicDivide(5);
console.log(divideByFive(50)); // returns 10

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = dynamicDivide;
} catch (e) {
  // catch the ref err
  module.exports = null;
}