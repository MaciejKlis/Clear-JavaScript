//Write  Promis methods by yourself

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'first is done');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'second is done');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'thrid is done');
})
const promise4 = 23;

const arrayOfPromises = [promise1, promise2, promise3, promise4]


//Promise.all
const promiseAll = (arrayOfPromise) => {
    return new Promise((resolve, reject) => {
        const arrayData = new Array(arrayOfPromises.length);
        let resolvedCounter = 0;

        arrayOfPromise.forEach( (promise, index) => {
            if(promise instanceof Promise) {
                promise.then((data)=>{
                    resolvedCounter++; 
                    arrayData[index] = data;

                    if(arrayOfPromise.length === resolvedCounter)
                        resolve(arrayData);            
                }).catch((data)=>{
                    reject(data)
                })
            } else {
                resolvedCounter++;
                arrayData[index] = promise;            
            }
        })
    })
}
// promiseAll(arrayOfPromises).then(data => console.log(data)).catch(data => console.log(data))
// Promise.all(arrayOfPromises).then(data => console.log(data)).catch(data => console.log(data))

//Promise.race
const promiseRace = (arrayOfPromise) => {
    return new Promise((resolve, reject)=>{
        arrayOfPromises.forEach(single => {
            if(single instanceof Promise){
                single
                    .then( data => resolve(data))
                    .catch( data => reject(data));
            } else {
                resolve(single);
            }
        })
    })
}

promiseRace(arrayOfPromises).then(data => console.log(data)).catch(data => console.log(data))
Promise.race(arrayOfPromises).then(data => console.log(data)).catch(data => console.log(data))

//New method :) 
//Promise.last
// const promiseLast = (arrayOfPromise) => {
//     return new Promise((resolve, reject)=>{
//         // ...
//     })
// }


//New method :) 
//Promise.ignoreErrors
// const promiseIgnoreErrors = (arrayOfPromise) => {
//     return new Promise((resolve, reject)=>{
//         // ...
//     })
// }
