//= modules/aos.js

function openAside() {
    const btn = document.querySelector('.dashboard-aside__opener');
    const aside = document.querySelector('.dashboard-aside');

    btn.addEventListener('click', () => {
        aside.classList.toggle('active');
    })
}

openAside();

function initAOS() {
    AOS.init({
        offset: 120, // offset (in px) from the original trigger point
        delay: 50, // values from 0 to 3000, with step 50ms
        duration: 900, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
    });
}

initAOS()