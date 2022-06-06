"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct Number '

// document.querySelector('.number').textContent = '23'
// document.querySelector('.score').textContent = '10'
// document.querySelector('.guess'). value =23
// console.log(document.querySelector('.guess').value)
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    //wen there is no input fom the user//
    document.querySelector(".message").textContent = "No Number 😒";
  } else if (guess === SecretNumber) {
    //to change the background color wen  win//
    document.querySelector(".message").textContent = "correct Number❤❤💃";
    document.querySelector(".number").textContent = SecretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = '30rem'
     highscore++
     document.querySelector('.highscore').textContent = highscore    
    //wen the guess is greater dan secret numberr
  } else if (guess > SecretNumber) {
    //to change the score
    if (score > 0) {
      document.querySelector(".message").textContent =
        "greater than secret number 😢😢";
      score--; //secret number decreses here
      document.querySelector(".score").textContent = score;
    } else {
      //to tell when u lost the game
      document.querySelector(".message").textContent = "you lost the game";
    }
  } else if (guess < SecretNumber) {
    //wen the number is higer than the secret number
    if (score > 0) {
      document.querySelector(".message").textContent = "less than number";
      score--; //to decrese the number
      document.querySelector(".score").textContent = score;
      //wen u lost the game
    } else {
      document.querySelector(".message").textContent = "you lost the game";
    }
  }
});

document.querySelector('.again').addEventListener('click', function(){
     score = 20
    SecretNumber = Math.trunc(Math.random() * 20) + 1
   document.querySelector('.message').textContent = 'start guessing...'
   document.querySelector('.score').textContent = score
   document.querySelector('.number').textContent = '?'
   document.querySelector('.guess').value = ''
   document.querySelector('body').style.backgroundColor = '#222'
   document.querySelector('.number').style.width = '15rem'

})
