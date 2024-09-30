/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns an array with all the nested
contents on one level.
***********************************************************************/

function flatten(arr){
    // create a new array
    let newArr = [];

    // iterate through the array
    arr.forEach(element => {
        // if the element is an array
        if(Array.isArray(element)){
            // you can use the spread operator b/c the element is an array
            // you push the recursive function here to keep the 
            // the iterate through any more nosted arrays [1[2[3[4[5]]]]] <--- newArray.push(...flatten(element)) unpacks this ---> [1,2,3,4,5]
            newArr.push(...flatten(element))
        } else {
            // otherwise, if the element is not an array
            // just push the element
            newArr.push(element);
        }
    });
    // return the array
    return newArr;
}



console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}