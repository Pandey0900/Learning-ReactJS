const firstBacket = document.querySelector(".First_Basket span");
const secondBacket = document.querySelector(".Second_Basket span");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

const totalApples = 10;

let secondBacketAppleCount = 0;
let firstBacketAppleCount = totalApples - secondBacketAppleCount;

firstBacket.innerText = firstBacketAppleCount;
secondBacket.innerText = secondBacketAppleCount;

leftArrow.addEventListener("click", function () {
  if (firstBacketAppleCount > 0) {
    firstBacketAppleCount--;
    firstBacket.innerText = firstBacketAppleCount;
    secondBacketAppleCount++;
    secondBacket.innerText = secondBacketAppleCount;
  }
});

rightArrow.addEventListener("click", function () {
  if (secondBacketAppleCount > 0) {
    firstBacketAppleCount++;
    firstBacket.innerText = firstBacketAppleCount;
    secondBacketAppleCount--;
    secondBacket.innerText = secondBacketAppleCount;
  }
});
