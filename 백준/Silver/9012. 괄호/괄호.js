let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const count = input[0];
let result ="";

outerfor:
for (let i = 1; i <= count; i++){
    let score = 0;
    for (let value of input[i]){
        switch(value){
            case '(':
                score++;
                break;
            
            case ')':
                score--;
                break;
            default: 
                break;
        }

        if (score < 0){
            result+= "NO\n";
            continue outerfor;
        }
    }
    score === 0 ? result += "YES\n": result += "NO\n" 


}
console.log(result.trim());