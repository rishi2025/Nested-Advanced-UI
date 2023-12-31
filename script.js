'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const nav = document.querySelector('.navBar');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const section = document.querySelectorAll('.section');
const imgTargets = document.querySelectorAll('img[data-src]');
const dotContainer = document.querySelector('.dots');

const openModal = function () {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
};

const closeModal = function () {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
};

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();
});

const openPopUp = [document.querySelector('.openAccount'), document.querySelector('.register')];
const closePopUp = [document.querySelector('.modalClose'), document.querySelector('.modalSubmit'), overlay];
openPopUp.forEach(btn => btn.addEventListener('click', openModal));
closePopUp.forEach(btn => btn.addEventListener('click', closeModal))

const tabMenu = [...document.querySelector('.operationsTab').children];

document.querySelector('.operationsTab').addEventListener('click', function (e) {
    const clicked = e.target.closest('.operationButton');

    if (!clicked) return;

    tabMenu.forEach(t => t.classList.remove('activeButton'));
    clicked.classList.add('activeButton');

    const containerData = [...document.querySelector('.container').children];
    containerData.forEach(e => e.classList.add('inactiveContainer'));

    document.querySelector('.containerCircle').classList.remove('inactiveContainer');
    document.querySelector(`.containerData${clicked.dataset.tab}`).classList.remove('inactiveContainer');
});

document.querySelector('.modalSubmit').addEventListener('click', function (e) {
    e.preventDefault();
});

const setOpacity = function (e, opacity) {
    const active = e.target;
        const siblings = nav.querySelectorAll('.navItem');
        const logo = document.querySelector('.navLeft');
        const openAccount = document.querySelector('.openAccount');

        siblings.forEach(el => {
            if (el !== active)
                el.style.opacity = opacity;
        });

        logo.style.opacity = opacity;
        openAccount.style.opacity = opacity;
}

nav.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('navItem')) {
        setOpacity(e, 0.5);
    }
});

nav.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('navItem')) {
        setOpacity(e, 1);
    }
});

//Sticky navigation Bar
const stickyNav = function (entries) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting)
        nav.classList.add('navSticky');
    else
        nav.classList.remove('navSticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Ease in Components when scrolled to section
const revealSection = function(entries, observer) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting)
        return;

    entry.target.classList.remove('section');
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.05,
});

section.forEach(function (sec) {
    sectionObserver.observe(sec);
    sec.classList.add('section');
});

// Loading lazy Images
const loadImg = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting)
        return;

    //Replace src with data src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazyImg');
    });
    observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slides = document.querySelectorAll('.slides');
const leftSlide = document.querySelector('.leftSlide');
const rightSlide = document.querySelector('.rightSlide');
let currSlide = 0;
let maxSlides = slides.length;  

const goToSlide = function (currSlide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${(i - currSlide) * 100}%)`);
}

const activeDot = function (slide) {
    document.querySelectorAll('.dot').forEach(sl => sl.classList.remove('dotActive'));
    document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('dotActive');
};

const nextSlide = function () {
    currSlide = (currSlide === maxSlides - 1) ? 0 : currSlide + 1;
    goToSlide(currSlide);
    activeDot(currSlide);
}

const prevSlide = function () {
    currSlide = (currSlide === 0) ? maxSlides - 1 : currSlide - 1;
    goToSlide(currSlide);
    activeDot(currSlide);
}

rightSlide.addEventListener('click', nextSlide);
leftSlide.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
});

const createDots = function () {
    slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
        'beforeend',
        `<div class="dot" data-slide="${i}"></div>`
    )});
}

dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dot'))
    {
        const {slide} = e.target.dataset;
        goToSlide(slide);
        activeDot(slide);
    }
});

const init = function () {
    goToSlide(0);
    createDots();
    activeDot(0);
};

init();