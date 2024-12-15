
//Variables and constants
const accountId = 12345;  //semicolons at end of statement is optional

let acountEmail="abc@gmail.com";

var accountPassword="rest";    
/* avoid using as there was block scope and functional scope problem in older days,
variables declared using var were not sure of their scope and changing the value at one place 
could affect multiple places due to scope issue */

accountCity =" Bangalore" //try avoiding this too for better readability

//accountId=22; //Not allowed as accountId is declared as constant
let accountState;  // just variable declaration and it will hold undefined value as of now

console.log(accountId);

console.table([accountId,accountPassword,acountEmail,accountCity,accountState]);// console.table prints output in tabular format. 