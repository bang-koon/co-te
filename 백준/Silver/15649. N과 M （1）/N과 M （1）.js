const [n, m] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `4 2`
)
  .split(" ")
  .map(Number);

let answer = "";

let selected = [];
let visited = new Array(n).fill(false);

const dfs = depth => {
  if (depth === m) {
    return (answer += selected.join(" ") + "\n");
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected[depth] = i;
      dfs(depth + 1);
      visited[i] = false;
    }
  }
};

dfs(0);
console.log(answer);
