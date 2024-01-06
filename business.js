'use strict';

const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseBOverlay = document.querySelector('[data-modal-overlay]');

const modalCloseFunc = function () { modal.classList.add('closed') }

modalCloseBOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close');

toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
});

const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
    const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }
    mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    });

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc);
}






const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav--link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')

}
window.addEventListener('scroll', blurHeader)

// const accordions = document.querySelectorAll("[data-accordion}");

// let lastActiveAccordion = accordions[0];

// const initAccordion = function (currentAccordion) {
//     const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");
//     const expandAccordion = function () {
//         if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
//             lastActiveAccordion.classList.remove("expanded");
//         }

//         currentAccordion.classList.toggle("expanded");

//         lastActiveAccordion = currentAccordion;
//     }

//     accordionBtn.addEventListener("click", expandAccordion);
// }


for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home--title`)
sr.reveal(`.home--description`, { delay: 500 })
