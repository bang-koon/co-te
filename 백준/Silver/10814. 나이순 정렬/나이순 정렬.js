const [n, ...input] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `3
21 Junkyu
21 Dohyun
20 Sunyoung
50 bang
1 ku
5 kaka
100 ha
10000 kim`
).split("\n");
let answer = "";
// input.sort((a, b) => a.slice(0, 2) - b.slice(0, 2));  이렇게 하면 3자리 4자리 수는 어쩌라고~
input.sort((a, b) => {
  const numA = ~~a.split(" ")[0];
  const numB = ~~b.split(" ")[0];
  return numA - numB;
});

for (i of input) {
  answer += i + "\n";
}

console.log(answer);
