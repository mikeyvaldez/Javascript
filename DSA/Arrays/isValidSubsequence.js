




function isValidSubsequence(array, sequence) {
  let index = 0;
  for (let items in array) {
    if (!sequence.length) break;
    if (array[items] === sequence[index] && index < sequence.length) index++;
  }
  return index === sequence.length;
}


let arr = [5, 1, 22, 25, 6, -1, 8, 10];
let seq = [1, 6, -1, 10];

console.log(isValidSubsequence(arr, seq))