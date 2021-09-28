let a = [2, 4];
let b = [16, 32, 96]

function getTotalX(a, b) {
    let counter = 0;
    for (let i = 1; i <= 100; i++) {
        if (a.every((a) => i % a === 0) && b.every((b) => b % i === 0)) {
            counter++;
        }
    }
    return counter;
}
console.log(getTotalX(a, b))