


function twoNumberSum(arrayOfNums, targetSum){
    let num_set = new Set();

    for(let i = 0; i < arrayOfNums.length; i++){
        const subractedRemainder = targetSum - arrayOfNums[i];
        if(num_set.has(subractedRemainder)){
            return [arrayOfNums[i], subractedRemainder]
        }
        num_set.add(arrayOfNums[i])
    }
    return [];
}




let arr = [3,5,-4,8,11,1,-1,6]
let target = 10

console.log(twoNumberSum(arr, target));