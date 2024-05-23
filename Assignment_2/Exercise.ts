//Ex1:

//Question 1:
console.log(`Question 1:`);

var date: number[]=[2020,12,8];
let[year,month,day]=date;
console.log(`year: ${year}`);
console.log(`month: ${month}`);
console.log(`day: ${day}`);

//Question 2:
console.log(`Question 2:`);
const person = {
    firstName:"Nguyen",
    lastName:"A",
    age:20
};
let{firstName: firstName, lastName: lastName, age: age} = person;
console.log(`first name: ${firstName}`);
console.log(`last name: ${lastName}`);
console.log(`age: ${age}`);

//Ex2:

//Question 1:
console.log(`Question 1:`);
let hello = '"Tôi tên là ???" ", năm nay tuổi???, "đang ế!"';
const fullName = "Hoàng Tuấn";
const myAge1 = "25";
console.log(`Tôi tên là ${fullName}, năm nay ${myAge1} tuổi.`);

//Question 2:
console.log(`Question 2:`);
const a=5;
const b=20;
console.log(`Tong cua ${a} va ${b} la ${a + b}`);

//Question 3:
console.log(`Question 3:`);


//Ex3:
//Question 1:
console.log(`Question 1:`);
let array1=[2,4,6,8,10];
let array2=[...array1,5,7,9]
console.log(`array 2: ${array2}`);

//Question 2:
console.log(`Question 2:`);
let array3 = [...array2];

//Question 3:
console.log(`Question 3:`);
let cold1 =['autumn', 'winter'];
let warm1 = ['spring','summer'];
let seasons=[...cold1, ...warm1];
console.log(`seasons: ${seasons}`);





