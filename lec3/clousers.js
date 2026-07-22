// function registration(callback) {
//     setTimeout(() => {
//         console.log("Registration completed");
//         callback();
//     }, 2000);
// }

// function login(callback) {
//     setTimeout(() => {
//         console.log("Login");
//         callback();
//     }, 1000);
// }

// function logout() {
//     setTimeout(() => {
//         console.log("Logout");
//     }, 3000);
// }
// registration(() => login(logout));





// function registration() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//             console.log("Registration completed");
            
//         }, 2000);
//     });
// }

// function login() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Login");
//             resolve();
//         }, 1000);
//     });
// }

// function logout() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Logout");
//             resolve();
//         }, 3000);
//     });
// }

// // registration().then( login).then(logout);

// async function show() {
//     await registration();
//     await login();
//     await logout();
// }

// show();



// function show(){
//     registration()
//     login()
//     logout()
// }

// show();


const my_api=fetch("https://fakestoreapi.com/products/");
my_api.then((res)=>res.json()).then((res)=>{
    console.log(res)
    res.forEach((item)=>{
        console.log(item)
    })
})
