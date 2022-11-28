
const prompt = require("prompt-sync")();
let grade = prompt('Enter Marks:');
{
//Categorising grade A,B,C,D,E

if (grade <= 100 && grade >79){
    console.log('A')
}

else if (grade <= 79 && grade >= 60 ){
    console.log ('B')
}

else if (grade <= 59 && grade > 49){
    console.log('C')
}

else if (grade <= 49 && grade >= 40 ){
    console.log('D')
}

else if (grade < 40){
    console.log('E')
}
}