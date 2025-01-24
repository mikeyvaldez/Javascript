function runLengthEncoding(string){
    let run_length = [];
    let currRunLength = 1;

    for(let i = 1; i < string.length; i++){        
        let currChar = string[i]        
        let prevChar = string[i - 1]

        if(currChar !== prevChar || currRunLength === 9){
            run_length.push(currRunLength.toString())
            run_length.push(prevChar)
            currRunLength = 0;
        }

        currRunLength += 1
    }

    run_length.push(currRunLength.toString())
    run_length.push(string[string.length - 1])

    return run_length.join("");
}

let str = "AAAAAAAAAAAAABBCCCCDD"

console.log(runLengthEncoding(str))



