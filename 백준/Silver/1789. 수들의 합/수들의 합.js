let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `200`;

input = Number(input);

let result = 0;
let sum = 0;

while (sum <= input) {
  result++;
  sum += result;
}
console.log(result - 1);
