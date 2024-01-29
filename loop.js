//for loop | printing all the numbers of an array
// 1 =>
console.log('for loop practice')
const num=[5,4,3,66,33,5,3]
for (const singleNum of num) {
    console.log(singleNum);
}
console.log("=============================");
// 2 =>
const fruits=['orange','apple','guava','grapes','maple']
for (const fruit of fruits){
    console.log("i want to eat", fruit);
}

console.log("=============================");


// ===============WHILE LOOP=============== //

let num2=0;
while (num2<5) {
    console.log('while loop elements');
    num2= num2 + 1;
}


console.log("=============================");
console.log('printing 1-10 using while loop')
let num3=50;
while (num3<=100) {
    console.log(num3);
    num3++;
}
console.log("=============================");
console.log('adding 1-10 using while loop')

let num4=1;
let sumNum4=0;
while (num4<=10) {
    sumNum4=sumNum4+num4;
    num4++;
}
console.log('the sum is',sumNum4);

console.log("=============================");
console.log('adding even numbers using while loop')
let num5=0;
let sumNum5=0;
while (num5<53) {
    if(num5 % 2===0){
        console.log(num5);
        sumNum5=sumNum5+num5; 
    }
    num5++;
}
console.log('the sum is',sumNum5);