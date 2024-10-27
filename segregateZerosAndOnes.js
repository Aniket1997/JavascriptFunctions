//input arr = [1, 1, 0, 1, 0, 0]
//output [ 0, 0, 0, 1, 1, 1 ]
function swap(arr, a, b) {
    // Swapping the values directly in the array using XOR
    arr[a] = arr[a] ^ arr[b]; // Step 1
    arr[b] = arr[a] ^ arr[b]; // Step 2
    arr[a] = arr[a] ^ arr[b]; // Step 3
}

function segregate(arr) {
    let start = 0;
    let end = arr.length - 1; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[start] !== arr[end] && arr[start] > arr[end]) {
            swap(arr, start, end);
            end--;
        }
        start++;
    }
    return arr;
}

const arr = [1, 1, 0, 1, 0, 0];
const output = segregate(arr);
console.log(output); 
