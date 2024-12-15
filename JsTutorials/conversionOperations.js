let score =33

 console.log(typeof score);  // numberclear
 console.log(typeof(score)); //number

 //Type conversion to number

 let valueInNumber =Number(score); //here Number is with N capital because we are converting type of variable score to number
 console.log("Value of valueInNumber: "+valueInNumber, "Type of valueInNumber: " +typeof valueInNumber);//33, number
 //console.log(typeof valueInNumber); //number

console.log("-------------------");
 
let score1= "33"
let valueInNumber1 =Number(score1); //here Number is with N capital because we are converting type of variable score to number
 console.log("Value of valueInNumber1: "+valueInNumber1, "Type of valueInNumber1: " +typeof valueInNumber1);// 33 , number
//console.log(typeof valueInNumber1); //number

 console.log("-------------------");
 let score2="33abc"
 let valueInNumber2 =Number(score2); //here Number is with N capital because we are converting type of variable score to number
 console.log("Value of valueInNumber2: "+valueInNumber2, "Type of valueInNumber2: " +typeof valueInNumber2);//NaN, number
 //console.log(typeof (valueInNumber2)); //NaN because 33abc cannot be converted to number hence it gives NaN(Not a Number)

 console.log("-------------------");
 let score3=null
 console.log(typeof score3);
 
 let valueInNumber3 =Number(score3); //here Number is with N capital because we are converting type of variable score to number
 console.log("Value of valueInNumber3: "+valueInNumber3, "Type of valueInNumber3: " +typeof valueInNumber3); //0, number

 console.log("-------------------");
 let score4=undefined
 console.log(typeof score4);

 let valueInNumber4 =Number(score4); //here Number is with N capital because we are converting type of variable score to number
 console.log("Value of valueInNumber4: "+valueInNumber4, "Type of valueInNumber4: " +typeof valueInNumber4);//NaN, number

 console.log("-------------------");
 let score5=true
 let valueInNumber5 =Number(score5); //here Number is with N capital because we are converting type of variable score to number
 console.log("Value of valueInNumber5: "+valueInNumber5, "Type of valueInNumber5: " +typeof valueInNumber5); //1 for true and 0 for false, number

 console.log("-------------------");
 let score6='abc'
 let valueInNumber6 =Number(score6); //here Number is with N capital because we are converting type of variable score to number
 console.log("Value of valueInNumber6: "+valueInNumber6, "Type of valueInNumber6: " +typeof valueInNumber6);// NaN, number


let isLoggedIn= 0
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn, booleanIsLoggedIn)
