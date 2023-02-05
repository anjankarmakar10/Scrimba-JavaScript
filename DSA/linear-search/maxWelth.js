let accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];


function max(arr){
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
      }
      if (sum > ans) ans = sum;

    }

    return ans;
}

console.log(max(accounts));
