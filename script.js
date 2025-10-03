const button = document.getElementById("button");
const counter = document.getElementById("counter");

let i = localStorage.getItem("counter") || 0;
counter.textContent = i;

button.addEventListener("click", () => {
  i++;
  counter.textContent = i;
  localStorage.setItem("counter", i);
});