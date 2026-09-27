const mybtn = document.getElementById("mybtn");
const mylabel1 = document.getElementById("mylabel1");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");
const mylabel4 = document.getElementById("mylabel4");
const mylabel5 = document.getElementById("mylabel5");

const min = 1;
const max = 100;

let randomnumber1;
let randomnumber2;
let randomnumber3;
let randomnumber4;
let randomnumber5;

mybtn.onclick = function(){
    randomnumber1 = Math.floor(Math.random()*max)+min;
    randomnumber2 = Math.floor(Math.random()*max)+min;
    randomnumber3 = Math.floor(Math.random()*max)+min;
    randomnumber4 = Math.floor(Math.random()*max)+min;
    randomnumber5 = Math.floor(Math.random()*max)+min;

    mylabel1.textContent = randomnumber1;
    mylabel2.textContent = randomnumber2;
    mylabel3.textContent = randomnumber3;
    mylabel4.textContent = randomnumber4;
    mylabel5.textContent = randomnumber5;
}