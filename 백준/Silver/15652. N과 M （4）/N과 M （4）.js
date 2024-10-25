const [N, M] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `3 3`
)
  .split(" ")
  .map(Number);

let selected = [];
let answer = "";

const dfs = (depth, start) => {
  if (depth === M) return (answer += selected.join(" ") + "\n");

  for (let i = start; i <= N; i++) {
    selected[depth] = i;
    dfs(depth + 1, i);
  }
};

dfs(0, 1);
console.log(answer);
