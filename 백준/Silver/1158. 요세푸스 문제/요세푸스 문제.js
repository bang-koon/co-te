const fs = require('fs');
let [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let answer = [];
let queue = [];
let count = 1;

// queue 만들기
for (let i = 1; i<=n; i++) {
    queue.push(i);
}

while(1) {
    if (queue.length === 0) break;
    const num = queue.shift();
    if(count % k === 0 ){
        answer.push(num);
    }
    else {
        queue.push(num);
    }

    count++;
}

console.log(`<${answer.join(', ')}>`);