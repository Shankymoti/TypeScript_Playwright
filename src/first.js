var uname;
uname = "";
var age = 30;
console.log('Name: ${uname}, Age: ${age}');
console.log("Name is" + uname);
console.log("age is" + age);
console.log("Name is ".concat(uname));
console.log("age is ".concat(age));
console.log("Name is " + uname + " age is " + age);
var PersonInfo = /** @class */ (function () {
    function PersonInfo(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    PersonInfo.prototype.setData = function (id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    };
    PersonInfo.prototype.getData = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Age: ").concat(this.age));
    };
    return PersonInfo;
}());
// const persons: PersonInfo[] = [];
// persons.push(new PersonInfo(1, "Alice", 28));
// persons.push(new PersonInfo(2, "Bob", 34));
// persons.push(new PersonInfo(3, "Charlie", 22));
// for (const person of persons) {
//     person.getData();
// }
var persons = [];
for (var i = 1; i <= 3; i++) {
    var id = i;
    var name_1 = prompt("Enter name for person ".concat(i, ":")) || "";
    var age_1 = parseInt(prompt("Enter age for person ".concat(i, ":")) || "0", 10);
    persons.push(new PersonInfo(id, name_1, age_1));
}
persons.forEach(function (person) { return person.getData(); });
