const grade=prompt('Input grade to be graded');
function generateGrade(grade){
    if (grade>=0 && grade<=100) {
        return gradeGenerator(grade);
    } else {
        return 'The vallue input is invalid.Please input a value between 0 and 100'
    }
}

function gradeGenerator(grade){
    if (grade>79) {
        return 'A';
    } else if(grade>=60 && grade<= 79){
        return 'B';
    } else if (grade>=49 && grade <= 59) {
        return 'c';
    } else if(grade>=40 && grade<49){
        return 'D';
    } else {
        return 'E';
    }
}