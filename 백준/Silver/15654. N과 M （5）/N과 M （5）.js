const input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `3 3
1 1000 111`
).split("\n");
// 중복x, 순서 고려

const [N, M] = input[0].split(" ").map(Number);
const NUMS = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let answer = "";
let selected = [];
let visited = new Array(N).fill(false); // N+1이 아니라 N만 있으면 됨 0부터 사용

const dfs = depth => {
  if (depth === M) return (answer += selected.join(" ") + "\n");

  for (let i = 0; i < N; i++) {
    // 0부터, N의 값을 사용하기에
    if (visited[i] == false) {
      visited[i] = true;
      selected[depth] = NUMS[i]; // i가 아니라 NUMS의 값을 사용
      dfs(depth + 1);
      visited[i] = false;
    }
  }
};

dfs(0);
console.log(answer);
