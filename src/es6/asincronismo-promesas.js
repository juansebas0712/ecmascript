// Asincronismo.
const helloPromise = () => {
    return new Promise( (resolve, reject) => {

        if (true) {
            resolve('Hey!')
        }
        else {
            reject('Ups!!')
        }
    } )
}

helloPromise()
    .then( response => console.log(response))
    .then(console.log('hola')) // Se pueden encadenar muchos then()
    .catch(error => console.log(error))