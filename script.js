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

let review_text = ['Всё очень понравилось! Цена себя оправдала, было очень интересно! Не знал, что Красноярск такой красивый город, приеду сюда ещё раз, надеюсь',
                    'Экскурсия была очень интересной! Всё так хорошо обьясняли и рассказывали! Даже дети не соскучались',
                    'Были в Столбах. Давно хотелось но времени не было. Всё не мог найти хороший тур, а тут попалось случайно и всё - решился, не пожалел'];
let user_pfps = ['img/User_1.png', 'img/User_2.png', 'img/User_3.png',];
let user_names = ['Велерий Малеков', 'Мария Белкина', 'Вася Уткин'];
let index = 0;               
$('#rewiev_btn_left').click(function(){
   index--;
   if(index < 0){
        index = 2;
   }
   $('#review > p').html(review_text[index]);
   $('#user img').attr('src', user_pfps[index]);
   $('#user p').html(user_names[index]);
})
$('#rewiev_btn_right').click(function(){
    index++;
    if(index > 2){
         index = 0;
    }
    $('#review > p').html(review_text[index]);
    $('#user img').attr('src', user_pfps[index]);
    $('#user p').html(user_names[index]);
 })

 $('.owl_review_wrapper').owlCarousel({
    center: true,
    items:2,
    loop: true,
    mouseDrag: true,
    margin: 20,
    responsive: {
        
        1599: {
            margin: 170,
        }
        
        
    }
});