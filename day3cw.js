let studentName="Rahul";
let correctAnswers=4;
let wrongAnswers=1;

function getFinalScore(name,correct,wrong){
    return name==="Unknown"?"invalid Student":(correct*4)-(wrong*1);
}
let result=getFinalScore(studentName,correctAnswers,wrongAnswers);

console.log(result);
console.log(typeof result);