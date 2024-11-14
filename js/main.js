// sticky navbar & toping---------------------
let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  let scroll_value = window.scrollY;
  if (scroll_value > 200) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

// left-social-link------------
let leftLink = document.querySelector(".left-canvas");
document.addEventListener("mousemove", function () {
  leftLink.style.marginLeft = "0px";
  setTimeout(() => {
    leftLink.style.marginLeft = "";
  }, 5000);
});

// searchbar------------
let searchBoxBtn = document.querySelector(".searchBox");
let searchArea = document.querySelector(".search-area");
let barclose = document.querySelector(".barclose");

searchBoxBtn.addEventListener("click", function () {
  searchArea.style.marginTop = "0vh";
});
barclose.addEventListener("click", function () {
  searchArea.style.marginTop = "-100vh";
});

// collection-animation----------------
document.addEventListener("DOMContentLoaded", function () {
  let newArr = [
    "./images/animate/sopImg01.jpg",
    "./images/animate/sopImg02.jpg",
    "./images/animate/sopImg03.jpg",
    "./images/animate/sopImg04.jpg",
    "./images/animate/sopImg05.jpg",
    "./images/animate/sopImg06.jpg",
    "./images/animate/sopImg07.jpg",
    "./images/animate/sopImg08.jpg",
    "./images/animate/sopImg11.jpg",
    "./images/animate/sopImg12.jpg",
    "./images/animate/sopImg13.jpg",
    "./images/animate/sopImg14.jpg",
    "./images/animate/sopImg15.jpg",
    "./images/animate/sopImg16.jpg",
    "./images/animate/sopImg17.jpg",
    "./images/animate/sopImg18.jpg",
  ];
  let boxes = document.querySelectorAll(".mainclass");

  // catch randome img src
  function getRandomBox() {
    return Math.floor(Math.random() * boxes.length);
  }

  // catch indivisual img src & add / remove active class
  function addClass() {
    boxes.forEach((box) => {
      setTimeout(() => {
        box.classList.remove("animationImg");
      }, 2000);
    });
    setTimeout(function () {
      let randomBoxIndex = getRandomBox();
      boxes[randomBoxIndex].classList.add("animationImg");
      addClass();
      changeImg();
    }, 2000);

    // img src change
    let activeImgclass = document.querySelector(".animationImg");
    function changeImg() {
      let ranIndex = Math.floor(Math.random() * newArr.length);
      let newImageSrc = newArr[ranIndex];
      // old vs new img src
      activeImgclass.src = newImageSrc;
    }
  }

  // animation two
  const boxes1 = document.querySelectorAll(".mainclass1");
  function getRandomBox1() {
    return Math.floor(Math.random() * boxes1.length);
  }
  function addClass2() {
    boxes1.forEach((box2) => {
      setTimeout(() => {
        box2.classList.remove("animationImg1");
      }, 2000);
    });
    setTimeout(function () {
      const randomBoxIndex = getRandomBox1();
      boxes1[randomBoxIndex].classList.add("animationImg1");
      addClass2();
      changeImg();
    }, 2000);
    // img src change
    let activeImgclass = document.querySelector(".animationImg1");
    function changeImg() {
      let ranIndex = Math.floor(Math.random() * newArr.length);
      let newImageSrc = newArr[ranIndex];
      activeImgclass.src = newImageSrc;
    }
  }
  addClass();
  addClass2();
});

// ========= Swiper ================
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  Infinity: true,
  coverflowEffect: {
    rotate: -20,
    stretch: 50,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

// articles card----------
var swiper = new Swiper(".mySwiper1", {
  effect: "cards",
  grabCursor: true,
});
