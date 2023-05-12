const mainNavWrapper = document.querySelector(".main-nav__wrapper");
const mainNavHeader = document.querySelector(".main-nav__header");
const mainNavList = document.querySelector(".main-nav__list");
const mainNavToggle = document.querySelector(".main-nav__toggle");
const introSloganCatalog = document.querySelector(".intro-catalog__slogan");
const controlCrop = document.querySelector(".control-crop");
const controlFill = document.querySelector(".control-fill");
const controlContrast = document.querySelector(".control-contrast");
const rangeCrop = document.querySelector(".range-crop");
const rangeFill = document.querySelector(".range-fill");
const rangeContrast = document.querySelector(".range-contrast");
const rangeWrapper = document.querySelectorAll(".catalog-post__range-wrapper");

/*  MAIN MENU  */
mainNavToggle.addEventListener("click", function(evt){
  evt.preventDefault();
  if(mainNavToggle.classList.contains("main-nav__toggle--closed")) {
    mainNavWrapper.classList.remove("main-nav__wrapper--closed");
    mainNavHeader.classList.remove("main-nav__header--closed");
    mainNavList.classList.remove("main-nav__list--closed");
    mainNavToggle.classList.remove("main-nav__toggle--closed");
    mainNavToggle.classList.add("main-nav__toggle--opened");
    introSloganCatalog.classList.remove("intro-catalog__slogan--closed");

  } else {
    mainNavWrapper.classList.add("main-nav__wrapper--closed");
    mainNavHeader.classList.add("main-nav__header--closed");
    mainNavList.classList.add("main-nav__list--closed");
    mainNavToggle.classList.remove("main-nav__toggle--opened");
    mainNavToggle.classList.add("main-nav__toggle--closed");
    introSloganCatalog.classList.add("intro-catalog__slogan--closed");

  };
});

/*  TABS  */
controlCrop.addEventListener("click", function(){
  if(!controlCrop.checked) {
    removeActive(rangeWrapper);
    rangeCrop.classList.add("catalog-post__range-wrapper--active");
  };
});

controlFill.addEventListener("click", function(){
  if(!controlFill.checked) {
    removeActive(rangeWrapper);
    rangeFill.classList.add("catalog-post__range-wrapper--active");
  };
});

controlContrast.addEventListener("click", function(){
  if(!controlContrast.checked) {
    removeActive(rangeWrapper);
    rangeContrast.classList.add("catalog-post__range-wrapper--active");
  };
});

function removeActive(el) {
  for(let i = 0; i < el.length; i++) {
    if(el[i].classList.contains("catalog-post__range-wrapper--active")) {
      el[i].classList.remove("catalog-post__range-wrapper--active");
    };
  };
};
