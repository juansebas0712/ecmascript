let person = {
    'name': 'Oscar',
    'age': 30,
    'country':'MX'
}

let {name, ...all} = person;

console.log(name, all)

const obj = {
    name: 'Oscar',
    age: 32,
}

const obj2 = {
    ...obj,
    country: 'MX'
}

console.log(obj2)