

// Write a function moreDotLessDash that accepts a string as an argument.
// The function should return a boolean indicating whether or not the string
// contains more dots (.) than dashes (-).



function moreDotLessDash(str){
    let dot = 0;
    let dash = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === '.') dot++;
        if(str[i] === '-') dash++;
    }

    if(dot > dash) return true;

    return false;
}



console.log(moreDotLessDash('2-D arrays are fun. I think.'));              // true
console.log(moreDotLessDash('Mores code is great.'));                      // true
console.log(moreDotLessDash('.... . -.--'));                               // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));       // false
console.log(moreDotLessDash('high-flying acrobat.'));                     // false