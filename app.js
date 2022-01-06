'use strict';

// global variables to be used
// buttons and counter text

const counter= document.querySelector('#count');
const btnDecrease=document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const btnIncrease=document.querySelector(".increase");

//Initialize the global count variable
let count=0;
//adding DOM event Listener to increase Button 
btnIncrease.addEventListener("click",()=>{
    count++;
    counter.innerHTML=count;
    
    colorChange();
}) ;

//adding DOM event Listener to decrease button
btnDecrease.addEventListener("click",()=>{
    count--;
    counter.innerHTML = count;
    colorChange();
});
//adding DOM event Listener to reset button
reset.addEventListener("click",()=>{
    count=0;
    counter.innerHTML=count;
    colorChange();

})

//adding style depending on Increase or Decrease

function colorChange(){
    if(count>0){
        counter.style.color="green"
    }else if(count<0){
        counter.style.color="red"
    }
    else{
        counter.style.color="black"
    }
}