const createStudent = (name, grade) => {
    let studentObj = {
        Name: name,
        Grade: grade
    }
    return studentObj;
}

addMathGrade = (studentA) => {
    studentA.math = "B";
    return studentA;
}
addHistoryGrade = (student) => {
    student.history = "C";
    return student;
}
addScienceGrade = (student) => {
    student.math = "A";
    return student;
}

let myStudent = createStudent("Bob", "A");
addMathGrade(myStudent);
addHistoryGrade(myStudent);
addScienceGrade(myStudent);
console.log(myStudent);