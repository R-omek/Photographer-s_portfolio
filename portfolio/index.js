

console.log(
    "\n 1. Вёрстка соответствует макету. Ширина экрана 768px +48 \n 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n 3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22 \n");



let menuItem = document.querySelectorAll('.menu_item');
let menuBtn = document.querySelector('#menu_toggle');
let HTML = document.querySelector('html');

for (let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener('click', function(){
        menuBtn.checked = false;
        HTML.style.scrollBehavior = 'smooth';
    })
}

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
const switchBtn = document.querySelector('#switcher-of-theme');
const skills = document.querySelector('#skills');
const portfolio = document.querySelector('#portfolio');
const video = document.querySelector('#video');
const price = document.querySelector('#price');
const allText = document.querySelectorAll('.txt_color');

sunBtn.addEventListener('click', () => {
    if(switchBtn.checked){
        switchBtn.checked = false;
    }else{
        switchBtn.checked = true;
    }
    if(switchBtn.checked){
        skills.style.backgroundColor = '#ffffff';
        portfolio.style.backgroundColor = '#ffffff';
        video.style.backgroundColor = '#ffffff';
        price.style.backgroundColor = '#ffffff';
        for(let i = 0; i < allText.length; i ++){
            allText[i].style.color = '#BDAE82';
        }
    }else{
        skills.style.backgroundColor = '#000000';
        skills.style.color = '#ffffff';
        portfolio.style.backgroundColor = '#000000';
        portfolio.style.color = '#ffffff';
        video.style.backgroundColor = '#000000';
        video.style.color = '#ffffff'; 
        price.style.backgroundColor = '#000000';
        price.style.color = '#ffffff';
    }
     
});


const enBtn = document.querySelector('.en');
const ruBtn = document.querySelector('.ru');
const items = document.querySelectorAll('[data-i18]');
const ruKeys = Object.keys(i18Obj['ru']);
const enKeys = Object.keys(i18Obj['en']);

ruBtn.addEventListener('click', () => {
    ruBtn.classList.add('active_lan');
    enBtn.classList.remove("active_lan");
    items.forEach(item => {
        for(let i = 0; i < ruKeys.length; i++){
            if (item.getAttribute('data-i18') === ruKeys[i]){
                item.textContent = i18Obj["ru"][item.getAttribute('data-i18')];
            }
        }  
    });
});

enBtn.addEventListener('click', () => {
    enBtn.classList.add('active_lan');
    ruBtn.classList.remove("active_lan");
    items.forEach(item => {
        for(let i = 0; i < enKeys.length; i++){
            if (item.getAttribute('data-i18') === enKeys[i]){
                item.textContent = i18Obj["en"][item.getAttribute('data-i18')];
            }
        }  
    });
});
