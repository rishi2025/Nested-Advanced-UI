'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const nav = document.querySelector('.navBar');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const section = document.querySelectorAll('.section');

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
const imgTargets = document.querySelectorAll('img[data-src]');

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