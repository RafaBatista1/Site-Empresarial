$(function(){
    
    var delay= 3000;
    var curIndex = 0;
    var amt;

    initSlider();
    autoPlay();

    function initSlider(){
        amt = $('.info-autor').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;

        $('.info-autor').css('width', sizeBoxSingle+'%');
        $('.scrollWraper').css('width', sizeContainer+'%');

        for(var i = 0; i < amt; i++){
            if(i == 0)
                $('.slider-bullets').append('<span style="background-color: black;"></span>');
            else
            $('.slider-bullets').append('<span></span>');  
            
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt)
                curIndex = 0;

            goToSlider(curIndex);
        }, delay)
    }

    function goToSlider(curIndex){
        var offSetX = $('.info-autor').eq(curIndex).offset().left - $('.scrollWraper').offset().left;
        $('.slider-bullets p').css('background-color', 'rgb(200,200,200)');
        $('.slider-bullets p').eq(curIndex).css('background-color', 'black');
        $('.scrollEquipe').animate({'scrollLeft': offSetX});
    }

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft': 0});
    })

})