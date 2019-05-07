'use strict';

function guessTheNumber(){
    const randNumber = Math.round(Math.random()*10);
    
    const myNumber = prompt("Enter your number.");

    

    if(myNumber == randNumber){
        alert("You guessed the number!!!")
    }
    else{
        alert("You didn't guessed the number... The number was " + randNumber);
    }
}