let arr = [3, 7, 2, 20, 4]
function findMedian (arr){
    let sorted = arr.sort(function(a, b){return a-b});
    console.log(sorted)

    let median = Math.floor(sorted.length/2)

    return arr[median];
}

