// En ES6 se pueden asignar valores por defecto en los parametros de las funciones.

function newFunction(name = 'Oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
}

newFunction();
newFunction('Juan', 31, 'CO');

// Template literals 

let hello = 'Hello';
let world = 'World';
let epicPhrase = `${hello} ${world}`

console.log(epicPhrase)

// Multilinea en los strings
let lorem = `Esta es una frase larga pero larga largaaaaaaaaaaaaa 
    y esta es otra
    y otra y otra
`;

console.log(lorem);

// Destructuracion de elementos. Se pueden extraer elementos de un objeto.
let person = {
    'name': 'Oscar',
    'age': 30,
    'country':'MX'
}
let {name, age, country} = person;

console.log(name, age, country);

// Operador de propagacion
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

// Variables y constantes

let a = 'algo'; //let permite cambiar y es solo accesible en su contexto.
const b = 'b'; // No es posible cambiarlo porque es una constante.

// Asignacion de variables a objetos.
let name2 = 'Oscar';
let age2 = 32;

let obj2 = {name2, age2};
console.log(obj2);