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

function reduceFn(array, callback, initial) {}

function reduceRightFn(array, callback, initial){}

function everyFn(array, callback){}

function someFn(array, callback){}

function entriesFn(array){}