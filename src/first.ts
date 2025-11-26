let uname : string;
uname = "";
let age : number =30;
console.log('Name: ${uname}, Age: ${age}');
console.log("Name is"+uname);
console.log("age is"+age);
console.log(`Name is ${uname}`);
console.log(`age is ${age}`);
console.log("Name is "+uname+" age is "+age);


class PersonInfo {
    id!: number;
    name!: string;
    age!: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    setData(id: number, name: string, age: number): void {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getData(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`);
    }
}

// const persons: PersonInfo[] = [];
// persons.push(new PersonInfo(1, "Alice", 28));
// persons.push(new PersonInfo(2, "Bob", 34));
// persons.push(new PersonInfo(3, "Charlie", 22));

// for (const person of persons) {
//     person.getData();
// }


const persons: PersonInfo[] = [];
for (let i = 1; i <= 3; i++) {
    const id = i;
    const name = prompt(`Enter name for person ${i}:`) || "";
    const age = parseInt(prompt(`Enter age for person ${i}:`) || "0", 10);
    persons.push(new PersonInfo(id, name, age));
}

persons.forEach(person => person.getData());