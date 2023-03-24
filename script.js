$('.owl-carousel').owlCarousel({
    center: true,
    items:3,
    loop:true,
    mouseDrag: true,
    margin: 20,
    responsive: {
        
        1599: {
            margin: 170,
        }
        
        
    }
});
$('.slider__btn-left').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
})
$('.slider__btn-right').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
})