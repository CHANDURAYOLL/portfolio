document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript file is loaded');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
