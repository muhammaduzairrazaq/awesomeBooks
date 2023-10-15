const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const s1 = document.querySelector('.section1');
const s2 = document.querySelector('.section2');
const s3 = document.querySelector('.section3');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// eslint-disable-next-line no-unused-vars
function showContent(c) {
  if (c === 'section1') {
    s1.classList.remove('display-content');
    s2.classList.add('display-content');
    s3.classList.add('display-content');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  } else if (c === 'section2') {
    s2.classList.remove('display-content');
    s1.classList.add('display-content');
    s3.classList.add('display-content');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  } else if (c === 'section3') {
    s3.classList.remove('display-content');
    s2.classList.add('display-content');
    s1.classList.add('display-content');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  }
}
