const prompt=require('prompt-sync')({sigint:true});

//Prompt user to input the grade
const grade=prompt('Input grade to be graded: ');
let message;

//A fvunction that grades the student according to the set parameters
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
    //if Grade is between '0' and '100' the grade calculator is run
    if (grade>=0 && grade<=100) {

        message=gradeGenerator(grade);
    } else {
        //If not the message is output
        message ='The vallue input is invalid.Please input a value between 0 and 100'
    }
    return message;
}

//shows the output of grade generator
console.log(console.log(generateGrade(Number(grade))));
