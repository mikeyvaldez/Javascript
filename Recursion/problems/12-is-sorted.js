/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.
***********************************************************************/

function isSorted(arr){
    // basecase if the array has less than two elements return true
    if(arr.length < 2) return true;
    // check is the first index is greater than the second index
    // the array is not in order, so return false
    if(arr[0] > arr[1]){
        return false;
    } else {
        // otherwise, return the updated value of the 
        // you need the else block to successfully run this
        return isSorted(arr.slice(1));
    }
}


console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}