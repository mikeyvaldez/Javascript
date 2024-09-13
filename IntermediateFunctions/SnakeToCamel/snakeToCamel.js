

// Write a function snakeToCamel that takes in a snake_cased string and
// returns a PascalCased version of the string. snake_case is where each
// word is separated with underscores (''). PascalCase is a string where
// the first char of each word is capital, all other chars lowercase.


function snakeToCamel(string){
    let words = string.split("_");
    let camelCase = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        camelCase.push(word[0].toUpperCase(), word.slice(1).toLowerCase());

    }
    return camelCase.join("");
}




console.log(snakeToCamel('snakes_go_hiss'));        // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world'));       // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool'));   // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_IS_cOol'));   // 'AppAcademyIsCool'