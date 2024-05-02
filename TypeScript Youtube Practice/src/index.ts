let age: number = 5;
if (age < 50) {
    age+=10;
}

let sales: number = 123_456_789;
let course: string = "TypeScript";
let flag: boolean = true;
let level; //any type
level = 1;
level = "Sanjay";

let numbers:number[] = [1,2,3]; //array
numbers.forEach(n=>n.valueOf)

let user:[number, string] = [1,"Sanjay"]; //tuple

enum Size{
    Small, Medium, Large
};
let mySize:Size = Size.Large;
console.log(mySize);

function calculateTax(income: number, taxYear?: number):number{
   if(income < 50000 && taxYear==2024)
    return income;
return income*2;
}
calculateTax(1000);

let employee:{
}={
    id:1,
    name:"Sanjay",
    retire:(date:Date)=> {
        console.log(date)
    }
};

type Employee = {
    readonly id:number,
     name:string
     retire:(date: Date) =>void
}

function kgToLbs(weight:number | string):number{  //union function ( | ) if the weight is string or number
    if(typeof(weight)=="number"){
        return weight*2;
    }
    else{
        return parseInt(weight)*10;
    }
}

type Draggable = {
    drag:() => void
};
type Resizable = {
    resize:() => void
};

type UIWidget = Draggable & Resizable;  //intersection operator ( & ) if this and that condition
let textBox: UIWidget = {
    drag:()=>{},
    resize:()=>{}
}