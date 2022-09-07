const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('test error'))
    })
}

helloWorld()
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))
