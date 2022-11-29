// Defined prompt function
const prompt = require("prompt-sync")();

function salaryCalculator(){

    let basic = prompt('enter basic salary:')
    let benefits = prompt('enter total benefits:')
    // Getting the gross salary
    let gross = Number(basic) + Number(benefits);
    let payeAmount = 0;
    let taxableIncome = gross- (nhifDeductions(gross) + nssfDeductions(gross))
    // calculating Tax
    if (gross > 0 && gross <= 24000){
        payeAmount = (24000 * 0.1)

    }else if (gross >= 24001 && gross <= 32333){
        payeAmount =(32333 -24001) * 0.25

    }else if(gross > 32333){
        payeAmount = ((24000 * 0.1) +((32333 -24001) * 0.25) + ((taxableIncome -32333)* 0.30))
}
return `The gross pay is ${gross}\n -Paye is ${payeAmount}\n -Net salary is ${gross - payeAmount}`
}
// calculating NHIF
const nhifDeductions = function (gross){
    let NHIF = 0
    if (gross > 0 && gross <= 5999) {
        NHIF = 150 
        return NHIF
    } else if (gross >= 6000 && gross <= 7999) {
        NHIF = 300 
        return NHIF
    } else if (gross >= 8000 && gross <= 11999) {
        NHIF = 400 
        return NHIF
    } else if (gross >= 12000 && gross <= 14999) {
        NHIF = 500 
        return NHIF
    } else if (gross >= 15000 && gross <= 19999) {
        NHIF = 600 
        return NHIF
    } else if (gross >= 20000 && gross <= 24999) {
        NHIF = 750 
        return NHIF
    } else if (gross >= 25000 && gross <= 29999) {
        NHIF = 850 
        return NHIF
    } else if (gross >= 30000 && gross <= 34999) {
        NHIF = 900 
        return NHIF
    } else if (gross >= 35000 && gross <= 39999) {
        NHIF = 950 
        return NHIF
    } else if (gross >= 40000 && gross <= 44999) {
        NHIF = 1000 
        return NHIF;
    } else if (gross >= 45000 && gross <= 49999) {
        NHIF = 1100 
        return NHIF;
    } else if (gross >= 50000 && gross <= 59999) {
        NHIF = 1200 
        return NHIF;
    } else if (gross >= 60000 && gross <= 69999) {
        NHIF = 1300 
        return NHIF;
    } else if (gross >= 70000 && gross <= 79999) {
        NHIF = 1400 
        return NHIF;
    } else if (gross >= 80000 && gross <= 89999) {
        NHIF = 1500 
        return NHIF;
    } else if (gross >= 90000 && gross <= 99999) {
        NHIF = 1600 
        return NHIF;
    } else if(gross>=100000){
        NHIF = 1700 
        return NHIF;
    }else{
        return NHIF=0;
    }
    }

//calculating NSSF 
const nssfDeductions = function (gross) {
    let nssf = 0
    if(gross <= 6000){
        return(0.06 * gross) 

    }else if(gross > 6000 && gross <= 18000){
        let tier1 = (0.06 * 6000);
        let tier2 = (0.06 * (gross - 6000))
        return (tier1 + tier2)

    }else if(gross > 18000){
        return (1080)
    }
return nssf
}
console.log(salaryCalculator());
// Net salary = (gross salary - paye)
