let scores = [10, 15, 3, 25, 13, 30];
function breakingRecords(scores) {
    // Write your code here
    let min = scores[0];
    let max = scores[0];
    let minCount = 0;
    let maxCount = 0;

    for (let i = 1; i <= scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        }

    }
    return [maxCount, minCount];
}
console.log(breakingRecords(scores))