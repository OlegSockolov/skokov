$('document').ready(function(){

    $('.header__burger').click(function(){
        $('.header, .header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

});
