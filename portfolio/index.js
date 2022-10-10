const BODY = document.querySelector('body')
const FOOTER = document.getElementById('footer')
let menuItem = document.querySelectorAll('.menu__item');
let menuBtn = document.querySelector('#menu_toggle');


const portfolioBtnWinter = document.querySelector('.portfolio-btn-winter');
const portfolioBtnSpring = document.querySelector('.portfolio-btn-spring');
const portfolioBtnSummer = document.querySelector('.portfolio-btn-summer');
const portfolioBtnAutumn = document.querySelector('.portfolio-btn-autumn');
const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioBtnWinter.addEventListener('click', () => {
    portfolioBtnWinter.classList.add('active');
    portfolioBtnSpring.classList.remove("active");
    portfolioBtnSummer.classList.remove("active");
    portfolioBtnAutumn.classList.remove("active");
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
});
portfolioBtnSpring.addEventListener('click', () => {
    portfolioBtnSpring.classList.add('active');
    portfolioBtnWinter.classList.remove("active");
    portfolioBtnSummer.classList.remove("active");
    portfolioBtnAutumn.classList.remove("active");
    portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
});
portfolioBtnSummer.addEventListener('click', () => {
    portfolioBtnSummer.classList.add('active');
    portfolioBtnWinter.classList.remove("active");
    portfolioBtnAutumn.classList.remove("active");
    portfolioBtnSpring.classList.remove("active");
    portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
});
portfolioBtnAutumn.addEventListener('click', () => {
    portfolioBtnAutumn.classList.add('active');
    portfolioBtnWinter.classList.remove("active");
    portfolioBtnSummer.classList.remove("active");
    portfolioBtnSpring.classList.remove("active");
    portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
});

const sunBtn = document.querySelector('.switch-theme');
const switchBtn = document.getElementById('switcher-of-theme');
const MENU_TOGGLE = document.getElementById('menu__toggle');
const skills = document.querySelector('#skills');
const portfolio = document.querySelector('#portfolio');
const video = document.querySelector('#video');
const price = document.querySelector('#price');
const allText = document.querySelectorAll('.txt_color');



sunBtn.addEventListener('click', () => {
    if(switchBtn.checked) {
        BODY.classList.add('white-bg')
        sunBtn.style.backgroundImage = 'url(assets/img/night-icon.png)'
    } else {
        BODY.classList.remove('white-bg')
        sunBtn.style.backgroundImage = 'url(assets/svg/carbon_sun.svg)'
    }
});

const hideMenuBox = () => {
    MENU_TOGGLE.checked = false
    console.log(switchBtn.checked)
}



