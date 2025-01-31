


function validAnagram(str1, str2){
    if(str1.length !== str2.length) return false;

    let lookup = {};

    for(let i = 0; i < str1.length; i++){
        let char = str1[i];
        // if letter exists, increment, otherwise set to 1
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }

    for(let j = 0; j < str2.length; j++){
        let letter = str2[j];

        if(!lookup[letter]){
            return false
        } else{
            lookup[letter] -= 1;
        }
    }
}