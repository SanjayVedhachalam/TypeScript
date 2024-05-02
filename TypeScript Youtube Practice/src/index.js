var age = 5;
if (age < 50) {
    age += 10;
}
var sales = 123456789;
var course = "TypeScript";
var flag = true;
var level; //any type
level = 1;
level = "Sanjay";
var numbers = [1, 2, 3]; //array
numbers.forEach(function (n) { return n.valueOf; });
var user = [1, "Sanjay"]; //tuple
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
var mySize = Size.Large;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (income < 50000 && taxYear == 2024)
        return income;
    return income * 2;
}
calculateTax(1000);
var employee = {
    id: 1,
    name: "Sanjay",
    retire: function (date) {
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
var textBox = {
    drag: function () { },
    resize: function () { }
};
