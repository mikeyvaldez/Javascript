


// LINEAR SEARCH

function linearSearch(arr, num){
    // iterate through the array
    for(let i = 0; i < arr.length; i++){
        let otherNum = arr[i];
      // if the number at the index is num return index
      if(num === otherNum){
          return i;
      }
    }
    return -1;
  }
  
  console.log(linearSearch([10, 15, 20, 25, 30], 25))