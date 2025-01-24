



function sortedSquaredArray(array) {
  
    // creates an instance of an array the size of 
    // the given array parameter. It then fills that array
    // with zeros for the length of the array.
    // if array.length is 4 then newArr would equal [0, 0, 0, 0]
   const newArr = new Array(array.length).fill(0)
    
    for(let i in array){
      //square the number
      const squaredNum = array[i] ** 2;
      // input the number into the new Array through indexing
      newArr[i] = squaredNum;
    }
    return newArr.sort((a, b) => a - b) // sort the new array using sort method
  }


let arr = [1, 2, 3, 4, 5, 6, 8, 9];

console.log(sortedSquaredArray(arr))