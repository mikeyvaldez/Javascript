/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

*******************************************************************************/

let minValueCallback = (arr, cb) => {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(cb){
            if(arr[i] < arr[i+1]){
                newArray.pop();
                newArray.push(cb(arr[i]));
            }
        } else {
            if(arr[i] < arr[i+1]){
                newArray.pop();
                newArray.push(arr[i]);
            }
        }
    }
  return newArray;
}


console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;