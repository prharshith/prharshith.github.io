/*----------------------------------------------------------------------------------------------
* Template Name      :  Kayden - Personal Bootstrap 5 HTML Portfolio Template                   |
* Author             :  themesuccess                                                            |
* Version            :  1.0.0                                                                   |
* Created            :  May 2021                                                                |
* Updated            :  May 2021                                                                |
* File Description   :  Custom functions file for Kayden template                               |
*-----------------------------------------------------------------------------------------------
*/

"use strict";

$('body').on("kaydenLoaded", function(){
    
    /*Header*/
    transparent_header();

    /*Masonry*/
    $('.grid').masonry({
        itemSelector: '.grid-item'
    });

    //AOS
    AOS.init({
        once: true
    });

    //Counter
    $('.tmcounter').each(function(){
        $(this).appear(function(){
            $(this).countTo();
        })
    });

    //Progress Bar
    $('.progress-bar-loadAnimation').each(function(){
        $(this).appear(function(){

            $(this).css({
                width: $(this).data('percent') + "%"
            })

        });
    });


    //Header
    $(window).on('scroll', function () {
        transparent_header()
    });

    //Particle

    if($('#particlebackground').length != 0)
    {
        var config = $('#particlebackground').data('config');
        particlesJS.load('particlebackground', config);

    }

    //Video Background

    if($('#kayden_video').length != 0)
    {
        $('#kayden_video').mb_YTPlayer();
    }

    //Ripple

    if( $('#kayden_background_ripple').length != 0 )
    {
        $('#kayden_background_ripple').ripples({
            resolution:500,
            dropRadius:25,
            perturbance:0.03
        });
    }

    // Popup Portfolio Section
    $('.portfolio-ajax').magnificPopup({
        type: "ajax",
        tLoading: '<div id="preloader"><div class="text-center w-100"><div class="loader"></div></div></div>',
        mainClass: "mfp-fade",
        closeBtnInside: false,
        midClick: true,
        gallery: {
            enabled: true
        },
        callbacks: {
            ajaxContentAdded: function(){
                $('.portfolio_owl_slider').owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    dots: true,
                    autoplayHoverPause: true,
                    autoplaySpeed: 1000,
                    navSpeed: 500,
                    dotsSpeed: 500,
                    dragEndSpeed: 500
                });              
                
            }
        }
    });

    $(".portfolio-image").magnificPopup({
        type:"image",
        closeOnContentClick: true,
        gallery:{
            enabled: true,
            navigateByImgClick:true,
            preload:[0,1]
        }
    });

    $(".iframe_popup").magnificPopup({
        type: "iframe",
        closeBtnInside: false,
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
          
                    id: 'v=',
          
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                     index: '//maps.google.',
                    src: '%id%&output=embed'
                }
                },
          
            srcAction: 'iframe_src',
        }
        
    });

    // OWL Carousel
    $('#client_slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        navSpeed: 500,
        dotsSpeed: 500,
        dragEndSpeed: 500
    });

    

    //Typed JS
    var typed = new Typed('.typed_text', {
        strings: $('.typed_text').data('options').split(","),
        typeSpeed: 90,
        backDelay: 2000,
        backSpeed: 40,
        loop: true
    });

    //ScrollSpy
    $('a.kayden_scrollspy[href^="#"]:not([href="#"]').on('click', function(event){

        var $anchor = $(this);
        var offset = parseInt($('body').data('offset'), 10); 
        $('html, body').stop().animate({
            
            scrollTop: ( $($anchor.attr('href')).offset().top ) - ( offset - 1 )

        }, 1500, 'easeInOutExpo');

        event.preventDefault();
        
    });

    // Return to top button

    $(window).scroll(function(){
        if($(this).scrollTop() >= 350) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });

    $('#return-to-top').on('click', function() {
        event.preventDefault();
        $('body,html').animate({
            scrollTop : 0
        }, 1500, 'easeInOutExpo');
    });


});