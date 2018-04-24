"use strict";
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Tecnology"] = 2] = "Tecnology";
    Category[Category["History"] = 3] = "History";
    Category[Category["Fiction"] = 4] = "Fiction";
})(Category || (Category = {}));
function getBooks() {
    var books = [
        {
            id: 1,
            title: 'Caperucita roja',
            author: 'Los hermanos grimm',
            available: false,
            category: Category.History
        },
        {
            id: 2,
            title: 'Blanca nieves y los 7 enanitos',
            author: 'Los hermanos grimm',
            available: true,
            category: Category.Poetry
        },
        {
            id: 3,
            title: 'La bella durmiente',
            author: 'Los hermanos grimm',
            available: true,
            category: Category.Biography
        },
        {
            id: 4,
            title: 'El llano en llamas',
            author: 'Juan Rulfo',
            available: true,
            category: Category.Tecnology
        },
        {
            id: 5,
            title: '100 años de soledad',
            author: 'Gabriel Garcia Marquez',
            available: true,
            category: Category.Biography
        }
    ];
    return books;
}
function showAvailableBooks(books) {
    var numberOfBooks = books.length;
    var titleFirstBookAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var BOOK = books_1[_i];
        if (BOOK.available) {
            titleFirstBookAvailable = BOOK.title;
            break;
        }
    }
    console.log('Cantidad de libros en la biblioteca: ' + numberOfBooks);
    console.log('Titulo del primer libro disponible: ' + titleFirstBookAvailable);
}
var BOOKS = getBooks();
var book = {
    id: 6,
    title: 'TypeScript Avanzado',
    author: 'Juan Camilo Perez',
    available: true,
    category: Category.Biography
};
showAvailableBooks(BOOKS);
BOOKS.push(book);
function getTitleBooksByCategory(filterCategory) {
    var books = getBooks();
    //let titleBooks : string[] = [];
    var titleBooks = [];
    for (var _i = 0, books_2 = books; _i < books_2.length; _i++) {
        var book_1 = books_2[_i];
        if (book_1.category == filterCategory) {
            titleBooks.push(book_1.title);
        }
    }
    return titleBooks;
}
var titleBooks = getTitleBooksByCategory(Category.Biography);
console.log("Libros que pertenecen a la categoria: " + Category.Biography + " - " + Category[Category.Biography]);
for (var _i = 0, titleBooks_1 = titleBooks; _i < titleBooks_1.length; _i++) {
    var title = titleBooks_1[_i];
    console.log(title);
}
titleBooks.forEach(function (value, index, array) { return console.log(value); });
//forEach, map, filter
titleBooks.forEach(function (value, index, array) {
    console.log(index);
    console.log(value);
    console.log(array);
});
var books = titleBooks.filter(function (title) {
    return title.indexOf('7') != -1;
});
console.log(books);
//Conversiones de tipos de datos
/*
//de string a numero es con un + adelante
let number1 : number = +'0';
//Numero a String
let varchar : string = number1.toString();
//Numero a double
let boolean1 : boolean = new Boolean(number1).valueOf();
//Numero
let number2 : number = new Number('52').valueOf();
*/
//multiples tipos de datos
var mType;
mType = 'hola';
mType = 80;
if (typeof mType == 'string') {
}
else if (typeof mType == 'number') {
}
//array
var number1;
var number2;
//tuplas
var tupla;
tupla = ['anderson', 1];
tupla[2] = 30;
tupla[3] = 60;
tupla[4] = 'stiven';
