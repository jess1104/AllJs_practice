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

// (方法1)上面的LINK(Features,Operations,Testimonials)並且跳到對應的位置
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     // 不要用預設效果指定到對應位置
//     e.preventDefault();
//     // 抓到這個的Href
//     const id = this.getAttribute('href');
//     console.log(id);
//     // 做滾動致那個section的動作
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// (方法2)上面的LINK(Features,Operations,Testimonials)並且跳到對應的位置
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    // 做滾動致那個section的動作
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const h1 = document.querySelector('h1');

console.log(h1.childNodes);
console.log(h1.children);

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
// 抓到點點的容器
const dotContainer = document.querySelector('.dots');
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.3)';
// slider.style.overflow = 'visible';

// 這個是要與當下的index去作用
let curSlide = 0;
// 當點到底就不能再繼續translate
const maxSlide = slides.length;

// 創建點點
const createDots = function () {
  slides.forEach(function (s, i) {
    // 創建點點
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

// 指定黑點顯示
const activateDot = function (slide) {
  // 移除所有active
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
activateDot(0);

// 切換功能
const goToSlide = function (slide) {
  // 所有slides相連
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  ); // 0%,100%,200%,300%
};
goToSlide(0);

// 點擊下一張功能
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    return;
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};
// 點擊上一張功能
const preslide = function () {
  if (curSlide === 0) {
    return;
    // curSide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

// 點擊事件
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', preslide);
// keydown事件
document.addEventListener('keydown', function (e) {
  // console.log(e);
  e.key === 'ArrowLeft' && preslide();
  e.key === 'ArrowRight' && nextSlide();
});

// 點擊點點切換至對應圖片
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});
