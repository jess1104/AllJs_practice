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
