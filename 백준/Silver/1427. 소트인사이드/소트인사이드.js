const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `2143`
).split("");

input.sort((a, b) => b - a);
console.log(input.join(""));
