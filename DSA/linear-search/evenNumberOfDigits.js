let nums = [11, 125, 748, 1, -1258];

function isEven(num) {

  if (num < 0) num *= -1;

  if (num === 0) return 1;


  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count % 2 === 0;
}

function isEven2(num) {

  if (num < 0) num *= -1;
   let n = Math.floor(Math.log10(num) + 1);
   return n % 2 === 0;

}

function isEven3(num) {
  if (num < 0) num *= -1;
  num = num + ""
  return num.length % 2 === 0;
}






function evenDigits(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isEven3(arr[i])) count++;
  }
  return count;
}

 console.log(evenDigits(nums));
