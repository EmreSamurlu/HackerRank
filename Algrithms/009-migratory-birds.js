let arr = [3, 4, 1, 3, 5, 6,]

function migratoryBirds(arr) {
    let birdObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!birdObj[arr[i]]) {
            birdObj[arr[i]] = 0;
        }
        birdObj[arr[i]] = birdObj[arr[i]] + 1;
    }

    const birdObjKeys = Object.keys(birdObj);
    const birdObjValues = Object.values(birdObj);
    const maxSighting = Math.max(...birdObjValues);

    for (let j = 0; j < birdObjValues.length; j++) {
        if (birdObjValues[j] === maxSighting) {
            return birdObjKeys[j];
        }
    }
    return max;
}
console.log(migratoryBirds(arr))