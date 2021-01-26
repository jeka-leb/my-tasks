console.log('Heap sort');

function heapSort(arr) {
    let len = arr.length,
        end = len - 1;
    heapify(arr, len);
    while (end > 0) {
        swap(arr, end--, 0);
        siftDown(arr, 0, end);
    }

    return arr;
}

function heapify(arr, len) {
    let mid = Math.floor((len - 2) / 2);
    while (mid >= 0) {
        siftDown(arr, mid--, len - 1);
    }
}

function siftDown(arr, start, end) {
    let root = start,
        child;
    while (root * 2 + 1 <= end) {
        child = root * 2 + 1;
        if (child < end && arr[child] < arr[child + 1]) {
            ++child
        }
        if (arr[root] < arr[child]) {
            swap(arr, root, child);
            root = child;
        } else {

            return;
        }
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(heapSort([7, 5, 2, 4, 3, 9, 32, 55, 4])); //[2, 3, 4, 4, 5, 7, 9, 32, 55]
console.log(heapSort([9, 7, 5, 4, 3, 1])); //[1, 3, 4, 5, 7, 9]
console.log(heapSort([1, 2, 3, 4, 5, 6])); //[1, 2, 3, 4, 5, 6]