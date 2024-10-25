let [N, input] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `6
1000 999 1000 999 1000 999`
).split("\n");
input = input.split(" ").map(a => ~~a);
const map = {};
let answer = "";

const sorted = [...new Set(input)].sort((a, b) => a - b);

// for (i of input) {
//   answer += sorted.indexOf(i) + " ";
// }

for (let i = 0; i < sorted.length; i++) {
  map[sorted[i]] = i;
}

for (i of input) {
  answer += map[i] + " ";
}

console.log(answer);
