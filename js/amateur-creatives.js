var hamburger = document.querySelector('.hamburger');
var page_overlay = document.querySelector('#page-overlay');

hamburger.addEventListener('click', function() {
    console.log('Clicking event...')
    hamburger.classList.toggle('is-active');
    page_overlay.classList.toggle('reveal');
})