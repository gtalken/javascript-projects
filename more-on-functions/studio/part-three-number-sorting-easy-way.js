

//Sort each array in ascending order.

//Sort each array in decending order.
function sortArray(arr) {
    let sortedArray = []; 

    while (arr.length > 0) {
        let min = findMinimum(arr);
        sortedArray.push(min); 
        arr.splice(arr.indexOf(min), 1); 
    }

    return sortedArray;
}

function findMinimum(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let min = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

// Sample arrays for testing
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log(sortArray(nums1));
console.log(sortArray(nums2)); 
console.log(sortArray(nums3)); 
