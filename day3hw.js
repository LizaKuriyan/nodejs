let userName1="Alex";
let initialBalanace1=1000;
let amountAdded1=500;
let amountSpent1=700;

let userName2="guest";
let initialBalanace2=1000;
let amountAdded2=200;
let amountSpent2=100;

function updateWallet(name,current_balance,amt_added,amt_spent){
    return name==="guest"?"Access Denied":current_balance+amt_added-amt_spent;
}

let final_bal1=updateWallet(userName1,initialBalanace1,amountAdded1,amountSpent1);
let final_bal2=updateWallet(userName2,initialBalanace2,amountAdded2,amountSpent2);

console.log("Final Balance (Alex):", final_bal1);        
console.log("Is balance > 0?", final_bal1 > 0);          
console.log("Data type:", typeof final_bal1);             

console.log("Final Balance (guest):", final_bal2);        
console.log("Data type:", typeof final_bal2);