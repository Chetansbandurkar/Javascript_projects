let num1=10;
let num2=2;
document.getElementById("num11").textContent=num1;
document.getElementById("num22").textContent=num2;

let ans=document.getElementById("sums");

 
function add()
{
    let result=num1+num2;
    ans.textContent= "SUM: " + result;
}
function substract()
{
    let result=num1-num2;
    ans.textContent= "SUBSTRACTION : " + result;
}
function divide()
{
    let result=num1/num2;
    ans.textContent= "ANS: " + result;
}
function multiply()
{
    let result=num1*num2;
    ans.textContent= "MULTIPLICATION: " + result;
}