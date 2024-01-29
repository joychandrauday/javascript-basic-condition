console.log("===============FOR LOOP===============");
console.log("===============FOR LOOP===============");
//for loop | printing all the numbers of an array
// 1 =>
console.log('for loop practice')
const num=[5,4,3,66,33,5,3]
for (const singleNum of num) {
    console.log(singleNum);
}
console.log("=============================");
console.log('printing 1-10 using for loop')

for (let num6 = 0; num6 < 10; num6++) {
    console.log(num6);
}
console.log("=============================");
console.log('printing even or odd using for loop')
for (let num7 = 1; num7 < 20; num7=num7+2) {
    console.log(num7);
    
}
console.log("=============================");
console.log('adding even or odd using for loop|')
let sumNum8=0;
for (let num8 = 0; num8 < 20; num8++) {
    sumNum8=sumNum8+num8;
}
console.log('the sum is',sumNum8)

console.log("=============================");
// 2 =>
const fruits=['orange','apple','guava','grapes','maple']
for (const fruit of fruits){
    console.log("i want to eat", fruit);
}

console.log("===============WHILE LOOP===============");
console.log("===============WHILE LOOP===============");


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