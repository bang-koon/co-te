const n =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `2`;

let count = 0;
let idx = 0;

while (n != count) {
  idx++;
  if (String(idx).includes("666")) count++;
}

console.log(idx);