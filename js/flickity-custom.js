// console.log('Flick it!')

var flickityActivate = function() {
    isDesktop = window.matchMedia("(min-width: 1024px)")

    if ( !isDesktop.matches ) {
        console.log('Mobile...')
        var flkty = new Flickity('.main-carousel', {
            contain: true,
            prevNextButtons: false,
            imagesLoaded: true
        })
    }    
}

document.addEventListener('DOMContentLoaded', flickityActivate, false);
document.addEventListener('onorientationchange', flickityActivate, false);