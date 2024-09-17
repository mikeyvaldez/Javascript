/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.

Do this once using using a `for...in` loop and once using `Object.values`.
***********************************************************************/



function valuesInObject(obj){
    let valueArr = [];
    for(let currVal of Object.values(obj)){
        valueArr.push(currVal);
    }
    return valueArr;
}


// function valuesInObject(obj){
//     return Object.values(obj);
// }



let animals = { dog: "Wolfie", cat: "Jet", bison: "Bilbo" }
let foods = { apple: "tart", lemon: "sour", mango: "sweet" }
console.log(valuesInObject(animals)); // => ["Wolfie", "Jet", "Bilbo"]
console.log(valuesInObject(foods)); // => ["tart", "sour", "sweet"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;