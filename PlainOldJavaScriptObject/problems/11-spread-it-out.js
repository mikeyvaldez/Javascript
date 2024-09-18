/***********************************************************************
Write a function named `spreadItOut(array1, array2)` that accepts two arrays and
uses *spread operator* syntax to return a single array.
***********************************************************************/



function spreadItOut(arr1, arr2){
    return [...arr1.concat(...arr2)];
}


console.log(spreadItOut([3,5,6], [1,2,3])); // => [3,5,6,1,2,3];
console.log(spreadItOut([], [1,2,3])); // => [1,2,3];
console.log(spreadItOut(["apple", "banana"], [1,2,3])); // => ["apple", "banana", 1, 2, 3];

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = spreadItOut;