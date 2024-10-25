const fs = require('fs');
let [string, num, ...commands] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const lStack = string.split("");
const rStack = [];

for ( let command of commands ) {
    const [com, mes] = command.split(" "); // 또 split 안함

    if (com === "L" && lStack.length) rStack.push(lStack.pop());
    else if (com === "D" && rStack.length) lStack.push(rStack.pop());
    else if (com === "B" && lStack.length) lStack.pop();
    else if (com === "P") lStack.push(mes);

    // console.log(lStack, rStack, mes);
}

let result = lStack.join("");
result += rStack.reverse().join("");

console.log(result);