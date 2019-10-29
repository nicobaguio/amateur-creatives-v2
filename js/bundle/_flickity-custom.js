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

// if ( document.querySelector(".shop-advertisement-page .gallery") ) {
//     let flkty = new Flickity('.shop-advertisement-page .gallery', {
//         contain: true,
//         prevNextButtons: true,
//         imagesLoaded: true
//     })
//     console.log('Flickity!');
// } else {
//     console.log('No flickity!');
// }