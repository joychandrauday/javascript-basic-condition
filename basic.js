// average number

var number1=32;
var number2=52;
var number3=82;
var number4=39;
var number5=35;
var numbers=[55,66,80,44,23,35];

var sumNum=numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]
var numNum=numbers.length;
var averAge=sumNum/numNum;
console.log(averAge.toFixed(2))


// finding sign
var x= -1;
var y= 8;
var z= 5;
var proDuct=x*y*z;
if(x>0 && y>0 && z>0){
    console.log("the sign of the the product",+proDuct,"is +" )
}else if(x>0 && y>0 && z<0){
    console.log("the sign of the the product",+proDuct,"is -" )
}else if(x>0 && y<0 && z<0){
    console.log("the sign of the the product",+proDuct,"is +" )
}else if(x<0 && y<0 && z<0){
    console.log("the sign of the the product",+proDuct,"is -" )
}else if(x<0 && y>0 && z<0){
    console.log("the sign of the the product",+proDuct,"is +" )
}else if(x<0 && y<0 && z>0){
    console.log("the sign of the the product",+proDuct,"is +" )
}else if(x<0 && y>0 && z>0){
    console.log("the sign of the the product",+proDuct,"is -" )
}