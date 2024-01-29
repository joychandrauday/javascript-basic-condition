/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
var personNumber=45;
var friendNumber=35;
if(personNumber>80){
    if(friendNumber>80){
        console.log("let's go party");
    } else if(friendNumber<80 && friendNumber>=60){
        console.log("good luck next time friend.");
    } else if(friendNumber<60 && friendNumber>=40){
        console.log("*not seen*");
    } else if(friendNumber<40){
        console.log("you are not my friend");
    }
} else{
    console.log("i am sad.no more talk.")
}