let arr = [7, 69, 2, 221, 221]
function miniMaxSum() {
    // Write your code here
    let sorted = arr.sort(function(a,b){return a-b})
    console.log(sorted)
    let maxSum = 0;
    let minSum = 0;

    for( let i = 1; i < sorted.length ; i++){
        maxSum += Number(sorted[i]);
    };
    console.log(maxSum)

    for(let j = 0 ; j < sorted.length-1;j++){
        minSum += Number(sorted[j]);
    }
    console.log(minSum)


}
miniMaxSum()