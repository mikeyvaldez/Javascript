
// Big O complexity of Bubble Sort
// -- Best case: O(n) (when the array is already sorted)
// -- Average Case: O(n^^2) (typical unsorted array)
// -- Worst Case: O(n^^2) (when the array is sorted in reverse order)


// function bubbleSort(arr){
//     for(let i = 0; i < arr.length - 1; i++){
//         for(let j = 0; j < arr.length - 1; j++){
//             console.log(arr, arr[j], arr[j+1]);
//             if(arr[j] > arr[j+1]){
//                 //SWAP
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// function bubbleSort(arr){
//     const swap = (arr, index1, index2) => {
//         [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
//     }

//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 swap(arr, j, j+1);
//             }
//         }
//     }
//     return arr;
// }


// OPTIMIZED BUBBLE SORT
// BIG O


function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
}

console.log(bubbleSort([37,45,44,29,8,12,88,-3]))