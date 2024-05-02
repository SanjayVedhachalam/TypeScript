"use strict";
let age = 5;
if (age < 50) {
    age += 10;
}
let sales = 123456789;
let course = "TypeScript";
let flag = true;
let level;
level = 1;
level = "Sanjay";
let numbers = [1, 2, 3];
numbers.forEach(n => n.valueOf);
let user = [1, "Sanjay"];
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Large;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (income < 50000 && taxYear == 2024)
        return income;
    return income * 2;
}
calculateTax(1000);
let employee = {
    id: 1,
    name: "Sanjay",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof (weight) == "number") {
        return weight * 2;
    }
    else {
        return parseInt(weight) * 10;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
//# sourceMappingURL=index.js.map