let hamburger = document.querySelector('.hamburger');
let page_overlay = document.querySelector('#page-overlay');
let body_container = document.querySelector('#body-container');
let header_links = document.querySelectorAll('#menu-header-container .menu-item a');
let social_icons = document.querySelectorAll('.social-icon');
let isDesktop = window.matchMedia("(min-width: 1023px)");
let isHeaderSmall = sessionStorage.getItem('headersmall') ? sessionStorage.getItem('headersmall') : false;

let headerTransform = function() {
    let isDesktop = window.matchMedia("(min-width: 1024px)").matches

    if ( isDesktop ) {
        hamburger.classList.toggle('is-active', !isHeaderSmall);
        body_container.classList.toggle('small', isHeaderSmall);
    }
};

document.addEventListener('DOMContentLoaded', headerTransform);
window.addEventListener('resize', headerTransform, false);

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    isHeaderSmall = !isHeaderSmall;
    sessionStorage.setItem('headersmall', isHeaderSmall);
    console.log(isHeaderSmall);

    if ( isDesktop.matches ) {
        // console.log('Desktop...');
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