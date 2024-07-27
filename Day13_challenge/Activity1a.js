// Activity1a.js

function add(num1, num2) {
    return num1 + num2;
}

const my_object = {
    name: "Tarun",
    id: 52,
    email: "tarun79767@gmail.com",
    valid(roll) {
        if (roll > 10) {
            return true;
        }
        return false;
    }
}


module.exports = {
    add,
    my_object
};
