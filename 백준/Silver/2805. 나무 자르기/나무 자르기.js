let input = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `4 7
20 15 10 17`
).split("\n");
const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...trees);
let result = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  let totalTree = 0;

  for (let tree of trees) {
    if (tree >= mid) totalTree += tree - mid;
  }

  if (totalTree < M) {
    end = mid - 1;
  } else {
    result = mid; // 남은 나무의 개수가 원하는 나무보다 같거나 커야하기 때문에 리절트, 작을때 리절트를 넣으면 오답이니까요
    start = mid + 1;
  }
}

console.log(result);
// 최대한 나무를 덜 가져가야 한다 =  미드의 최댓값을 구해야 한다
// 가져가는 나무가 원하는 나무보다 더 많으면 높이를 높여야해
// 가져가는 나무가 원하는 나무보다 더 적으면 높이를 낮춰야해
