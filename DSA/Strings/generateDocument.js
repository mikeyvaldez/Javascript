

function generateDocument(characters, document){
    let doc = document.split("")

    for(let i = 0; i < doc.length; i++){
        let char = characters.replace(doc[i], "")
        if(characters === char){
            return false
        } else {
            characters = char
        }
    }
    return true        
}



let chars = "Bste!hetsi ogEAxpelrt x "
let doc = "AlgoExpert is the Best!"


console.log(generateDocument(chars, doc))