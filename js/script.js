$(document).ready(function(){
    var menu = $('.t-nav-btn');
    const mobmenu =document.querySelector('.t-nav-menu');
    const links = document.querySelectorAll('.t-nav-links')
    var open = false;
    menu.click(function(){
        mobmenu.classList.toggle('t-nav-menu-toggle');

        links.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `linksopacity 0.5s ease forwards ${index / 7}s`;
            }
        });
        if(open){
            /* $('.t-navbar').css("background-color","black"); */
            menu.removeClass(' open');
            open = false;
        }else{
            /* $('.t-navbar').css("background-color","red"); */
            menu.addClass('open');
            open= true;
        }
    });
    /* $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('.t-navbar').css("background-color","rgb(0, 0, 0)");
        }else{
            $('.t-navbar').css("background-color","white");
        }
    }); */
    $('.t-drv-e-card-hover').css({'height': '46.7px'});
    $(window).resize(function(){
        var hoHeight = $('.t-drv-e-card-hover');
        var infHeight = $('.t-drv-e-card-inf').height();
        hoHeight.css({'height': infHeight +'px'});
    });
        slider = $('#autoWidth').lightSlider({
        item:5,
        loop:false,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:15,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });  
    $('.t-drv-e-btn-l').click(function(){
      slider.goToPrevSlide();
    });
    $('.t-drv-e-btn-r').click(function(){
      slider.goToNextSlide();
    });
});
