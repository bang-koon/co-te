const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `55-50+40`
).split("-");
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const nums = input[i]
    .split("+")
    .map(a => ~~a)
    .reduce((a, b) => a + b);

  if (i == 0) answer += nums;
  else answer -= nums;
}

console.log(answer);
