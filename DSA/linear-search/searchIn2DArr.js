let arr = [
  [11, 25, 89],
  [71, 41, 34],
  [151, 155, 61],
];

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === target) return [i, j];
    }
  }
  return [-1, -1];
}

console.log(search(arr, 155));
