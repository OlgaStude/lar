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

 $('form .btn').click(function(){
    if($('input[name="email"]').val() == '' || !$('input[name="email"]').val().match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)){
        $('input[name="email"]').css('border-color', 'red');
        if($('input[name="email"]').val() != ''){
            $('input[name="email"]').next().css('display', 'block');
        }
    }else{
        $('input[name="email"]').css('border-color', '#071434')
        $('input[name="email"]').next().css('display', 'none');
    }

    if($('input[name="name"]').val() == '' || !$('input[name="name"]').val().match(/^[a-zA-Z]+$/)){
        $('input[name="name"]').css('border-color', 'red')
        if($('input[name="name"]').val() != ''){
            $('input[name="name"]').next().css('display', 'block');
        }
    }else{
        $('input[name="name"]').css('border-color', '#071434')
        $('input[name="name"]').next().css('display', 'none');
    }

    if($('input[name="surname"]').val() == '' || !$('input[name="surname"]').val().match(/^[a-zA-Z]+$/)){
        $('input[name="surname"]').css('border-color', 'red')
        if($('input[name="surname"]').val() != ''){
            $('input[name="surname"]').next().css('display', 'block');
        }
    }else{
        $('input[name="surname"]').css('border-color', '#071434')
        $('input[name="surname"]').next().css('display', 'none');
    }

    if($('input[name="password"]').val() == '' || $('input[name="password"]').val().length < 8){
        $('input[name="password"]').css('border-color', 'red')
        if($('input[name="password"]').val() != ''){
            $('input[name="password"]').next().css('display', 'block');
        }
    }else{
        $('input[name="password"]').css('border-color', '#071434')
        $('input[name="password"]').next().css('display', 'none');
        if($('input[name="password_repeat"]').val() == '' || $('input[name="password"]').val() != ($('input[name="password_repeat"]').val())){
            $('input[name="password_repeat"]').css('border-color', 'red')
            if($('input[name="password_repeat"]').val() != ''){
                $('input[name="password_repeat"]').next().css('display', 'block');
            }
        }else{
            $('input[name="password_repeat"]').css('border-color', '#071434')
            $('input[name="password_repeat"]').next().css('display', 'none');
        }
    }

 })

 $('#gal_a').click(function(e){
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#gallery').position().top
    },700);
 })
 $('#t_a').click(function(e){
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#tours').position().top
    },1000)
 })
 $('#rev_a').click(function(e){
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#reviews').position().top
    },1300)
 })