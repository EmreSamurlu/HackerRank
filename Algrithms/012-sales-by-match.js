let n = 10;
let ar = [1, 1, 2, 3, 2, 3, 4, 2, 1, 1]

function sockMerchant(n, ar) {
    // Write your code here
    if (!ar || ar.length !== n) { return 0 };

    let pairs = 0;
    let countObj = {};
    for (let sock of ar) {
        if (!countObj[sock]) {
            countObj[sock] = 1;
        } else {
            countObj[sock] = countObj[sock] + 1;

            if (countObj[sock] === 2) {
                pairs++;
                countObj[sock] = 0;
            }
        }
    }
    return pairs
}

console.log(sockMerchant(n, ar), "pairs")