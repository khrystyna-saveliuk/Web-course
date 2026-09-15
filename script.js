const button = document.getElementById('action-btn');
const counter = document.getElementById('counter');

let clicks = 0;

button.addEventListener('click', () => {
  clicks += 1;
  counter.textContent = clicks;
});
