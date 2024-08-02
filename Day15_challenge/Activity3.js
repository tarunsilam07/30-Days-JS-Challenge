
// Task 5
function createFunction(index) {
    return function() {
        console.log(index);
    };
}

const functionsArray = [];

for (var i = 0; i < 5; i++) {
    functionsArray[i] = createFunction(i);
}


functionsArray[0](); 
functionsArray[1](); 
functionsArray[2](); 
functionsArray[3](); 
functionsArray[4](); 
