/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var tPrice=300;
var age=62;
isStudent = true;

if (age<10){
    console.log("your are free to ride.")
}else if(age>=10 && age<60 && isStudent){
    var discount= tPrice*50/100;
    var tPrice=tPrice-discount;
    console.log("you are a student and your ticket price is:");
    console.log(tPrice);
}else if(age>=60){
    var discount= tPrice*15/100;
    var tPrice=tPrice-discount;
    console.log("you are a senior citizen and your ticket price is:");
    console.log(tPrice);
}else{
    console.log("you are a regular person and your ticket price is:");
    console.log(tPrice);
    
}
