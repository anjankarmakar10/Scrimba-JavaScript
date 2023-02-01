n = 112233;
let ans = 0;
while (n > 0) {
  let rem = n % 10;
  ans = ans * 10 + rem;
  n = Math.floor(n / 10);
}

console.log(ans);