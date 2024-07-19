
//Task 7
my_book={
    title:"Rich Dad Poor Dad",
    author:"Robert",
    year:"1997",
    print:function(){
        console.log(...this.title," ",...this.year);
    }
}

my_book.print()
