let hamburger = document.querySelector('.hamburger');
let page_overlay = document.querySelector('#page-overlay');
let body_container = document.querySelector('#body-container');
let header_links = document.querySelectorAll('#menu-header-container .menu-item a');
let social_icons = document.querySelectorAll('.social-icon');
let isDesktop = window.matchMedia("(min-width: 1024px)").matches;
let isHeaderSmall = sessionStorage.getItem('headersmall') ? sessionStorage.getItem('headersmall') == 'true' : false;

let headerTransform = function() {
    // Transform header based on stored session storage
    console.log('headertransform: is Desktop? ' + isDesktop);
    console.log('headertransform: is hamburger active? ' + !isHeaderSmall);
    console.log('headertransform: is Header small? ' + isHeaderSmall);

    if ( isDesktop ) {
        console.log('Changed!!')
        if ( isHeaderSmall ) {
            body_container.classList.add('small');
            hamburger.classList.remove('is-active');
        } else {
            body_container.classList.remove('small');
            hamburger.classList.add('is-active');
        }
    } else {
        hamburger.classList.remove('is-active');
    }
};

document.addEventListener('DOMContentLoaded', headerTransform, false);
window.addEventListener('resize', headerTransform, false);

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');

    if ( isDesktop ) {
        isHeaderSmall = !isHeaderSmall;
        sessionStorage.setItem('headersmall', isHeaderSmall);
        console.log('hamburgerclick: is Desktop? ' + isDesktop);
        console.log('hamburgerclick: is hamburger active? ' + !isHeaderSmall);
        console.log('hamburgerclick: is Header small? ' + isHeaderSmall);
   
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