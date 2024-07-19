// Task 8

my_book={
    title:"Rich Dad Poor Dad",
    author:"Robert",
    year:1997
}

for (const key in my_book) {
    console.log(`${key}--->${my_book[key]}`);
}

//Task 9

console.log(Object.keys(my_book));
console.log(Object.values(my_book));