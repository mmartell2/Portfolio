const homeToggle = document.querySelector('.nav-home');
const aboutToggle = document.querySelector('.nav-about');
const projectsToggle = document.querySelector('.nav-projects');
const contactToggle = document.querySelector('.nav-contact');


homeToggle.addEventListener('click', () => {
    homeToggle.classList.add('active');
    aboutToggle.classList.remove('active');
    projectsToggle.classList.remove('active');
    contactToggle.classList.remove('active');
})

aboutToggle.addEventListener('click', () => {
    aboutToggle.classList.add('active');
    homeToggle.classList.remove('active');
    projectsToggle.classList.remove('active');
    contactToggle.classList.remove('active');
})

projectsToggle.addEventListener('click', () => {
    projectsToggle.classList.add('active');
    homeToggle.classList.remove('active');
    aboutToggle.classList.remove('active');
    contactToggle.classList.remove('active');
})

contactToggle.addEventListener('click', () => {
    contactToggle.classList.add('active');
    homeToggle.classList.remove('active');
    projectsToggle.classList.remove('active');
    aboutToggle.classList.remove('active');
})