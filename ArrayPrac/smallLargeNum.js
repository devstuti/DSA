// write a function that returns largest number in array;

let arr = [1, 5, 42, 60, 47, 10, , 2, 35, -1, 0];

function findLargestNum(argArr) {
    // let largestNum = 0
    let largestNum = -Infinity // temp smallest number
    // infinity is a numeric value representing positive infinity.
    // -infinity is a numeric value representing negative infinity. 
    // -Infinity <-------(-3)--(-2)--(-1)--0---1---2---3-----> Infinity
    for (let i = 0; i < argArr.length; i++) {
        if (argArr[i] > largestNum) {
            largestNum = argArr[i]
        }
    }
    return largestNum;
}

let result = findLargestNum(arr);
console.log(result);

// write a function that returns smallest number in array;

let arrSmall = [1, 5, 42, 60, 47, 10, , -2, 35, -1, 0];

function findSmallestNum(argArr) {
    // let largestNum = 0
    let largestNum = Infinity // temp smallest number
    // infinity is a numeric value representing positive infinity.
    // -infinity is a numeric value representing negative infinity. 
    // -Infinity <-------(-3)--(-2)--(-1)--0---1---2---3-----> Infinity
    for (let i = 0; i < argArr.length; i++) {
        if (argArr[i] < largestNum) {
            largestNum = argArr[i]
        }
    }
    return largestNum;
}

let resultSmall = findSmallestNum(arrSmall);
console.log(resultSmall);