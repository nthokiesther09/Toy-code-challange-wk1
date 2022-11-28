let personalRelief;
let NHIF;
let NSSF = 400;
const prompt = require("prompt-sync")();//defining the prompt 
function calculateTax(){
    let Paye = 0;
    let gross = prompt("Enter gross amount")
    let taxableIncome = gross - (calculateNHIF(gross) + NSSF + personalRelief)
    if(taxableIncome > 0 && taxableIncome <= 24000){
        Paye = taxableIncome*0.1;
    } else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
        Paye = 24000 * 0.1 + (taxableIncome - 24000) * 0.25 ;
       
    } else {
        Paye = 24000 * 0.1 + (taxableIncome - 24000) * 0.25 + (taxableIncome - 8333) * 0.3;
    }
    return (taxableIncome - Paye)
}
const calculateNHIF = function (gross){
    if (gross > 0 && gross <= 5999) {
        NHIF = 150 * 0.85;
        return NHIF
    } else if (gross >= 6000 && gross <= 7999) {
        NHIF = 300 * 0.85;
        return NHIF
    } else if (gross >= 8000 && gross <= 11999) {
        NHIF = 400 * 0.85;
        return NHIF
    } else if (gross >= 12000 && gross <= 14999) {
        NHIF = 500 * 0.85;
        return NHIF
    } else if (gross >= 15000 && gross <= 19999) {
        NHIF = 600 * 0.85;
        return NHIF
    } else if (gross >= 20000 && gross <= 24999) {
        NHIF = 750 * 0.85;
        return NHIF
    } else if (gross >= 25000 && gross <= 29999) {
        NHIF = 850 * 0.85;
        return NHIF
    } else if (gross >= 30000 && gross <= 34999) {
        NHIF = 900 * 0.85;
        return NHIF
    } else if (gross >= 35000 && gross <= 39999) {
        NHIF = 950 * 0.85;
        return NHIF
    } else if (gross >= 40000 && gross <= 44999) {
        NHIF = 1000 * 0.85;
        return NHIF;
    } else if (gross >= 45000 && gross <= 49999) {
        NHIF = 1100 * 0.85;
        return NHIF;
    } else if (gross >= 50000 && gross <= 59999) {
        NHIF = 1200 * 0.85;
        return NHIF;
    } else if (gross >= 60000 && gross <= 69999) {
        NHIF = 1300 * 0.85;
        return NHIF;
    } else if (gross >= 70000 && gross <= 79999) {
        NHIF = 1400 * 0.85;
        return NHIF;
    } else if (gross >= 80000 && gross <= 89999) {
        NHIF = 1500 * 0.85;
        return NHIF;
    } else if (gross >= 90000 && gross <= 99999) {
        NHIF = 1600 * 0.85;
        return NHIF;
    } else {
        NHIF = 1700 * 0.85;
        return NHIF;
    }
}
console.log(calculateTax());

// calculateNHIF()
// // calculateTax()
// // calculateNSSF()
// // console.log(Paye);
// console.log(NHIF);
// console.log(NSSF);
