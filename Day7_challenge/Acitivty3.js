
//Task 5
let library={
    name:"Ramanujan Library",
    books:[
        {
            title:"Rich Dad Poor Dad",
            author:"Robert",
            year:1997
        },
        {
            title:"To kill a MockingBird",
            author:"Harper lee",
            year:1960
        },
        {
            title:"The Lord of Rings",
            author:"John Ronald",
            year:1937
        }
    ]
}

console.log(library);

//Task 6

console.log(`The name of the Library is ${library.name}`);
library.books.forEach(book => {
    console.log(book.title);
});