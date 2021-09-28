let grades = [33, 38, 48, 63, 73, 85]

function gradingStudents(grades) {
    // Write your code here
    let roundTo = 5;
    let numRound = 2;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38 && grades[i] % roundTo > numRound) {
            grades[i] = grades[i] + (roundTo - (grades[i] % roundTo));
        } else {
            grades[i] = grades[i]
        }

    }
    return grades;
}

console.log(gradingStudents(grades))