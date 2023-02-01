function reverse(arr) {
  let start = 0;
  let end = arr.length-1;
  while (start < end) {
    swap(arr, start, end);
    start ++;
    end --;
  }
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

let arr = [1,2,3,4,5]
reverse(arr)
console.log(arr);