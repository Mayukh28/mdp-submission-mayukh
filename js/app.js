// This is the js file for functionality of whole website
console.log("included");

// consts
const header = document.querySelector('#header');
const htext = document.querySelector('ul');
const scrldwn = document.querySelector('#scrollDown');
const burger = document.querySelector('#hamburger');

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY >= 221) {
    header.classList.add('head-scrolled');
    header.classList.remove('head-not-scrolled');
    burger.style.color = '#000000'

  } else if (window.scrollY < 221) {
    header.classList.remove("head-scrolled");
    console.log(document.querySelector("#scrldwn"))
    header.classList.add("head-not-scrolled");
      scrldwn.innerHTML = `
      <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
      `
  }
});
var dropdown = document.querySelector("#dropdown");

var hamburger = document.querySelector("#hamburger");
c = 1;
hamburger.addEventListener("click", () => {
  c
})
  // const number = prompt("Enter a number: ");
  
  //check if the number is even
  
//   if(c % 2 == 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
//   }
//   console.log(c);