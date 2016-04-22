(function($){

    "use strict"; // Start of use strict
    var stickyHeaderTop =0;
    if( $('.header .bz-main-mennu').length > 0){
     	stickyHeaderTop = $('.header .bz-main-mennu').offset().top;
    }

    /* ---------------------------------------------
     Owl carousel
     --------------------------------------------- */
    function init_carousel(){
        $('.owl-carousel').each(function(){
          var config = $(this).data();
          config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
          var animateOut = $(this).data('animateout');
          var animateIn = $(this).data('animatein');
          if(typeof animateOut != 'undefined' ){
            config.animateOut = animateOut;
          }
          if(typeof animateIn != 'undefined' ){
            config.animateIn = animateIn;
          }
          var owl = $(this);
          owl.owlCarousel(config);
        });
    }
    /* ---------------------------------------------
     MENU REPONSIIVE
     --------------------------------------------- */
     function init_menu_reposive(){
          var kt_is_mobile = (Modernizr.touch) ? true : false;
          if(kt_is_mobile === true){
            $(document).on('click', '.main-menu .menu-item-has-children > a', function(e){
              var licurrent = $(this).closest('li');
              var liItem = $('.main-menu .menu-item-has-children');
              if ( !licurrent.hasClass('show-submenu') ) {
                liItem.removeClass('show-submenu');
                licurrent.parents().each(function (){
                    if($(this).hasClass('menu-item-has-children')){
                     $(this).addClass('show-submenu');   
                    }
                      if($(this).hasClass('main-menu')){
                          return false;
                      }
                })
                licurrent.addClass('show-submenu');
                // Close all child submenu if parent submenu is closed
                if ( !licurrent.hasClass('show-submenu') ) {
                  licurrent.find('li').removeClass('show-submenu');
                  }
                  return false;
                  e.preventDefault();
              }else{
                var href = $this.attr('href');
                  if ( $.trim( href ) == '' || $.trim( href ) == '#' ) {
                      licurrent.toggleClass('show-submenu');
                  }
                  else{
                      window.location = href;
                  } 
              }
              // Close all child submenu if parent submenu is closed
                  if ( !licurrent.hasClass('show-submenu') ) {
                      //licurrent.find('li').removeClass('show-submenu');
                  }
                  e.stopPropagation();
          });
        $(document).on('click', function(e){
              var target = $( e.target );
              if ( !target.closest('.show-submenu').length || !target.closest('.navigation').length ) {
                  $('.show-submenu').removeClass('show-submenu');
              }
          }); 
          // On Desktop
          }else{
              $(document).on('mousemove','.main-menu .menu-item-has-children',function(){
                  $(this).addClass('show-submenu');
              })
              $(document).on('mouseout','.main-menu .menu-item-has-children',function(){
                  $(this).removeClass('show-submenu');
              })
          }
     }
     /*--------------------------------------------
     RESIZE MEGAMENU
     ---------------------------------------------*/
     function resize_megamenu(){
        var container_width = parseInt($('.container').width());
        if($('.header').hasClass('header-fullwidth')){
            $('.main-menu').find('.megamenu').css('width',container_width+'px');
        }
     }
     
     // Custom Button
     /*--------------------------------------------
     CUSTOM BUTTON
     ---------------------------------------------*/
     function custom_button(t){
        var border_width = parseInt(t.data('border_width'));
        var boder_color = t.data('boder_color');
        var bg = t.data('bg');
        var text_color = t.data('text_color');
        var width = parseInt(t.data('width'));
        if(typeof border_width != 'undefined' ){
            t.css('border-width',border_width);
        }
        if(typeof boder_color != 'undefined' ){
            t.css('border-color',boder_color);
        }
        if(typeof bg != 'undefined' ){
            t.css('background-color',bg);
        }
        if(typeof text_color != 'undefined' ){
            t.css('color',text_color);
        }
        if(typeof width != 'undefined' ){
            t.css('width',width);
        }
     }

     /*---------------------------------
     HEIGHT SECTION
     ----------------------------------*/ 
     function heightSection(){
        var widthDevice = parseInt($(window).width());
          $('.bz-section-service').each(function(){
            if (widthDevice > 991) {
                var bgImg = $(this).find('.service-image').data('background'),
                    heightContent = $(this).find('.service-content').outerHeight();
                $(this).find('.service-image').css({
                  "height":heightContent,
                  "background-image":"url("+bgImg+")"
                });
            }
            var bgContent = $(this).find('.service-content').data('background');
            $(this).find('.service-content').css({
                'background-image':'url('+bgContent+')'
              });

          });
          $('.bz-section-equal').each(function(){
              if (widthDevice > 991) {
                var bgLeft = $(this).find('.left-section').data('background'),
                    heightR = $(this).find('.right-section').outerHeight();
                $(this).find('.left-section').css({
                  "height":heightR,
                  "background-image":"url("+bgLeft+")"
                })
              }
          });
     }

     //Section equal 

    //HEIGHT LIST PROVIDE
    function bz_height_animate_column()
    {
      $('.bz-list-provide.provide-style1').each(function(index, elem){

        var $this = $(this);
        var $items = $this.find('.item-provide');
        var $max_height_item = $items.eq(0).outerHeight();
        $items.each(function(index, elem) {
          if ( $(elem).outerHeight() > $max_height_item) $max_height_item = $(elem).outerHeight();
        });

        $items.each(function(){
          $(this).css({'height' : $max_height_item});
        });
      });
    }
     
     /* ---------------------------------------------
     Height Full
     --------------------------------------------- */
    function js_height_full(){
        (function($){
            var heightoff = 0;
            // if($('#wpadminbar').length){
            //     heightoff = $('#wpadminbar').outerHeight();
            // }
            var heightSlide = $(window).outerHeight() - heightoff;
            $(".full-height").css("height",heightSlide);
            $(".min-fullheight").css("min-height",heightSlide);
        })(jQuery);
    }
    /* ---------------------------------------------
     POSITION SIDEBAR FOOTER
     --------------------------------------------- */
    function positionFootersidebar(){
          var height2 = parseInt($('.sidebar-menu .footer-sidebar').outerHeight()),
              heightWin = parseInt($(window).height()),
              height1 = (heightWin - height2 - 110 - 60 -100);
         $('.sidebar-menu .header-sidebar ').css('min-height',height1+'px')
    }
    function Scrollbar_header_sidebar(){
      //  Scrollbar
      if($('.sidebar-menu').length >0 ){
          $(".sidebar-menu").mCustomScrollbar();
      }
    }
   function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }

  // Sections backgrounds

  var itemslideHome = $(".item-homeslide");
  itemslideHome.each(function(index){

      if ($(this).attr("data-background")){
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
  });

    function parallaxInit() {
        testMobile = isMobile.any();
        if (testMobile == null)
        {

            $('.bg-parallax').each(function(){
                $(this).parallax('50%', 0.3);
            });
        }
        testMobile = isMobile.iOS()
    }
    //Mobile Detect
    var testMobile;
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    function changeLabel(state){
      $(".play-button").html(state != 1 ? "<i class='fa fa-pause'></i>" : "<i class='fa fa-play'></i>");
    }

    /* ---------------------------------------------
     Stick menu
     --------------------------------------------- */
     function bz_stick_menu(){
     	if($('.header').length >0){
     		var h = $(window).scrollTop();
	        var width = $(window).width();
	        if(width > 991){
	            if((h > stickyHeaderTop) ){
	                $('.header').addClass('stick');
	            }else{
	                $('.header').removeClass('stick');
	            }
	        }else{
	            $('.header').removeClass('stick');
	        }
	    }
     }
    /* ---------------------------------------------
     Scripts initialization
     --------------------------------------------- */
    $(window).load(function() {
        //BACKGROUND PRALLAX
        parallaxInit();
        // RESIZE MEGAMENU
        resize_megamenu();
        heightSection();
        bz_stick_menu();
        $('.provide-style2 .item-provide').each(function(){
          var widthItem = $(this).outerWidth();
          $(this).find('.top-box-ct').css('border-left-width',widthItem+'px')
        });

        $('.pricing-table-style3').each(function(){
          var widthItem = $(this).outerWidth()/2;
          $(this).find('.left-box').css('border-left-width',widthItem+'px');
          $(this).find('.right-box').css('border-right-width',widthItem+'px');
        });

        var widthW = $(window).width();
        var widthContent = $('.container').outerWidth();
        var paddingLeft = (widthW - widthContent)/2;
        $('.bz-section-equal .right-section').css("padding-right", paddingLeft);
    });


    //WINDOW RESIZE
    $(window).on("debouncedresize", function() {
        var widthW = $(window).width();
        var widthContent = $('.container').outerWidth();
        var paddingLeft = (widthW - widthContent)/2;
        $('.bz-section-equal .right-section').css("padding-right", paddingLeft);

        $('.pricing-table-style3').each(function(){
          var widthItem = $(this).outerWidth()/2;
          $(this).find('.left-box').css('border-left-width',widthItem+'px');
          $(this).find('.right-box').css('border-right-width',widthItem+'px');
        });

        heightSection();
    });
    /* ---------------------------------------------
     Scripts bind load
     --------------------------------------------- */
    $(window).bind('load', function () {

       //BACKGROUND PRALLAX
        parallaxInit();
        //FLEXSLIDE ABOUT
        $('.flexslider').flexslider({
          animation: "slide",
          controlNav: "thumbnails"
        });

        //VIDEO SCRIPT
        setTimeout( function() {
            $('#header_video').find('.mbYTP_wrapper').animate({opacity:1}, 500);
        }, 800 );
    });
    /* ---------------------------------------------
     Scripts resize
     --------------------------------------------- */
    $(window).on("resize", function() {
        // RESIZE MEGAMENU
        resize_megamenu();

        heightSection();
        js_height_full();
        //ANIMATE COLUMN
        bz_height_animate_column();
        positionFootersidebar();
        Scrollbar_header_sidebar();
        bz_stick_menu();
        
    });
    /* ---------------------------------------------
     Scripts scroll
     --------------------------------------------- */
    $(window).scroll(function(){
		bz_stick_menu();
		// Show hide scrolltop button
        if( $(window).scrollTop() == 0 ) {
            $('.scroll_top').stop(false,true).fadeOut(600);
        }else{
            $('.scroll_top').stop(false,true).fadeIn(600);
        }
    });
    /* ---------------------------------------------
     Scripts ready
     --------------------------------------------- */
    $(document).ready(function() {
        // OWL CAROUSEL
        init_carousel();

        //MENU REPONSIIVE
        init_menu_reposive();
        
        // RESIZE MEGAMENU
        resize_megamenu();

        // Section Service 
        heightSection();

        //Height full
        js_height_full();

        //ANIMATE COLUMN
        bz_height_animate_column();

        positionFootersidebar();
        Scrollbar_header_sidebar();
        bz_stick_menu();
        //FUNFACT
        $('.bz-funfact').each(function(){
          var count_element = $(this).find('.number').attr('data-number');
          if (count_element != '') {
            $(this).find('.number').countTo({
              from: 0,
              to: count_element,
              speed: 2500,
                  refreshInterval: 50,
            })
          };
        });
        
        // OPEN SEARCH FORM
        $(document).on('click','.bz-search-icon',function(){
            $('.popup-search').toggle();
            $('.popup-search').find('.input-search').focus();
            $('.header-container').css('opacity','0');
            return false;
        })
        
        // CLOSE FORM SEARCH
        $(document).on('click','*',function(e){
            var container = $(".popup-search");
            var element_click = $('.bz-search-icon');
            var close_popup = $('.popup-search .close-popup')
            if (!container.is(e.target) && container.has(e.target).length === 0 && !element_click.is(e.target) && element_click.has(e.target).length === 0 && !close_popup.is(e.target) && close_popup.has(e.target).length === 0 ){
                container.hide();
                $('.header-container').css('opacity','1');
            }
        })
        $(document).on('click','.popup-search .close-popup',function(){
            var container = $(".popup-search");
            container.hide();
            $('.header-container').css('opacity','1');
        })
        
        // PROGRESS BAR
        $(".bz-chart").each(function() {
          var size = $(this).attr('data-size'),
            barColor = $(this).attr('data-barColor'),
            trackColor = $(this).attr('data-trackColor'),
            lineWidth = $(this).attr('data-lineWidth');
              $(this).easyPieChart({
                  easing: 'easeInOutQuad',
                  barColor: barColor,
                  animate: 2000,
                  trackColor: trackColor,
                  lineWidth: lineWidth,
                  size: size,
                  scaleColor: false,
                  lineCap:'square',
                  onStep: function(from, to, percent) {
                      $(this.el).find('.chart-percent').text(Math.round(percent)+'%');
                  }
              });
            $(this).find('.info-chart').css("height",size+'px');
        });
        // TESTANIAL STYLE 5
        $('.testimonials-style5').each(function(){
          var owl = $(this).find('.testimonial-owl');
          owl.owlCarousel(
            {
                margin:0,
                autoplay:true,
                dots:false,
                loop:true,
                nav:false,
                smartSpeed:1000,
                navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsive : {
                // breakpoint from 0 up
                0 : {
                    items : 2
                },
                // breakpoint from 480 up
                480 : {
                    items : 2
                },
                // breakpoint from 768 up
                768 : {
                    items : 3
                },
                1000 : {
                    items : 5
                }
            }
            }
          );
          owl.trigger('next.owl.carousel');
          owl.on('changed.owl.carousel', function(event) {
              owl.find('.owl-item.active').removeClass('item-center');
              var caption = owl.find('.owl-item.active').first().next().find('.inner').html();
              var t = owl.closest('.testimonials-style5').find('.testimonial-info');
              var animated = t.data('animated');
              t.html(caption).addClass('animated '+animated).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                       $(this).removeClass('animated '+animated);
              });;
              setTimeout(function(){
                  owl.find('.owl-item.active').first().addClass('item-center');
              }, 100);
          })

        });
        // TESTANIAL STYLE 6
        $('.testimonials-style6').each(function(){
          var owl = $(this).find('.testimonial-owl');
          owl.owlCarousel(
            {
                margin:20,
                autoplay:true,
                dots:false,
                loop:true,
                items:5,
                nav:false,
                smartSpeed:1000,
                navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                nav:true
            }
          );
          owl.trigger('next.owl.carousel');
          owl.on('changed.owl.carousel', function(event) {
              owl.find('.owl-item.active').removeClass('item-center');
              var caption = owl.find('.owl-item.active').first().next().find('.inner').html();
              var t = owl.closest('.testimonials-style6').find('.testimonial-info');
              var animated = t.data('animated');
              t.html(caption).addClass('animated '+animated).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                       $(this).removeClass('animated '+animated);
              });;
              setTimeout(function(){
                  owl.find('.owl-item.active').first().nextAll().slice(1, 2).addClass('item-center');
              }, 100);
          })

        });
        // pricing Color
        $('.pricing-table').each(function(){
            var color = $(this).data('color');
            if(typeof color !== 'undefined'){
                $(this).find('.icon').css('background-color',color);
            }
        })

        //SKILL BAR
        $('.item-processbar').each(function(){
          var $heightSkill = $(this).attr('data-height'),
            $percentSkill = $(this).attr('data-percent'),
            $bgSkill = $(this).attr('data-bgskill'),
            $bgBar = $(this).attr('data-bgBar');

          $(this).find('.processbar-bg').css({
              "height":$heightSkill,
              "background-color":$bgBar

          });
          $(this).find('.processbar-width').animate({
              'width':$percentSkill+'%'
          },6000);
          if($bgSkill != ''){
             $(this).find('.processbar-width').css({
                'background-color':$bgSkill
              });
            };
        });
        
        // BUTTON COLOR
        $('.button-color').each(function(){
            var bg = $(this).data('bg');
            var color = $(this).data('color');
            $(this).css({backgroundColor:bg,color:color});
        })
        // Cutom Button
        $('.button-custom').each(function(){
            var t = $(this);
            custom_button(t);
        });
        // Custom button hover
        $(document).on('mouseover','.button-custom',function(){
            var border_hover_color = $(this).data('border_hover_color');
            var bghover = $(this).data('bghover');
            var text_color_hover = $(this).data('text_color_hover');
            
            if(typeof border_hover_color != 'undefined' ){
                $(this).css('border-color',border_hover_color);
            }
            if(typeof bghover != 'undefined' ){
                $(this).css('background-color',bghover);
            }
            if(typeof text_color_hover != 'undefined' ){
                $(this).css('color',text_color_hover);
            }
        })
        $(document).on('mouseout','.button-custom',function(){
            var t = $(this);
            custom_button(t);
        })
        
        //TAB
         $('.bz-horizontalTab').easyResponsiveTabs({
                    type: 'default',
                    width: 'auto',
                    fit: true,
                    animation: 'slide'
         });
         $('.bz-verticalTab').easyResponsiveTabs({
                type: 'vertical',
                fit: true
         });

         //ACORDION
        $(".bz-acordion").each(function() {
          var $this = $(this);
          var $tab_active = parseInt($this.attr('data-tab-active'));
          $(this).accordion({
            active:$tab_active,
            collapsible: true,
            icons: { 
              "header": "fa fa-caret-down", 
              "activeHeader": "fa fa-caret-up" }
          });
        });
        // ClOSE MESSAGE BOX
        $(document).on('click','.msg-box .box-close',function(){
            $(this).closest('.msg-box').remove();
        })

        //VIDEO LIGHTBOX
        if ( $('.bz-video-lightbox .link-lightbox').length ){
          $('.bz-video-lightbox .link-lightbox').simpleLightboxVideo();
        }
        // CATEGORY FILTER 
        $('.slider-range-price').each(function(){
            var min             = parseInt($(this).data('min'));
            var max             = parseInt($(this).data('max'));
            var unit            = $(this).data('unit');
            var value_min       = parseInt($(this).data('value-min'));
            var value_max       = parseInt($(this).data('value-max'));
            var label_reasult   = $(this).data('label-reasult');
            var t               = $(this);
            $( this ).slider({
              range: true,
              min: min,
              max: max,
              values: [ value_min, value_max ],
              slide: function( event, ui ) {
                var result = label_reasult +" "+ unit + ui.values[ 0 ] +' - '+ unit +ui.values[ 1 ];
                t.closest('.price_slider_wrapper').find('.amount-range-price').html(result);
              }
            });
        })

        //SELECT CHOSEN
        $("select").chosen();
        // Select single product
        $(document).on('click','.single-product-thumbnails span',function(){
            $(this).closest('.single-product-thumbnails').find('span').each(function(){
                $(this).removeClass('selected');
            });
            $(this).addClass('selected');
            var image_full = $(this).data('image_full');
            $(this).closest('.single-images').find('.main-image').attr('src',image_full);
            $(this).closest('.single-images').find('.popup-image').attr('href',image_full);
            
            return false;
        })

        // BLOG CAT COLOR
        if($('.blog-item.style2').length >0){
          $('.blog-item.style2').each(function(){
            var t = $(this).find('.post-cat');
            var color =  t.data('color');
            if( color !="undefined"){
               var rgb = hexToRgb(color);
               console.log(rgb);
               t.css('background-color','rgba('+ rgb.r +','+rgb.g+','+rgb.b+',0.8)');
            }
          })
        }

        jQuery(function(){
            'use strict';
            if( isMobile.any() ){
                $('.player.video-container').each(function(){
                    $(this).addClass('mobile-bg');
                    if( $(this).attr('data-background') ){
                        $(this).append('<div></div>');
                        $(this).find('div').css('background-image', 'url(' + $(this).attr('data-background') + ')' );
                    }
                });
            }else{
                $('.player').each(function(){
                    $(this).mb_YTPlayer();
                });
            }
        });

        //DATE TIME
        $('.datepicker').each(function(){
          $(this).datepicker();
        })

        //COUNT DOWN DATE
        $('.bz-countdown').each(function(){
          var _this = $(this);
          var _date = _this.attr('data-datecount');
          _this.countdown(_date, function(event) {
              var bz_day = event.strftime('%-D');
              var bz_hour = event.strftime('%-H');
              var bz_minute = event.strftime('%-M');
              var bz_second = event.strftime('%-S');
              _this.find('.day').html(bz_day);
              _this.find('.hour').html(bz_hour);
              _this.find('.minute').html(bz_minute);
              _this.find('.second').html(bz_second);

          });
        });

        //PLAY VIDEO
        $('.bz-video-bg').each(function(){
          var videoItem = $(this).find('.player')
           $(this).find('.play-button').on('click',function(){
              $(videoItem).YTPTogglePlay(changeLabel);
           })
        });
        
        $(document).on('click','.mobile-navigation',function(){
          $(this).closest('.bz-main-mennu').find('.main-menu').slideToggle();
        })
        $('.mobile-sidebar').on('click',function(){
              $('body').toggleClass('sidebar-active');
        });

        //POSITION CONTENT SLIDE
        if($('header').hasClass('header-trans')){
            var heightHeader = $('header').outerHeight() - 30;
            $('.content-slide').css('padding-top',heightHeader);
        }

        //LOCKBOOK SLIDE
        $('.bz-lookbook').owlCarousel({
            margin:30,
            loop:true,
            autoWidth:true,
            items:3,
            dots:true
        });        
        // Scroll top 
	    $(document).on('click','.scroll_top',function(){
	    	$('body,html').animate({scrollTop:0},400);
	    	return false;
	    });
    });

})(jQuery); // End of use strict