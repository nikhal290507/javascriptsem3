// function Person(name, age , city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.start = function() {
//         console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old and I live in " + this.city);
//     }
// }

// const person1 = new Person("Alice", 30, "New York");
// const person2 = new Person("Bob", 25, "Los Angeles");

// person1.start();
// person2.start();


class Myclass{
    constructor(name, age , city){
        this.name = name;             //.name is just a variable
        this.age = age;
        this.city = city;
    }

    
    start(){
        console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old and I live in " + this.city);
    }
}

const someperson = new Myclass("Reet", 19, "Ambala");
const person2 = new Myclass("Nikhal", 19, "barnala");
someperson.start();
person2.start();

// console.log(someperson);
// console.log(person2);