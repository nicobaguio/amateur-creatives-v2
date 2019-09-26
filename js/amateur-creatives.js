let hamburger = document.querySelector('.hamburger');
let page_overlay = document.querySelector('#page-overlay');
let body_container = document.querySelector('#body-container');
let header_links = document.querySelectorAll('.menu-item a');
let social_icons = document.querySelectorAll('.social-icon');
let carousel = document.querySelector('#carousel-container');
let isDesktop = window.matchMedia("(min-width: 1023px)")

let DesktopTransform = function() {
    let isDesktop = window.matchMedia("(min-width: 1024px)").matches
    console.log(isDesktop);
    hamburger.classList.toggle('is-active', isDesktop);
};

document.addEventListener('DOMContentLoaded', DesktopTransform);
window.addEventListener('resize', DesktopTransform, false);

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');

    if ( isDesktop.matches ) {
        console.log('Desktop...');
        body_container.classList.toggle('small');
    } else {
        body_container.classList.toggle('reveal');
        document.querySelector('body').classList.toggle('disabled-scroll');
    }
})

page_overlay.addEventListener('scroll', function() {
    header_links.forEach( function(a) {
        rect = a.getBoundingClientRect();
        height = a.offsetHeight;
        offset = 165 - height;

        shouldBeHidden = rect.top < offset;

        a.classList.toggle('disabled', shouldBeHidden);
    })
});

// for ( let i = 0; i < social_icons.length ; i++ ) {
//     social_icons[i].addEventListener('mouseover', function() {
//         console.log('Hovered on: ' + i)
//     })    
// }

function hovered() {
    this.classList.toggle('hovered')
}

social_icons.forEach(function(icon) {
    icon.addEventListener('mouseenter', hovered);
    icon.addEventListener('mouseleave', hovered);
})