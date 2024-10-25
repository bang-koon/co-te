const fs = require("fs");
let [caseNum, ...input] =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
    : `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`.split("\n");

let line = 0;
let count = 0;

const dfs = (graph, x, y, M, N) => {
  if (x < 0 || y < 0 || x >= M || y >= N) return;

  if (graph[x][y] != 1) return;

  graph[x][y] = -1;
  dfs(graph, x - 1, y, M, N);
  dfs(graph, x + 1, y, M, N);
  dfs(graph, x, y - 1, M, N);
  dfs(graph, x, y + 1, M, N);
};

while (caseNum--) {
  const [M, N, NUM] = input[line].split(" ").map(Number);
  let soil = Array.from({ length: M }, () => Array(N).fill(0));

  for (let i = 1; i <= NUM; i++) {
    const [x, y] = input[line + i].split(" ").map(Number);
    soil[x][y] = 1;
  }
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (soil[i][j] == 1) {
        dfs(soil, i, j, M, N);
        count++;
      }
    }
  }
  line += NUM + 1;
  console.log(count);
  count = 0;
}
