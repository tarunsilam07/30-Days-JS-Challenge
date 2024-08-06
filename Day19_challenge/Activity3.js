
// Task 5

let reg=/\((\d{3})\)\s(\d{3})-(\d{4})/;
let exp="The telephone number is (786) 123-3752";
let match=exp.match(reg);
if(match){
    console.log(match);
    const areacode=match[1];
    const officecode=match[2];
    const linenumber=match[3];
    console.log(`Areacode is: ${areacode} , officecode is: ${officecode} , linenumber is ${linenumber}`);  
}

// Task 6
const regex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

const email = "tarun79767@gmail.com";
const matches = email.match(regex);

if (matches) {
  console.log("Username:", matches[1]);
  console.log("Domain:", matches[2]);
} else {
  console.log("No match found.");
}

    