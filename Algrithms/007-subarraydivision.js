let s = [2, 2, 1, 3, 2];
let d = 4;
let m = 2;


function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    let sum;

    for (let i = 0; i < s.length; i++) {
        sum = s.slice(i, m + i).reduce((prev, curr) => prev + curr);
        if (sum === d) {
            count++;
        }
    }
    return count;
}

console.log(birthday(s, d, m))