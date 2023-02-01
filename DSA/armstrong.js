// 3 Digit Armstrong Numbers

function isArmstrong(num) {
  let original = num;
  let sum = 0;
  while (num > 0) {
    let rem = num % 10;
    sum += rem * rem * rem;
    num = Math.floor(num / 10);
  }

   return original === sum;
}

for(let i = 100; i<1000; i++){
    if(isArmstrong(i)) console.log(i);
}



