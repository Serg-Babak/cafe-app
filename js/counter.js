const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");
const wraper = document.querySelector("#counter");

let counterValue = 0;
const increment = () =>{
    counterValue += 1;
    value.textContent = counterValue;
};
// const decrement = () =>{
//     counterValue -=1 ;
//     value.textContent = counterValue;
// };
// document.querySelector("[data-action='decrement']").onclick = function() {
//   if (counterValue > 1) {
//     value.textContent = --counterValue;
//   } 
// } 
const decrement = function() {
  if (counterValue > 0) {
    value.textContent = --counterValue;
  } 
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

// 
const incrBtn = document.querySelector('[data-action="increment1"]');
const decrBtn = document.querySelector('[data-action="decrement1"]');
const value1 = document.querySelector("#value1");
const wraper1 = document.querySelector("#counter1");

let counterValue1 = 0;
const increment1 = () =>{
    counterValue1 += 1;
    value1.textContent = counterValue1;
};
const decrement1 = function() {
  if (counterValue1 > 0) {
    value1.textContent = --counterValue1;
  } 
};

incrBtn.addEventListener('click', increment1);
decrBtn.addEventListener('click', decrement1);