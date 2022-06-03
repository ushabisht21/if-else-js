let readlineSync=require("readline-sync")
var num1=readlineSync.question("enter the first number")
var num2=readlineSync.question("enter secound number")
var sembol=readlineSync.question("enter the sebole")
if (sembol=="+"){
    console.log(num1+num2)
}
else{
    console.log(num1-num2)
}