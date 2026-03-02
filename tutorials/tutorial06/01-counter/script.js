let count = 0;
const counterDisplay = document.querySelector('#counter');
const incrementBtn = document.querySelector('#incrementBtn');
const decrementBtn = document.querySelector('#decrementBtn');
const resetBtn = document.querySelector('#resetBtn');

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

function updateDisplay() {
  counterDisplay.textContent = count;
  
  // Use if/else to change color
  if (count > 0) {
    counterDisplay.style.color = '#4CAF50'; // green
  } else if (count < 0) {
    counterDisplay.style.color = '#f44336'; // red
  } else {
    counterDisplay.style.color = '#666'; // gray
  }
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

// Initialize display
updateDisplay();