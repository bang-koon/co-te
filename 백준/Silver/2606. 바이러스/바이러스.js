const fs = require("fs");
const [node, edge, ...input] =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
    : `7
6
1 2
2 3
1 5
5 2
5 6
4 7`.split("\n");

const visited = Array(101).fill(false);
const graph = Array.from({ length: Number(node) + 1 }, () => []);
// const graph = Array(Number(node) + 1).fill([]); 얘는 배열이 다 같은 참조!!!

for (let i = 0; i < edge; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let count = 0;

const dfs = start => {
  count++;
  visited[start] = true;
  for (let i of graph[start]) {
    if (!visited[i]) {
      dfs(i);
    }
  }
};

dfs(1);

console.log(count - 1);
// 1번 노드 제외
