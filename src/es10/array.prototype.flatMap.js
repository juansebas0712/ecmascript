// Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value*2]))