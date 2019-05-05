'use strict';

const myNumberInput = document.querySelector('#Inputnumber > input');
var randNumber;
function getRandNum(){
    
    randNumber = Math.round(Math.random()*10);
}
function PerfectMatch(){
    const myNumber = parseFloat(myNumberInput.value);
    getRandNum();
    if(myNumber === randNumber){
        alert( "It is a perfect match! ");
    }
    else{
        alert("Try again... The number was: " + randNumber);
    }
}
function main(){
    
    myNumberInput.addEventListener('input', PerfectMatch);
    
}