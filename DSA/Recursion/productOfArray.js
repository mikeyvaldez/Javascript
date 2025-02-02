


// PRODUCT OF ARRAY RECURSIVE
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.



function productOfArray(arr, index = 0){
     //base case
    // once the length of the array is at 0, return the answer
    if(arr.length === index) return 1;
    
    // recursive call
    return arr[index] * productOfArray(arr, index + 1);
    
    
}


console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60