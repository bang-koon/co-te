const [N, input] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `35
3 1 4 3 2`
).split("\n");

const delay = input
  .split(" ")
  .map(a => ~~a)
  .sort((a, b) => a - b);

let answer = 0;
let count = 0;
for (let i of delay) {
  count += i;
  answer += count;
}

console.log(answer);
