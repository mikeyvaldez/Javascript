/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`
***********************************************************************/

function sort(nums, sorted = []){
    // if the array is empty return the default parameter([]) which is an empty array
    if(nums.length === 0) return sorted;

    // set a holder for the minimum index
    let minIndex = 0;
    // iterate through the array
    for(let i = 1; i < nums.length; i++){
        // if a number in the array is less than the minimum index
        // set minimum index to that index
        if(nums[i] < nums[minIndex]){
            minIndex = i;
        }
    }
    // push the number at the minIndex which contains the lowest number
    sorted.push(nums[minIndex]);
    // remove the smallest element from nums
    nums.splice(minIndex, 1);
    // return the updated array
    return sort(nums, sorted);
}


console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}