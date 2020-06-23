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
            $('.t-navbar').css("background-color","black");
            menu.removeClass(' open');
            open = false;
        }else{
            $('.t-navbar').css("background-color","red");
            menu.addClass('open');
            open= true;
        }
    });
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('.t-navbar').css("background-color","rgb(117, 28, 28)");
        }else{
            $('.t-navbar').css("background-color","rgb(26, 25, 25)");
        }
    });
})
