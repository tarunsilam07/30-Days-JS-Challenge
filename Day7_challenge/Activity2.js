//Task 3

my_book={
    title:"Rich Dad Poor Dad",
    author:"Robert",
    year:1997,
    print:function(){
        console.log(`The title of the book is ${my_book.title}`);
        console.log(`The author of the book is ${my_book.author}`);
        console.log(...my_book.title," ",...my_book.author);
    },
    update:function(newyear){
        my_book.year=newyear
        console.log("The updated year is ",my_book.year);
    }
}

my_book.print()

//Task 4
my_book.update(2004)