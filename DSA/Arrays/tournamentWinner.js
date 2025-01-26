



function tournamentWinner(competitions, results){
    const leader = { score: -1, name: "" };
    const scores = {};

    for(let i in competitions){
        const winner_index = results[i] === 0 ? 1 : 0;
        const winner = competitions[i][winner_index];

        if(winner in scores){
            scores[winner] += 3;
        } else {
            scores[winner] = 3;
        }

        if(leader.score < scores[winner]){
            leader.name = winner;
            leader.score = scores[winner];
        }
    }
    return leader.name;
}



let comps = [
    ["HTML", "C#"],
    ["C#", "PYTHON"],
    ["PYTHON", "HTML"],
];

let res = [0, 0, 1];
console.log(tournamentWinner(comps, res))