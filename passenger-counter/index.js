let count = 0;
function increment() {
  count++;
  document.getElementById("count-el").innerText = count;
}

function decrement() {
  if (count) {
    count--;
    document.getElementById("count-el").innerText = count;
  }
}

document.getElementById("increment-btn").addEventListener("click", increment);

document.getElementById("decrement-btn").addEventListener("click", decrement);
