const [n, ...input] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`
).split("\n");

const N = ~~n; // 상수
const counsel = input.map(a => a.split(" ").map(a => ~~a));
const dp = new Array(N).fill(0); // N이 문자면 1개만 만들어짐

for (let i = 0; i < N; i++) {
  const [period, profit] = counsel[i];
  if (i + period > N) continue;
  dp[i] = dp[i] + profit;

  for (let j = i + period; j < N; j++) {
    dp[j] = Math.max(dp[j], dp[i]);
  }
}
console.log(Math.max(...dp));
