let readlineaSync = require("readline-sync");
var varX=readlineaSync.questionInt("enter a number");
var vary=readlineaSync.question("enter the number")
if(varX%vary===0){
   console.log("Divisible");
}
else{
   console.log("Not divisible");
}