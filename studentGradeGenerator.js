const prompt=require('prompt-sync')({sigint:true});
const grade=prompt('Input grade to be graded: ');
let message;

function gradeGenerator(grade,message){
   
    if (grade>79) {
        message='A';
    } else if(grade>=60 && grade<= 79){
        message='B';
    } else if (grade>=49 && grade <= 59) {
        message='c';
    } else if(grade>=40 && grade<49){
        message='D';
    } else {
        message='E';
    }
    return message;
}

function generateGrade(grade){
    if (grade>=0 && grade<=100) {
        message=gradeGenerator(grade);
    } else {
        message ='The vallue input is invalid.Please input a value between 0 and 100'
    }
    return message;
}

console.log(console.log(generateGrade(Number(grade))));
