const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `7`;

n = ~~input;

let a = 0;
let b = 0;

while (n >= 0) {
  if (n === 0 || n % 5 === 0) {
    b = n / 5;
    return console.log(a + b);
  }
  //   if (n === 0) return console.log(a, b);
  n -= 3;
  a++;
}

if (n < 0) console.log(-1);
