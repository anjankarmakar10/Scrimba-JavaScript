function max(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]>arr[max]) max = i
  }
  return arr[max]
}

console.log(max([11,2,3]));