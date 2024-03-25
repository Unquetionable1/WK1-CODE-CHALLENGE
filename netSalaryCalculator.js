const prompt=require('prompt-sync')({sigint:true});
const basicSalary=prompt('Please input your basic salary so as to calculate your net tax.');
const benefits=prompt('Please input total sum of your benefits');
//caculates gross salary
salary=Number(basicSalary)+Number(benefits);


function netCalc(salary){
    //calculate NSSF deduction
    NSSF_Deduction=salary*0.06;
    //NHIF CALCULATION and PAYE
    // returns NHIF deductions and PAYE

    if (salary>0 && salary<=5999) {
        NHIF=150
        
    } else 
    if (salary>=6000 && salary<=7999) {
        NHIF=300
        
    } else   if (salary>=8000 && salary<=11999) {
        NHIF=400
        
    } else    if (salary>=12000 && salary<=14999) {
        NHIF=500
        
    } else   if (salary>=15000 && salary<=19999) {
        NHIF=600
        
    } else   if (salary>=20000 && salary<=24999) {
        NHIF=750
        
    } else   if (salary>=25000 && salary<=29999) {
        NHIF=850
        
    } else   if (salary>=30000 && salary<=34999) {
        NHIF=900
        
    } else   if (salary>=35000 && salary<=39999) {
        NHIF=950
        
    } else   if (salary>=40000 && salary<=44999) {
        NHIF=1000
        
    } else   if (salary>45000 && salary<=49999) {
        NHIF=1100
        
    } else   if (salary>=50000 && salary<=59999) {
        NHIF=1200
        
    } else   if (salary>=60000 && salary<=69999) {
        NHIF=1300
        
    } else   if (salary>=70000 && salary<=79999) {
        NHIF=1400
        
    } else   if (salary>=80000 && salary<=89999) {
        NHIF=1500
        
    } else   if (salary>=90000 && salary<=99999) {
        NHIF=1600;
        
    } else   if (salary>=100000) {
        NHIF=1700;
        
    }

    if (salary<=24000) {
        PAYE=salary*0.1;
        
    } else if (salary>24000 && salary<=32333) {
        PAYE=salary*0.25;
        
    } else if (salary>32333 && salary<=500000) {
        PAYE=salary*0.3;
        
    } else if (salary>50000 && salary<=800000) {
        PAYE=salary*0.325;
        
    } else  if (salary>800000) {
        PAYE=salary*0.35;
        
    }

    const total_deductions=PAYE+NHIF+NSSF_Deduction;
    netsalary=salary-total_deductions;

     // returns the net salary, gross salary,Deduction:NHIF, NSSF,
    return `NHIF deduction: ${NHIF} ;This is your net salary: ${netsalary};This is your NSSF Deduction: ${NSSF_Deduction};This is your PAYE deduction: ${PAYE};This is your gross salary: ${salary}`;
   
}
console.log(netCalc(salary));
