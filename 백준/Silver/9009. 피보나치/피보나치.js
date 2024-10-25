let [num, ...input] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `4
100
200
12345
1003`
)
  .split("\n")
  .map(Number);
const pibo = [0, 1];
while (pibo[pibo.length - 1] < 1e9) {
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
}

for (let x of input) {
  const result = [];
  let i = pibo.length - 1;
  while (x > 0) {
    if (pibo[i] <= x) {
      result.push(pibo[i]);
      x -= pibo[i];
    }
    i--;
  }
  console.log(result.reverse().join(" "));
}
