// Write array methods by yourself

// .map
// .filter
// .reduce
// .reduceRight
// .every
// .some
// .entries

/* Map */
function mapFn(array, mapCallback) {
    array.forEach( (element, i) => {
        array[i] = mapCallback(element);
    })
    return array;
}

function mapCallback(element) {
    return false;
}

// Map example //
const mapArray = [1,2,3,4,5];
const mapedArray = mapFn(mapArray, mapCallback);
//console.log(mapedArray);

/* Filter */
function filterFn(array, filterCallback) {
    const resultArray = [];
    array.forEach( element => {

        if( filterCallback(element) === true )
            resultArray.push(element);

    })

    return resultArray;
}

function filterCallback(element){
    return element >= 10;
}
// Filter example //
const filterArray = [12, 5, 8, 130, 44];
const filtredArray = filterFn(filterArray, filterCallback);
// console.log(fitredArray)

/* Reduce */
function reduceFn(array, reduceCallback, initial = undefined) {
    let accumulator = initial;

    if(accumulator === undefined) {
        accumulator = array[0];
        array.splice(0, 1);
    }

    array.forEach(element => {
        accumulator = reduceCallback(accumulator, element)
    })

    return accumulator;
}

function reduceCallback(accumulator, arrayElement) {
    return accumulator + arrayElement;
}
// Reduce example //
const reduceArray = [2, 3, 4, 5];
const initial = undefined;
const reduced = reduceFn(reduceArray, reduceCallback, initial);
// console.log(reduced);


/* Reduce right */
function reduceRightFn(array, reduceRightCallback, initial = undefined) {
    array = array.reverse();
    console.log(array)
    let accumulator = initial;

    if(accumulator === undefined) {
        accumulator = array[0];
        array.splice(0, 1);
    }

    array.forEach(element => {
        accumulator = reduceRightCallback(accumulator, element)
    })

    return accumulator;
}

function reduceRightCallback(accumulator, arrayElement) {
    return accumulator * arrayElement;
}

//Reduce right example
const reduceRightArray = [2, 3, 4, 5];
const initialRight = undefined;
const reducedRight = reduceFn(reduceRightArray, reduceRightCallback, initialRight);
// console.log(reducedRight);

/* Every */
function everyFn(array, everyCallback){
    let isCorrect = true
    array.forEach(element => {
        if(everyCallback(element) === false) {
            isCorrect = false;
            return;
        }
    })
    return isCorrect;
}

function everyCallback(element) {
    return element > 1 ;
}

//Every example
const everyArray = [3,4,5,6,7];
const everyAreBigEnought = everyFn(everyArray, everyCallback);
// console.log(everyAreBigEnought);

/* Some */
function someFn(array, someCallback){
    let isOneCorrect = false;

    array.forEach(element => {
        if(someCallback(element) === true) {
            isOneCorrect = true;
            return;
        }
    })

    return isOneCorrect;
}

function someCallback(element){
    return element > 2 ;
}

//Some example
const someArray = [1,0,1,2];
const isAnyoneCorrect = someFn(someArray, someCallback);
console.log(isAnyoneCorrect);

function entriesFn(array){}