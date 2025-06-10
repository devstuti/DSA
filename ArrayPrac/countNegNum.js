// write a function that returns the number of negative numbers in an array;
let arr = [-1, -2, 0, 10, -8, 30, -5];

function countNegativeNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++
        }
    }
    return count;
}

let result = countNegativeNumbers(arr);
console.log(result);