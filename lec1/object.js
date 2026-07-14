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


// class Myclass{
//     constructor(name, age , city){
//         this.name = name;             //  .name is just a variable
//         this.age = age;
//         this.city = city;
//     }
//     start(){
//         console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old and I live in " + this.city);
//     }
// }

// const someperson = new Myclass("Reet", 19, "Ambala");
// const person2 = new Myclass("Nikhal", 19, "barnala");
// someperson.start();
// person2.start();

// console.log(someperson);
// console.log(person2);


var obj2 = {
    name: "Nikhal",
    age: 19,
    friend: {
        name: "Alice",
        age: 20
    }
}

// seal is used to prevent adding or removing properties from an object, but allows modification of existing properties.
Object.seal(obj2);
obj2.myage = 20;
obj2.name = "Reet";
console.log(obj2.name); 
console.log(obj2.myage);

Object.freeze(obj2);
obj2.myage = 20;
obj2.name = "Reet";
console.log(obj2.name); 
console.log(obj2.myage);



// const {friend :{name,age}}= obj2;

// console.log(name);
// console.log(age);  

