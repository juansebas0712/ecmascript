const promise = new Promise((resolve, reject) => reject('rejected') );
const promise2 = new Promise((resolve, reject) => resolve('resolve1') );
const promise3 = new Promise((resolve, reject) => resolve('resolve2') );

Promise.allSettled([promise, promise2, promise3])
    .then(response => console.log(response))