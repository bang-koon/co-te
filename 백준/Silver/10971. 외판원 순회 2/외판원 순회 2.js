const [N, ...arr] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`
).split("\n");
// 중복x, 순서 고려(순열)

cost = arr.map(a => a.split(" ").map(Number));
let locate = [];
let visited = new Array(N).fill(false);
let answer = 1e10;

const dfs = (depth, start, acc) => {
  const cur = cost[start][0];
  if (depth === N - 1 && cur !== 0) {
    answer = Math.min(answer, acc + cur);
    return;
  }
  for (let i = 1; i < N; i++) {
    const cur = cost[start][i];
    if (!visited[i] && cur !== 0) {
      locate[depth] = i;
      visited[i] = true;
      dfs(depth + 1, i, acc + cur); // 시발 왜 acc+= cur로 되어있냐?
      visited[i] = false;
    }
  }
};

dfs(0, 0, 0);
console.log(answer);
