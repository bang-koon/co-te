let [num, input] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `5
2 1 5 4 3`
).split("\n");
const ballon = input.split(" ");
let result = 0;
let arrow = new Array(1000001).fill(0);

for (let el of ballon) {
  if (arrow[el] > 0) {
    arrow[el] -= 1;
    arrow[el - 1] += 1;
  } else {
    result++;
    arrow[el - 1] += 1;
  }
}

console.log(result);

// 5개 포문 돌리고
// 안에서 다시 포문 배열 렝스만큼, 하나면 추가
