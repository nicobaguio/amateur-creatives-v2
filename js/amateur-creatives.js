var hamburger = document.querySelector('.hamburger');
var page_overlay = document.querySelector('#page-overlay');
var top_container = document.querySelector('#top-container');
var header_container = document.querySelector('#header-container');
var header_links = document.querySelectorAll('.menu-item a');

var DesktopTransform = function() {
    isDesktop = window.matchMedia("(min-width: 1080px)")

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
        page_overlay.classList.toggle('reveal');
        top_container.classList.toggle('reveal');
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