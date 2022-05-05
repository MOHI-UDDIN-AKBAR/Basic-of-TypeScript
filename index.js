// data types 
var id = 5;
var personName = 'Arafat';
var isLoading = true;
var age;
age = 23;
var anything = "2";
var people = ["Arafat", "Samir", "Rifat"];
var numbers = [2, 4, 5, 5];
var arr = ["Arafat", 23];
//tuple 
var person = ["arafat", 23, true];
//tuple Array
var employee = [
    [1, "arafat"],
    [2, "rifat"],
    [3, "samir"]
];
//Union 
var option = 3;
//object 
var objectOne = {
    id: 3,
    name: "arafat"
};
var objectTwo = {
    id: 1,
    name: "samir"
};
//type assertion 
var newId = 2;
var customerId = newId;
// or 
var employeeId = newId;
// function 
function sum(x, y) {
    return x + y;
}
console.log(sum(2, 4));
//if function does not return anything than return type is void 
function sub(x, y) {
    console.log(x + y);
}
sub(2, 4);
var objectThree = {
    id: 3,
    name: "Rifat"
};
var MathFunction = function (x, y) { return x + y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.getSummery = function () {
        return " my name is ".concat(this.name);
    };
    return Person;
}());
var personOne = new Person(1, "arafat");
