const button = document.getElementById("button");
const counter = document.getElementById("counter");

let i = 0;

button.addEventListener("click", () => {
  i++;
  counter.textContent = i;
});