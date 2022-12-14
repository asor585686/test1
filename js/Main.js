import { DOM } from './index.mjs';
import { Home } from './Home.js';
import { First } from './First.js';
import { Second } from './Second.js';
import { Third } from './Third.js';
import { Fourth } from './Fourth.js';
import { Fifth } from './Fifth.js';


let width;
let svgs, sections;
let isMenuOpen = false;
let currentSection = -1;

let animations;

ready();

function ready() {
    initElements();
    initAnimations();

    addMobileMenuHandlers();
    addNavigationHandlers();
    addResizeHandlers();
    addAccordionHandlers();
    storeLanguageSelection();

    go(0);
}

function initElements() {
    svgs = document.querySelectorAll('svg');
    sections = DOM.query('main > section');

    // Init anim values
    sections.forEach((section, i) => {
        if (!i) return;
        section.css({ x: '100%' });
    });
}

function initAnimations() {
    animations = [Home, First, Second, Third, Fourth, Fifth].map((C) => new C());
}

function addMobileMenuHandlers() {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        if (!isMenuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });
}

function openMenu() {
    if (isMenuOpen) return;
    isMenuOpen = true;
    document.body.classList.add('menu-open');
}

function closeMenu() {
    if (!isMenuOpen) return;
    isMenuOpen = false;
    document.body.classList.remove('menu-open');
}

function addNavigationHandlers() {
    const homePrompt = document.querySelector('.home-prompt');
    const navButtons = document.querySelectorAll('nav button');
    const sectionHeaders = document.querySelectorAll('.section-header');

    homePrompt.addEventListener('click', () => go(0));
    navButtons.forEach((link, i) => link.addEventListener('click', () => go(i + 1)));
    sectionHeaders.forEach((link, i) => link.addEventListener('click', () => go(i + 1)));
}

function addResizeHandlers() {
    window.addEventListener('resize', resize);
    window.addEventListener('orientationchange', resize);
    resize();
}

function resize() {
    width = window.innerWidth;
    setTimeout(adjustSVGStroke, 100);
}

function adjustSVGStroke() {
    // To make the SVG stroke always render as 1px
    svgs.forEach((svg) => {
        const rect = svg.getBoundingClientRect();
        // 100 is initial svg width
        svg.style.strokeWidth = `${100 / rect.width}px`;
    });
}

function addAccordionHandlers() {
    const points = document.querySelectorAll('section .point');
    const toggles = document.querySelectorAll('section .point-toggle');
    toggles.forEach((toggle, i) => {
        toggle.addEventListener('click', () => {
            points[i].classList.toggle('is-active');
        });
    });
}

function storeLanguageSelection() {
    const langPrompts = document.querySelectorAll('.language-toggle a');
    langPrompts.forEach((prompt) => {
        prompt.addEventListener('click', (e) => {
            localStorage.setItem('language', prompt.dataset.lang);
        });
    });
}

function go(index) {
    closeMenu();

    // If already on section
    if (currentSection === index) return;

    if (currentSection > -1) {
        sections[currentSection].classList.remove('active');
        animations[currentSection].animateOut();
    }
    currentSection = index;
    sections[currentSection].classList.add('active');
    animations[currentSection].animateIn(width < 1025);

    // Slide in
    sections.forEach((section, i) => {
        if (!i) return;
        section.animate(width > 1024 ? 1000 : 0, { x: i <= index ? '0%' : '100%', ease: 'outQuint' });
    });

    // Readjust for those that were hidden
    adjustSVGStroke();

    // Reset scroll
    window.scrollTo(0, 0);
}

////# sourceMappingURL=Main.js