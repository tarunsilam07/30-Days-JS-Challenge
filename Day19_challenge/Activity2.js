// Task 3

const text="Dhoni is The Greatest Finisher of all time ";
const reg=/\b[A-Z][a-z]*\b/g;
const cap=text.match(reg);
console.log(cap);

// Task 3
const exp="There have been over 1000 people gathering every 7 hrs since the last 73 days";
const regi=/\d+/g;
const num=exp.match(regi);
console.log(num);

