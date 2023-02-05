let arr = [11, 5, 3, 9, 7, 4, 2, 5, 9, 7];

function min(arr) {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[min]) min = i;
  }
  return arr[min];
}

console.log(min(arr));
