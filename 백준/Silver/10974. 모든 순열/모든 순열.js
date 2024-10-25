const n = Number(
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `3`
);

let answer = "";
let current = [];
let visited = new Array(n + 1).fill(false);

const dfs = depth => {
  if (depth === n) {
    return (answer += current.join(" ") + "\n");
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      current[depth] = i;
      dfs(depth + 1);
      visited[i] = false;
    }
  }
};

dfs(0);
console.log(answer);
