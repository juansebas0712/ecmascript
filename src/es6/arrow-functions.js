// Arrow functions
const names = [
    {
        name: 'Oscar',
        age: 32
    },
    {
        name: 'Juan',
        age: 28
    }
]

// Return implicito.
let listOfNames = names.map( item => console.log(item.name) );

// Con multiples parametros.
const listOfNames3 = (name, age, country) => {
    // code
}

// Con un solo parametro.
const listOfNames4 = name => {
    // code
}

// Return implicito.
const square = num => num * num;