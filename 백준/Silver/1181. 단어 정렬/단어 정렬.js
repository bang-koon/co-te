const [N, ...input] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`
).split("\n");

let answer = "";
const unique = [...new Set(input)];
unique.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    else if (b < b) return 1;
    else return 0;
  }
});

for (let i of unique) {
  answer += i + "\n";
}

console.log(answer);
