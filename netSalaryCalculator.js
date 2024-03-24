const basicSalary=prompt('Please input your basic salary so as to calculate your net tax.');
const benefits=prompt('Please input total sum of your benefits');
//caculates gross salary
grossSalary=basicSalary+benefits;
salary=grossSalary;

function netCalc(salary){
    //NHIF CALCULATION
    if (salary<=5999) {
        return salary=salary-150;
    } else 
    if (salary>=6000 && salary<=7999) {
        return salary=salary-300;
    } else   if (salary>=8000 && salary<=11999) {
        return salary=salary-400;
    } else    if (salary>=12000 && salary<=14999) {
        return salary=salary-500;
    } else   if (salary>=15000 && salary<=19999) {
        return salary=salary-600;
    } else   if (salary>=20000 && salary<=24999) {
        return salary=salary-750;
    } else   if (salary>=25000 && salary<=29999) {
        return salary=salary-850;
    } else   if (salary>=30000 && salary<=34999) {
        return salary=salary-900;
    } else   if (salary>=35000 && salary<=39999) {
        return salary=salary-950;
    } else   if (salary>=40000 && salary<=44999) {
        return salary=salary-1000;
    } else   if (salary>45000 && salary<=49999) {
        return salary=salary-1100;
    } else   if (salary>=50000 && salary<=59999) {
        return salary=salary-1200;
    } else   if (salary>=60000 && salary<=69999) {
        return salary=salary-1300;
    } else   if (salary>=70000 && salary<=79999) {
        return salary=salary-1400;
    } else   if (salary>=80000 && salary<=89999) {
        return salary=salary-1500;
    } else   if (salary>=90000 && salary<=99999) {
        return salary=salary-1600;
    } else   if (salary>=100000) {
        return salary=salary-1700;
    }
    //NSSFV CALCULATION
    salary = salary;
    newsalary=salary*0.06;
    salary=salary-newsalary;
    netsalary=salary
    //net salary
    return netsalary
}