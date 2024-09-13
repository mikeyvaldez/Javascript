


// Write a function zanyZip that accepts two arrays as arguments.
// The function should return a two dimensional array with subarrays
// of Length 2 that contain elements at corresponding indices from the
// input arrays. If one of the arrays is shorter than the other,
// then substitute null for the missing elements.



function zanyZip(arr1, arr2){
    let newArr = [];

    for(let i = 0; i < arr1.length || i < arr2.length; i++){
        let first = arr1[i];
        let second = arr2[i];
        
        if(first === undefined) first = null;
        if(second === undefined) second = null;

        newArr.push([first, second]);
    }
    return newArr;
}




console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [1, 'eins'], [2, 'zwei'], [null, 'drei'], [null, 'vier'] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [1, 'eins'], [2, 'zwei'], [3, 'drei'], [4, null] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ ['alef', 'alpha'], ['bet', 'beta'] ]