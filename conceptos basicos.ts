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
