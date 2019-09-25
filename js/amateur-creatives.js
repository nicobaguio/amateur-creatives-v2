var hamburger = document.querySelector('.hamburger');
var page_overlay = document.querySelector('#page-overlay');
var header_container = document.querySelector('#header-container');
var header_links = document.querySelectorAll('.menu-item a');
var social_icons = document.querySelectorAll('.social-icon')

var DesktopTransform = function() {
    isDesktop = window.matchMedia("(min-width: 1024px)")

    if ( !isDesktop.matches ) {
        // console.log('This is a desktop...');
        hamburger.classList.remove('is-active');
    } else {
        // console.log("This isn't a desktop...")
    }
}

document.addEventListener('DOMContentLoaded', DesktopTransform, false);
document.addEventListener('onorientationchange', DesktopTransform, false);

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');

    if ( isDesktop.matches ) {
        console.log('Desktop...');
        header_container.classList.toggle('small');
    } else {
        header_container.classList.toggle('reveal');
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