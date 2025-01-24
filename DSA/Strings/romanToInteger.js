


function romanToInt(string){
    let romans = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    let result = 0; 

    for(let i = 0; i < string.length; i++){
        const curr = romans[string[i]]
        const next = romans[string[i + 1]]

        if(curr < next){
            result += next - curr;
            i++;
        } else {
            result += curr;
        }
    }

    return result;
}

let str = "MCMXCIV"

console.log(romanToInt(str))