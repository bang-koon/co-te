const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const answer = [];

for (let i in arr) {
    let temp = arr[i].split(' ');
    answer.push(temp.map(a => a.split("").reverse().join("")));
    answer[i] = answer[i].join(" ");
}

// for (let i in answer){
//     answer[i] = answer[i].join(" ");
// }

console.log(answer.join("\n"));