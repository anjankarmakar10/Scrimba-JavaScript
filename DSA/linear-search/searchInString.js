let name = "Anjan Karmakar";

function search(str, target) {
  let arr = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target.toLowerCase()) return true;
  }
  return false
}

console.log(search(name,"K"));