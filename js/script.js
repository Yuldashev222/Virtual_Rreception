const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".next_btn");
const prevBtnSecond = document.querySelector(".prev_1");
const nextBtnSecond = document.querySelector(".next_1");
const prevBtnThird = document.querySelector(".prev_2");

const organization = document.querySelector(".organization");
const organizationName = document.querySelectorAll(".organization__name");

const submitBtn = document.querySelector(".submit");

const progressText = document.querySelectorAll(".step .step__name");

const progressCheck = document.querySelectorAll(".step .check");

const bullet = document.querySelectorAll(".step .bullet");

let max = 3;
let current = 1;

firstNextBtn.addEventListener("click", function(){
  slidePage.style.marginLeft = "-25%";
  
  bullet[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});

nextBtnSecond.addEventListener("click", function(){
  slidePage.style.marginLeft = "-50%";

  bullet[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});

submitBtn.addEventListener("click", function(){

  bullet[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;

  setTimeout(function(){
    alert('Succesfully');
    location.reload();
  }, 800);
});

prevBtnSecond.addEventListener("click", function(){
  slidePage.style.marginLeft = "0%";

  bullet[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnThird.addEventListener("click", function(){
  slidePage.style.marginLeft = "-25%";

  bullet[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});