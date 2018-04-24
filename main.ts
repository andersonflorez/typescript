enum Category{
    Biography, Poetry, Tecnology, History, Fiction
}

function getBooks() : {id:number, title:string, author:string, available:boolean, category:Category }[]{
    let books = [
        {
            id: 1,
            title : 'Caperucita roja',
            author: 'Los hermanos grimm',
            available : false,
            category : Category.History
        },
        {
            id: 2,
            title : 'Blanca nieves y los 7 enanitos',
            author: 'Los hermanos grimm',
            available : true,
            category: Category.Poetry
        },
        {
            id: 3,
            title : 'La bella durmiente',
            author: 'Los hermanos grimm',
            available : true,
            category : Category.Biography
        },
        {
            id: 4,
            title : 'El llano en llamas',
            author: 'Juan Rulfo',
            available : true,
            category: Category.Tecnology
        },
        {
            id: 5,
            title : '100 años de soledad',
            author: 'Gabriel Garcia Marquez',
            available : true,
            category: Category.Biography
        }
    ];

    return books;
}

function showAvailableBooks(books: {id:number, title:string, author:string, available:boolean }[]) : void{
    let numberOfBooks : number = books.length;
    let titleFirstBookAvailable : string = '';

    for (const BOOK of books) {
        if(BOOK.available){
            titleFirstBookAvailable = BOOK.title;
            break;
        }
    }
    console.log('Cantidad de libros en la biblioteca: '+ numberOfBooks);
    console.log('Titulo del primer libro disponible: '+ titleFirstBookAvailable);
}

const BOOKS= getBooks();


let book = {
    id : 6,
    title : 'TypeScript Avanzado',
    author : 'Juan Camilo Perez',
    available : true,
    category: Category.Biography
}
showAvailableBooks(BOOKS);
BOOKS.push(book);

function getTitleBooksByCategory(filterCategory: Category) : Array<string>{
    let books = getBooks();
    //let titleBooks : string[] = [];
    let titleBooks = [];
    
    for (const book of books) {
        if(book.category == filterCategory){
            titleBooks.push(book.title);
        }
    }

    return titleBooks;
}


let titleBooks = getTitleBooksByCategory(Category.Biography);
console.log(`Libros que pertenecen a la categoria: ${Category.Biography} - ${Category[Category.Biography]}`);
for (const title of titleBooks) {
    console.log(title);
}

titleBooks.forEach((value,index,array)=>console.log(value));

//forEach, map, filter
titleBooks.forEach((value,index,array)=>{
    console.log(index);
    console.log(value);
    console.log(array);
});

let books = titleBooks.filter((title) => {
    return title.indexOf('7')!=-1;
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

let mType : string|number;

mType = 'hola';
mType = 80;

if(typeof mType == 'string'){
} 
else if(typeof mType == 'number'){
} 

//array
let number1 : number[];
let number2 : Array<number>;


//tuplas
let tupla: [string, number];

tupla = ['anderson', 1 ];
tupla[2] = 30;
tupla[3] = 60;
tupla[4] = 'stiven';
