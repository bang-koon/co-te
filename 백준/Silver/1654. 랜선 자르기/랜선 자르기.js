let [nums, ...input] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `4 11
1
1
1
1`
).split("\n");

const [K, N] = nums.split(" ").map(Number);
input = input.map(Number);

let start = 1;
let end = Math.max(...input);
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let cableNum = 0;
  for (let el of input) {
    cableNum += Math.floor(el / mid);
  }

  if (cableNum < N) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
