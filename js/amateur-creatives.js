var hamburger = document.querySelector('.hamburger');
var page_overlay = document.querySelector('#page-overlay');
var body_container = document.querySelector('#body-container');
var header_links = document.querySelectorAll('.menu-item a');
var social_icons = document.querySelectorAll('.social-icon');
var carousel = document.querySelector('#carousel-container');

var DesktopTransform = function() {
    isDesktop = window.matchMedia("(min-width: 1024px)")

    if ( !isDesktop.matches ) {
        console.log('This is not a desktop...');
        hamburger.classList.remove('is-active');
    }
}

document.addEventListener('DOMContentLoaded', DesktopTransform, false);
document.addEventListener('onorientationchange', DesktopTransform, false);

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

// for ( var i = 0; i < social_icons.length ; i++ ) {
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