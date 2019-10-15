import Flickity from 'flickity';

if ( document.querySelector("#mobile .main-carousel") ) {
    let flkty = new Flickity('#mobile .main-carousel', {
        contain: true,
        prevNextButtons: false,
        imagesLoaded: true
    })
    // console.log('Flickity!');
} else {
    console.log('No flickity!');
}
