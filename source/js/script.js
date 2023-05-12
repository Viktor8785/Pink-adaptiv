/* Навигация */
const mainNavWrapper = document.querySelector(".main-nav__wrapper");
const mainNavHeader = document.querySelector(".main-nav__header");
const mainNavList = document.querySelector(".main-nav__list");
const mainNavToggle = document.querySelector(".main-nav__toggle");
const introWrapper = document.querySelector(".intro__wrapper");
const introImg = document.querySelector(".intro__img");
const introSlogan = document.querySelector(".intro__slogan");

const introImgForm = document.querySelector(".intro__img-form");

/* Слайдер reviews */
const reviewsBlockquote = document.querySelectorAll(".reviews__blockquote");
const reviewsPrev = document.querySelector(".reviews__prev");
const reviewsNext = document.querySelector(".reviews__next");
const sliderToggle = document.querySelectorAll(".slider__toggle");
let currentIndex = 0;

/* Слайдер price */
const mediaQuery = window.matchMedia('(max-width: 659px)');
const priceTh = document.querySelectorAll(".price__th");
const thHit = document.querySelector(".price__th-hit");
const priceTd = document.querySelectorAll(".price__td");
const priceTdBase = document.querySelectorAll(".price__td-base");
const priceTdStandart = document.querySelectorAll(".price__td-standart");
const priceTdAnlim = document.querySelectorAll(".price__td-anlim");
const sliderTogglePrice = document.querySelectorAll(".slider__toggle-price");
let currentIndexPrice = 0;

/* -------  Навигация  --------- */

mainNavToggle.addEventListener("click", function(evt){
  evt.preventDefault();
  if(mainNavToggle.classList.contains("main-nav__toggle--closed")) {
    mainNavWrapper.classList.remove("main-nav__wrapper--closed");
    mainNavHeader.classList.remove("main-nav__header--closed");
    mainNavList.classList.remove("main-nav__list--closed");
    mainNavToggle.classList.remove("main-nav__toggle--closed");
    mainNavToggle.classList.add("main-nav__toggle--opened");
    introWrapper.classList.remove("intro__wrapper--closed");
    introImg.classList.remove("intro__img--closed");
    introSlogan.classList.remove("intro__slogan--closed");

    introImgForm.classList.remove("intro__img-form--closed");
  } else {
    mainNavWrapper.classList.add("main-nav__wrapper--closed");
    mainNavHeader.classList.add("main-nav__header--closed");
    mainNavList.classList.add("main-nav__list--closed");
    mainNavToggle.classList.remove("main-nav__toggle--opened");
    mainNavToggle.classList.add("main-nav__toggle--closed");
    introWrapper.classList.add("intro__wrapper--closed");
    introImg.classList.add("intro__img--closed");
    introSlogan.classList.add("intro__slogan--closed");

    introImgForm.classList.add("intro__img-form--closed");
  };
});

/* -------  Слайдер reviews  -------- */

/* Кнопка НАЗАД */
reviewsPrev.addEventListener("click", function(evt){
  evt.preventDefault();
  reviewsBlockquote[currentIndex].classList.remove("reviews__blockquote--active");
  sliderToggle[currentIndex].classList.remove("slider__toggle--active");
  currentIndex--;
  if(currentIndex < 0) {
    currentIndex = reviewsBlockquote.length - 1;
  };
  reviewsBlockquote[currentIndex].classList.add("reviews__blockquote--active");
  sliderToggle[currentIndex].classList.add("slider__toggle--active");
});

/* Кнопка ВПЕРЕД */
reviewsNext.addEventListener("click", function(evt){
  evt.preventDefault();
  reviewsBlockquote[currentIndex].classList.remove("reviews__blockquote--active");
  sliderToggle[currentIndex].classList.remove("slider__toggle--active");
  currentIndex++;
  if(currentIndex >= reviewsBlockquote.length) {
    currentIndex = 0;
  };
  reviewsBlockquote[currentIndex].classList.add("reviews__blockquote--active");
  sliderToggle[currentIndex].classList.add("slider__toggle--active");
});

/* Точки слайдера reviewes*/
sliderToggle.forEach((dot, index) => {
  dot.addEventListener("click", function(evt){
    evt.preventDefault();
    reviewsBlockquote[currentIndex].classList.remove("reviews__blockquote--active");
    sliderToggle[currentIndex].classList.remove("slider__toggle--active");
    currentIndex = index;
    reviewsBlockquote[currentIndex].classList.add("reviews__blockquote--active");
    sliderToggle[currentIndex].classList.add("slider__toggle--active");
  });
});

/* -------  Слайдер price  -------- */

/* Точки слайдера */

function classRemove(td) {
  for(let i = 0; i < td.length; i++) {
    td[i].classList.remove("price__td--active");
  };
};

function classAdd(td) {
  for(let i = 0; i < td.length; i++) {
    td[i].classList.add("price__td--active");
  };
};

function classChange(func) {
  switch(currentIndexPrice) {
      default:
      case 0: {
        func(priceTdBase);
      };
      break;
      case 1: {
        func(priceTdStandart);
      };
      break;
      case 2: {
        func(priceTdAnlim);
      };
      break;
    };
};

function handleTabletChange(e) {
  if (e.matches) {
    anim();
  }
}

mediaQuery.addEventListener('change', handleTabletChange)
handleTabletChange(mediaQuery)

sliderTogglePrice.forEach((dot, index) => {
  dot.addEventListener("click", function(evt){
    evt.preventDefault();
    sliderTogglePrice[currentIndexPrice].classList.remove("slider__toggle--active");
    priceTh[currentIndexPrice].classList.remove("price__th--active");
    classChange(classRemove);
    classRemove(priceTd);
    currentIndexPrice = index;
    sliderTogglePrice[currentIndexPrice].classList.add("slider__toggle--active");
    priceTh[currentIndexPrice].classList.add("price__th--active");
    classChange(classAdd);
    handleTabletChange(mediaQuery)
    classAdd(priceTd);
  });
});

/* -------- Анимация TD ------- */

function anim() {
  const shiftMax = 660;
  const transitionTime = 240;
  const steps = 10;
  const shiftTimeRatio = transitionTime / shiftMax;
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;
    let leftShift = shiftMax - timePassed / shiftTimeRatio;
    if (timePassed >= transitionTime) {
      clearInterval(timer);
      return;
    }
    draw(timePassed, leftShift);
  }, transitionTime / steps);

  function draw(timePassed, leftShift) {
    if(timePassed >= transitionTime - (transitionTime / steps + 1)) {
      leftShift = 0;
    }
    //thHit.style.left = leftShift + 'px';
    shiftLeft(priceTd, leftShift);
    shiftLeft(priceTh, leftShift);
    shiftLeft(priceTdBase, leftShift);
    shiftLeft(priceTdStandart, leftShift);
    shiftLeft(priceTdAnlim, leftShift);
  }

  function shiftLeft(td, leftShift) {
    for(let i = 0; i < td.length; i++) {
      td[i].style.left = leftShift + 'px';
    };
  };
};

