let ar = [2, 3, 4, 5, 6, 7];
let k = 3;
let n = 6;


function divisibleSumPairs(n, k, ar) {
    let counter = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar.length; j++) {
            if ((ar[i] + ar[j]) % k === 0 && i < j) {
                counter++;
            }
        }
    }
    return counter;
}
console.log(divisibleSumPairs(n, k, ar));