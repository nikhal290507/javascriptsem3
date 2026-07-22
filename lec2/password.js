function createPassword(length) {
    let password = 12345;
    return {
        checkPassword(input){
            return input === password;
        },
        changePassword(new_password){
            password = new_password;
        }
    }
}

const user = createPassword();
console.log(user.checkPassword(12345)); 
user.changePassword(67890);
console.log(user.checkPassword(12345));
console.log(user.checkPassword(67890));