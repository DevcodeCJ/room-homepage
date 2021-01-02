// Variables
const menuBtn = document.querySelector(".btn-menu");
const closeBtn = document.querySelector(".btn-close");
const nav = document.querySelector(".nav-ctn");
const imageSlides = document.querySelectorAll(".image-slide");
const content = document.querySelectorAll(".content");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let counter = 0;

// Functions
const displayMenu = () => {
  nav.classList.add("nav-ctn-display");
};

const hideMenu = () => {
  nav.classList.remove("nav-ctn-display");
};

const checkScroll = () => {
  const header = document.getElementById("header");
  if (window.scrollY > 300) {
    header.classList.add("header-overlay");
  } else {
    header.classList.remove("header-overlay");
  }
};

const carousel = () => {
  if (counter === -imageSlides.length) {
    counter = 0;
  }
  if (counter > 0) {
    counter = -imageSlides.length + 1;
  }
  content.forEach((item) => {
    item.style.transform = `translateX(${counter * 100}%)`;
  });
  imageSlides.forEach((slide) => {
    slide.style.transform = `translateX(${counter * 100}%)`;
  });
};

const backwardSlide = () => {
  counter++;
  carousel();
};

const forwardSlide = () => {
  counter--;
  carousel();
};

const checkWindowSize = () => {
  if (window.innerWidth >= 1024) {
    imageSlides[0].style.background =
      'url("./images/desktop-image-hero-1.jpg") no-repeat';
    imageSlides[1].style.background =
      'url("./images/desktop-image-hero-2.jpg") no-repeat';
    imageSlides[2].style.background =
      'url("./images/desktop-image-hero-3.jpg") no-repeat';
  } else {
    imageSlides[0].style.background =
      'url("./images/mobile-image-hero-1.jpg") no-repeat center';
    imageSlides[1].style.background =
      'url("./images/mobile-image-hero-2.jpg") no-repeat center';
    imageSlides[2].style.background =
      'url("./images/mobile-image-hero-3.jpg") no-repeat center';
  }
  imageSlides.forEach((slide) => {
    slide.style.backgroundSize = "cover";
  });
};

// Positioning Content and Slides
content.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});
imageSlides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// Events
menuBtn.addEventListener("click", displayMenu);

closeBtn.addEventListener("click", hideMenu);

window.addEventListener("scroll", checkScroll);

prevBtn.addEventListener("click", backwardSlide);

nextBtn.addEventListener("click", forwardSlide);

window.addEventListener("load", checkWindowSize);

window.addEventListener("resize", checkWindowSize);
