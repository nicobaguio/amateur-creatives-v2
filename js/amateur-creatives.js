$('.hamburger').on('click', function(e) {
    $(this).toggleClass('is-active');
    $('#page-overlay').toggleClass('reveal');
})