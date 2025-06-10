// write a function that searches for an element in an array and returns the index of tha element and if not present then return -1;

let arr1 = [4, 2, 0, 10, 8, 30];

function searchElementIndex(arr, num) {

    for (let i = 0; i < arr.length; i++){
        if (arr[i] == num) {
            return console.log(i);
        }
    }
    return console.log(-1)
}

searchElementIndex(arr1, 10);