'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').innerContent = '😤Not a number';

  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width='30rem';


  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈Too high';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥You lost';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉Too low';
    score = score - 1;
  }
});
