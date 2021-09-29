let year = 1800;

function dayOfProgrammer(year) {
    // Write your code here

    let isLeepYeer = (year % 4 === 0)
        ? ((year % 100 === 0) ? ((year < 1918 || (year % 400 === 0)) ? true : false) : true)
        : false;

    return `${year === 1918 ? 26 : (isLeepYeer ? 12 : 13)}.09.${year}`;

}
console.log(dayOfProgrammer(year))