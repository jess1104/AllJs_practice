'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
///////////////////////////////////////

// lern more btn
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // s1的位置
  // console.log(s1coords);
  // 點擊下去的位置
  // console.log(e.target.getBoundingClientRect());
  console.log('Current scroll(x,y)', pageXOffset, pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // 滾動至下一章節
  // window.scrollTo(s1coords.left + pageXOffset, s1coords.top + pageYOffset);

  // smooth效果
  // window.scrollTo({
  //   left: s1coords.left + pageXOffset,
  //   top: s1coords.top + pageYOffset,
  //   behavior: 'smooth',
  // });

  // 超捷徑方法scrollIntoView
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// page navigation(nav bar)

document.querySelectorAll('.nav__link');

// lazy loading
// 抓到只有data-src的img
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg = function (entires, obserrver) {
  const [entry] = entires;
  // console.log(entry);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider 輪播
// 先抓到所有的圖
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.3)';
slider.style.overflow = 'visible';

// 這個是要與當下的index去作用
let curSide = 0;
// 當點到底就不能再繼續translate
const maxSlide = slides.length;
// 所有slides相連
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`)); // 0%,100%,200%,300%

// 點擊下一張
btnRight.addEventListener('click', function () {
  // 做一個判斷當等於最後一張要返回
  if (curSide === maxSlide - 1) {
    return;
    // curSide = 0;
  } else {
    curSide++;
  }
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSide)}%)`)
  ); // -100%,0%,100%,200%
});

// 點擊上一張
btnLeft.addEventListener('click', function () {
  if (curSide === 0) {
    return;
    // curSide = maxSlide - 1;
  } else {
    curSide--;
  }
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSide)}%)`)
  );
});
