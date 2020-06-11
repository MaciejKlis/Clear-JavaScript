//Write  Promis methods by yourself

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'first is done');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 00, 'second is done');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'thrid is done');
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
                promise
                    .then((data)=>{
                        resolvedCounter++; 
                        arrayData[index] = data;

                        if(arrayOfPromise.length === resolvedCounter)
                            resolve(arrayData);            
                    })
                    .catch((data)=>{
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

// promiseRace(arrayOfPromises).then(data => console.log(data)).catch(data => console.log(data))
// Promise.race(arrayOfPromises).then(data => console.log(data)).catch(data => console.log(data))

// New method :) 
// Promise.last
// Wait untill all promise are done and send value of last one
// In other case if in any promise is reject, then wait for all promise are done
// and send first one rejected
const promiseLast = (arrayOfPromise) => {
    return new Promise((resolve, reject)=>{
        let counterOfExecuted = 0;
        let failedPromise;

        arrayOfPromises.forEach((single, index) => {
            if(single instanceof Promise){
                single
                    .then(data => {
                        counterOfExecuted++;
                        if(counterOfExecuted === arrayOfPromise.length){
                            failedPromise === undefined ? resolve(data) : reject(failedPromise); 
                        }
                    })
                    .catch(data => {
                        counterOfExecuted++;
                        if( failedPromise === undefined ) failedPromise = data;
                        if( counterOfExecuted === arrayOfPromise.length ) reject(failedPromise);
                    })
            } else {
                counterOfExecuted++;
                if(counterOfExecuted === arrayOfPromise.length){
                    failedPromise === undefined ? resolve(data) : reject(failedPromise); 
                }
            }
        })
    })
}

// promiseLast(arrayOfPromises)
//     .then(data => console.log(data))
//     .catch(data => console.error(data))

// New method :) 
// Promise.ignoreErrors
// In this method we ignore errors, we return array only from
// resolved promises 

const promiseIgnoreErrors = (arrayOfPromise) => {
    return new Promise((resolve, reject) => {
        const arrayData = []
        let counterOfExecuted = 0;

        arrayOfPromise.forEach( (single, index) => {
            if(single instanceof Promise) {
                single
                    .then((data)=>{
                        counterOfExecuted++; 
                        arrayData.push(data)

                        if(arrayOfPromise.length === counterOfExecuted)
                            resolve(arrayData);            
                    })
                    .catch(()=>{
                        counterOfExecuted++;
                        if(arrayOfPromise.length === counterOfExecuted)
                            resolve(arrayData);
                    })
            } else {
                counterOfExecuted++;
                arrayData.push(single);
                if(arrayOfPromise.length === counterOfExecuted)
                    resolve(arrayData);            
            }
        })
    })
}

promiseIgnoreErrors(arrayOfPromises)
    .then((data)=>{
        console.log(data)
    })