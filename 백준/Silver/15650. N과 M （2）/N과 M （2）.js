const [N, M] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `4 2`
)
  .split(" ")
  .map(Number);

let visited = [];
let selected = [];
let result = [];

const dfs = (depth, start) => {
  if (depth === M) {
    result.push([...selected]);
    return;
  }

  for (let i = start; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected[depth] = i;
      dfs(depth + 1, i + 1);
      visited[i] = false;
    }
  }
};

dfs(0, 1);

result = result.map(a => a.sort());
result = [...new Set(result.join("|").split("|"))];

let answer = "";
result.map(a => {
  answer += a.replaceAll(",", " ") + "\n";
});

console.log(answer);
