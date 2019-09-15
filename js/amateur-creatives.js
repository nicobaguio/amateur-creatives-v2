$('.hamburger').on('click', function(e) {
    $(this).toggleClass('is-active');
    $('#page-overlay').toggleClass('reveal');
})

$('#page-overlay').on('scroll', function () {
    $('.menu-item a').each( function( a ) {
        a_hidden = $( this ).offset().top < 165 - $ ( this ).height();
        $( this ).toggleClass('disabled', a_hidden);
    })

})