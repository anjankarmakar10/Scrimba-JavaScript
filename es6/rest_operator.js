function add(...nums) {
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  console.log(`Total: ${total}`);
}

add(10, 20, 30);
