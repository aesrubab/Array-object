// Write a function that takes an array and returns a new array with the last item removed.

function removeLastItem(array) {
    return array.slice(0, -1);
}

let arr = [1, 2, 3, 4, 5];
console.log(removeLastItem(arr));

// Write a function that takes an array and returns the length of items it has.
function getArrayLength(array) {
    return array.length;
}
console.log(getArrayLength(arr))

// Write a function that takes an array and an item, returns the array with the item added to the
//end of array.

function addItemToEnd(array, item) {
    array.push(item); 
    return array;
}

console.log(addItemToEnd(arr,7))


// Write a function that takes an array and an item, returns the array with the item added to the
//beginning of array

function addItemToBeginning(array, item) {
    array.unshift(item); 
    return array;
}

console.log(addItemToBeginning(arr,9))


// Write a function that takes an array of words and returns a string of the words seperated by ,
function arrayToString(words) {
    return words.join(",");
}

//console.log(arrayToString(5)) //Error yeniden bax!!


// Write a function that takes an array and two indexes (start and end). Return an array
//consisting of items between the given indexes.

function getItemsBetweenIndexes(array, start, end) {
    return array.slice(start, end);
}

console.log(getItemsBetweenIndexes(arr,1,3))


//// Write a function that takes an array and an index, returns the item at given index
function getItemAtIndex(array, index) {
    return array[index];
}


console.log(getItemAtIndex(arr,2))


// Write a function that takes an array and an item, removes that item from the array without
//leaving undefined items, returns the new array 


function removeItemFromArray(array, item) {
    return array.filter(element => element !== item);
}

console.log(removeItemFromArray(arr, 3))


// Write a function objectToArray(obj) that converts an object to an array of key-value
//pairs.

function objectToArray(obj) {
    return Object.entries(obj);
}

const myObject = { name: 'Rubab', age: 21, city: 'Baki' };
console.log(objectToArray(myObject))


// Write a function that takes an array of objects and splits them to two groups, one that fulfill the
//condition in the callback function and one that does not.

function splitArrayByCondition(arr, callback) {
    const group1 = [];
    const group2 = [];
    
    arr.forEach(item => {
        if (callback(item)) {
            group1.push(item);
        } else {
            group2.push(item);
        }
    });
    
    return [group1, group2];
}
