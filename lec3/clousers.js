function registration(callback) {
    setTimeout(() => {
        console.log("Registration completed");
        callback();
    }, 2000);
}

function login(callback) {
    setTimeout(() => {
        console.log("Login");
        callback();
    }, 1000);
}

function logout() {
    setTimeout(() => {
        console.log("Logout");
    }, 3000);
}
registration(() => login(logout));
// registration(() => {
//     login(() => {
//         logout();
//     });
// });