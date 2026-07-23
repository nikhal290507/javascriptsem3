// async function apifetch() {
//     const api = await fetch('https://fakestoreapi.com/carts');
//     const result = await api.json();
//     console.log(result);
// }
// apifetch();





//   problem 1


// console.log(this);

// const user= {
//     name:"John",
//     greet(){
//         console.log(this.name);
//     }
// }
// user.greet();




//   problem 2

// function show(){
//     console.log(this);
// }

// show();



//   problem 3 (arrow function)


const user= {
    name:"nikhal",
    greet:()=>{
        console.log(this.name);
    }
};
user.greet();