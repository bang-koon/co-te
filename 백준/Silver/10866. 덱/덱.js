const fs = require('fs');
let [num, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// [num, input] 으로 써서 input에 첫 줄만 들어갔음
const deque = [];
let result = [];

const command = {
    push_front: (x) => {
        deque.unshift(x);
    },
    push_back: (x) => {
        deque.push(x);
    },
    pop_front: () => {
        result += (deque.shift() || -1) + '\n';
    },
    pop_back: () => {
        result += (deque.pop() || -1) + '\n';
    },
    size: () => {
        result += deque.length + '\n';
    },
    empty: () => {
        result += (deque.length? 0: 1) + '\n';
    },
    front: () =>{
        result += (deque[0] || -1) + '\n';
    },
    back: () => {
        result += (deque[deque.length-1] || -1) + '\n';
    }
};

for (let i=0; i<num; i++) {
    const [com, mes] = input[i].split(' ');
    command[com](mes);
};

console.log(result);