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
//console.log(`Libros que pertenecen a la categoria: ${Category.Biography} - ${Category[Category.Biography]}`);
for (const title of titleBooks) {
    //console.log(title);
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
//console.log(books);


function createLibrerian(name:string,  year: number, city: string) : void {
    console.log(`Nombre: ${name} - ciudad: ${city}`);
    if(year){
        console.log(`Año de nacimiento ${year}`);
    }
}

function createUser(name:string, city: string, year?: number) : void {
    console.log(`Nombre: ${name} - ciudad: ${city}`);
    if(year){
        console.log(`Año de nacimiento ${year}`);
    }
}

function createAdmin(name:string, city: string, year: number = 2000) : void {
    console.log(`Nombre: ${name} - ciudad: ${city}`);
    console.log(`Año de nacimiento ${year}`);
    
}

function fullName(name:string, ...restName:string[]): string{
    return `${name} ${restName.join(' ')}`;
}
createLibrerian('Anderson',1997,'Medellin');
createUser('Anderson','Medellin',1997);
createUser('Anderson','Medellin');
let fullNameAdmin = fullName('Anderson', 'Florez', 'Ruiz');
console.log(fullName);


function getTitlesBooks(author: string): string[];
function getTitlesBooks(available: boolean): string[];
//function getTitlesBooks(parameter: string|boolean): string[]
function getTitlesBooks(parameter: any): string[]{
    let titlesbooks : string[] = [];
    let books = getBooks();

    if(typeof parameter == 'string'){
        books.map((book) => {
            if(book.author == parameter){
                titleBooks.push(book.title);
            }
        });
    }
    if(typeof parameter == 'boolean'){
        books.map((book) => {
            if(book.available == parameter){
                titleBooks.push(book.title);
            }
        });
    }
    return titleBooks;
}

let myBooks : string[] = getTitlesBooks("los hermanos grimm");
let myAvilableBooks : string[] = getTitlesBooks(true);

console.log(myBooks);
console.log(myAvilableBooks);
