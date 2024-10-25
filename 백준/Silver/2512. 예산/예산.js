let input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `4
120 110 140 150
485`
).split("\n");

const city = input[1].split(" ").map(Number);
const total = Number(input[2]);
let start = 1;
let end = Math.max(...city);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let expectedTotal = 0;

  for (budget of city) {
    expectedTotal += Math.min(mid, budget);
  }

  if (expectedTotal <= total) {
    result = mid;
    start++;
  } else {
    end = mid - 1;
  }
}

console.log(result);
