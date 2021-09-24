// input is 12-hour clock format
// output is 24-hour clock format

const s = '05:45:30PM';

function timeConversion(s) {
    // Write your code here
    let AMPM = s.slice(-2);
    let timeArr = s.slice(0, -2).split(":");
    if (AMPM === "AM" && timeArr[0] === "12") {
        // catching edge-case of 12AM
        timeArr[0] = "00";
    } else if (AMPM === "PM") {
        // everything with PM can just be mod'd and added with 12 - the max will be 23
        timeArr[0] = (timeArr[0] % 12) + 12
    }  
    return timeArr.join(":");
}

console.log(timeConversion(s));