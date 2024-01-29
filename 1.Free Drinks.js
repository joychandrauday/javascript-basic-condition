// /+***

// Free Drinks
//     - Burger more than 500tk: free Coke
//     - Else Coke: 30tk
// */

var payBill=501;

payBill>500 ? console.log("you are platinum customer"):console.log("ordinary")

if (payBill>500){
    var payBill= payBill-30;
    console.log("you have to pay:", + payBill, ":excluded coke's price")
}else{
    console.log("you have to pay:", payBill);

}