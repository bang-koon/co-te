const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const stack= [];
const answer = [];

for (let i = 1; i < input.length; i++){
    // push
    if (input[i].includes('push')){
        let temp = input[i].split(' ');
        stack.push(Number(temp[1]));
        // continue;
    }   
    // console.log(input[i]);
    // the others
    switch (input[i]){
        case 'pop':
            stack.length ? answer.push(stack.pop()): answer.push(-1);
            break;
        case 'size':
            answer.push(stack.length);
            break;
        case 'empty':
            stack.length ? answer.push(0): answer.push(1);
            break;
        case 'top':
            stack.length ? answer.push(stack[stack.length-1]): answer.push(-1);
            break;
        default: 
            break;
    }
}

console.log(answer.join("\n"));

