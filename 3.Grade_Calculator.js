/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
var personNumber=95;

if(personNumber>89 && personNumber<=100){
    console.log("you have got A");
}else if(personNumber>79 && personNumber<=89){
    console.log("you have got B");
}else if(personNumber>69 && personNumber<=79){
    console.log("you have got C");
}else if(personNumber>59 && personNumber<=69){
    console.log("you have got D");
}else{
    console.log("you have failed");
}