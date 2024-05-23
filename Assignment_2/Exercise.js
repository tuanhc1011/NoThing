//Ex1:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question 1:
console.log("Question 1:");
var date = [2020, 12, 8];
var year = date[0], month = date[1], day = date[2];
console.log("year: ".concat(year));
console.log("month: ".concat(month));
console.log("day: ".concat(day));
//Question 2:
console.log("Question 2:");
var person = {
    firstName: "Nguyen",
    lastName: "A",
    age: 20
};
var firstName = person.firstName, lastName = person.lastName, age = person.age;
console.log("first name: ".concat(firstName));
console.log("last name: ".concat(lastName));
console.log("age: ".concat(age));
//Ex2:
//Question 1:
console.log("Question 1:");
var hello = '"Tôi tên là ???" ", năm nay tuổi???, "đang ế!"';
var fullName = "Hoàng Tuấn";
var myAge1 = "25";
console.log("T\u00F4i t\u00EAn l\u00E0 ".concat(fullName, ", n\u0103m nay ").concat(myAge1, " tu\u1ED5i."));
//Question 2:
console.log("Question 2:");
var a = 5;
var b = 20;
console.log("Tong cua ".concat(a, " va ").concat(b, " la ").concat(a + b));
//Question 3:
console.log("Question 3:");
//Ex3:
//Question 1:
console.log("Question 1:");
var array1 = [2, 4, 6, 8, 10];
var array2 = __spreadArray(__spreadArray([], array1, true), [5, 7, 9], false);
console.log("array 2: ".concat(array2));
//Question 2:
console.log("Question 2:");
var array3 = __spreadArray([], array2, true);
//Question 3:
console.log("Question 3:");
var cold1 = ['autumn', 'winter'];
var warm1 = ['spring', 'summer'];
var seasons = __spreadArray(__spreadArray([], cold1, true), warm1, true);
console.log("seasons: ".concat(seasons));
