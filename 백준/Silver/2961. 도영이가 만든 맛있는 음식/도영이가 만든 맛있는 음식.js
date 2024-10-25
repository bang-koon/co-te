const [N, ...arr] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `4
1 7
2 6
3 8
4 9`
).split("\n");

const graph = arr.map(a => a.split(" ").map(Number));
const selected = [];
let visited = new Array(N).fill(false);
let answer = 1e9;

const dfs = depth => {
  if (depth >= 1) {
    let sour = 1;
    let bitter = 0;
    for (let num of selected) {
      const [s, b] = graph[num];
      sour *= s;
      bitter += b;
    }
    answer = Math.min(answer, Math.abs(sour - bitter));
  }

  for (let i = depth; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
};

dfs(0);
console.log(answer);
