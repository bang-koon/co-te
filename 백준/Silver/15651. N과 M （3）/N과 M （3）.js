const [N, M] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `4 2`
)
  .split(" ")
  .map(Number);

let selected = [];
let answer = "";

const dfs = depth => {
  if (depth === M) return (answer += selected.join(" ") + "\n");

  for (let i = 1; i <= N; i++) {
    selected[depth] = i;
    dfs(depth + 1);
  }
};

dfs(0);
console.log(answer);
