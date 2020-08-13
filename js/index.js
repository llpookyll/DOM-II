// Your code goes here
const funBusImg = document.querySelector('header img');

funBusImg.addEventListener('mouseenter', (e) => {
    e.stopPropagation();
    funBusImg.style.transform = 'scale(1.2)';
    funBusImg.style.transition = 'transform 1s';
});

funBusImg.addEventListener('mouseleave', (e) => {
    e.stopPropagation();
    funBusImg.style.transform = 'scale(1)';
});


const h2Titles = document.querySelectorAll('h2');

welcomeTitle = h2Titles[0];
letsGoTitle = h2Titles[1];
adventureTitle = h2Titles[2];
destinationTitle = h2Titles[3];

welcomeTitle.addEventListener('click', (e) => {
    e.stopPropagation();
    welcomeTitle.style.color = 'red';
});

letsGoTitle.addEventListener('click', (e) => {
    e.stopPropagation();
    letsGoTitle.style.color = 'orange';
});

adventureTitle.addEventListener('click', (e) => {
    e.stopPropagation();
    adventureTitle.style.color = 'yellow';
});

destinationTitle.addEventListener('click', (e) => {
    e.stopPropagation();
    destinationTitle.style.color = 'green';
});


const allText = document.querySelectorAll('p');

allText.forEach((el, index) => {
    el.addEventListener('auxclick', (e) => {
        e.stopPropagation();
        el.style.color = 'blue';
    });
});


const adventureImg = document.querySelector('.content-section img');

adventureImg.addEventListener('click', (e) => {
    e.stopPropagation();
    adventureImg.style.border = '5px dotted indigo';
});


const funImg = document.querySelector('.inverse-content img');

funImg.addEventListener('click', (e) => {
    e.stopPropagation();
    funImg.style.border = '5px dashed violet';
});