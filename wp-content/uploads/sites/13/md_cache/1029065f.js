function pixflow_fitRowToHeight(){"use strict";var rowsInPage=$(".vc_row:not(.vc_inner)").length;$(".vc_row").each(function(){var flag=false,$this=$(this),contentHeight=$this.find(".wrap").height();if($this.hasClass("fit-to-height")){if(contentHeight>$(window).height()&&rowsInPage==1){$this.css({height:contentHeight+20})}else{if($(window).width()<1281&&$this.find("> .wrap").css("height").replace(/[^-\d\.]/g,"")*1>$(window).height()){flag=true}else{$this.css({height:$(window).height()})}}}})}window_resize_functions.pixflow_fitRowToHeight=[];document_ready_functions.pixflow_fitRowToHeight=[];function pixflow_rowTransitionalColor($row,firstColor,secondColor){"use strict";var $=jQuery,scrollPos=0,currentRow=$row,beginningColor=firstColor,endingColor=secondColor,percentScrolled,newRed,newGreen,newBlue,newColor;currentRow.css({"background-color":beginningColor});$(document).scroll(function(){var animationBeginPos=currentRow.offset().top,endPart=currentRow.outerHeight()<800?currentRow.outerHeight()/4:$(window).height(),animationEndPos=animationBeginPos+currentRow.outerHeight()-endPart;scrollPos=$(this).scrollTop();if(scrollPos>=animationBeginPos&&scrollPos<=animationEndPos){percentScrolled=(scrollPos-animationBeginPos)/(currentRow.outerHeight()-endPart);newRed=Math.abs(beginningColor.red()+(endingColor.red()-beginningColor.red())*percentScrolled);newGreen=Math.abs(beginningColor.green()+(endingColor.green()-beginningColor.green())*percentScrolled);newBlue=Math.abs(beginningColor.blue()+(endingColor.blue()-beginningColor.blue())*percentScrolled);newColor=new $.Color(newRed,newGreen,newBlue);currentRow.animate({backgroundColor:newColor},0)}else if(scrollPos>animationEndPos){currentRow.animate({backgroundColor:endingColor},0)}else if(scrollPos<animationBeginPos){currentRow.animate({backgroundColor:beginningColor},0)}})}function pixflow_rowParallax(){"use strict";if($(window).width()<=1280&&pixflow_isTouchDevice())return;$(".row-image").each(function(){var $this=$(this),isParallax=$this.attr("isParallax"),$dataSpeed=$this.parent().attr("data-speed");$(".row-image").each(function(){var $this=$(this),isParallax=$this.attr("isParallax");if(typeof isParallax!==typeof undefined&&isParallax!==false){}})})}window_load_functions.pixflow_rowParallax=[];responsive_functions.pixflow_rowParallax=[];function pixflow_btnSlide(e){if(e=="staticValue"){var f=$(".shortcode-btn"),m=f.find(".slide"),g=f.find(".slide.button-standard"),h=f.find(".slide.button-small"),k=f.find(".slide span"),n,i,d,j;m.each(function(){d=$(this),k=d.find("span");k.css({position:"relative",display:"table"});d.css({width:"auto"});if(d.hasClass("button-standard")){n=d.outerWidth();g.css({width:"52px"})}else{if(d.hasClass("button-small")){i=d.outerWidth();h.css("width","40px")}}k.css({position:"absolute",display:"table"});d.addClass("slide-transition");g.hover(function(){if(!d.hasClass("no-hover-slide")){$(this).css({width:n})}$(this).find("span").css({opacity:1,left:"52px"})},function(){$(this).css("width","52px");$(this).find("span").css({opacity:0,left:"25px"})});h.hover(function(){if(!d.hasClass("no-hover-slide")){$(this).css("width",i)}$(this).find("span").css({opacity:1,left:"40px"})},function(){$(this).css("width","40px");$(this).find("span").css({opacity:0,left:"17px"})})})}else{var f=$("#"+e),m=f.find(".slide"),g=f.find(".slide.button-standard"),h=f.find(".slide.button-small"),k=f.find(".slide span"),n,i,d,j;k.css({position:"relative",display:"inline-block"});m.css("width","inherit");d=$("."+e);if(d.hasClass("button-standard")){n=d.outerWidth(true);g.css("width","52px");if(d.hasClass("no-hover-slide")){h.css("max-width","52px")}}else{if(d.hasClass("button-small")){i=d.outerWidth(true);h.css("width","40px")}}k.css({position:"absolute",display:"table"});d.addClass("slide-transition");g.hover(function(){if(!d.hasClass("no-hover-slide")){$(d).css({width:n})}$(d).find("span").css({opacity:1,left:"52px"})},function(){$(d).css("width","52px");$(d).find("span").css({opacity:0,left:"25px"})});h.hover(function(){if(!d.hasClass("no-hover-slide")){$(this).css("width",i)}$(this).find("span").css({opacity:1,left:"40px"})},function(){$(this).css("width","40px");$(this).find("span").css({opacity:0,left:"17px"})})}var c=m.css("width"),b=f.find(".animation"),a=b.find("span"),l=b.find(".button-icon");if($(window).width()<1025){m.click(function(){if($(this).css("width")==c){$(this).trigger("mouseenter");return false}})}}function pixflow_load_btn_slide(){if($(".shortcode-btn .slide").length){pixflow_btnSlide("staticValue")}}window_load_functions.pixflow_load_btn_slide=[];function pixflow_title_slider(){"use strict";if(!$(".title-slider").length){return}$(".md-text-title").each(function(index,value){if($(this).find(".texts li").length<=1){$(this).removeData();return true}$(this).textillate({in:{effect:"fadeIn",delayScale:1.5,delay:65},out:{effect:"fadeOut",delayScale:1.5,delay:65},loop:true,type:"char",minDisplayTime:0,initialDelay:100});$(this).find("ul").css("display","block");var liHeight=0,tempVal=0;$(this).find("ul li").each(function(){liHeight=$(this).height();if(tempVal<liHeight){tempVal=liHeight}});$(this).find("ul").css("display","none");$(this).css("height",tempVal+"px")})}document_ready_functions.pixflow_title_slider=[];// @TODO : refactor
function pixflow_portfolioMultisize($portfolioIsotope, count) {
    "use strict";

    var $portfolio = $('.portfolio-multisize');
    if (!$portfolio.length) return;

    $portfolio.each(function () {
        var $this = $(this),
            $isotope = $this.find('.isotope'),
            $items = $this.find('.item'),
            padding = $this.attr('data-items-padding'),
            $filters = $this.find('.filter a'),
            col;


        col = pixflow_itemSize($this, $items, padding);
        //Isotope
        var scroll = $(window).scrollTop();

        if (typeof $isotope.data('isotope') != 'undefined') {
            $isotope.isotope('destroy');
        }
        $(window).scrollTop(scroll);
        if ($portfolioIsotope && $portfolioIsotope.length && $isotope[0] == $portfolioIsotope[0]) {
            var $newItems = $('<div></div>');
            for (var i = 1; i <= count; i++) {
                $newItems.append($isotope.find('.item:nth-last-child(1)'));
            }
            $newItems = $newItems.children();
            $newItems.remove()
        }

        // change isotope alignment in RTL mode

        if ( $portfolio.parents('html').attr('dir') === 'rtl') {
            $isotope.isotope({
                // options
                itemSelector: '.item',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: col
                },
                transitionDuration: '0.9s',
                isOriginLeft: false,
            });
        } else {
            $isotope.isotope({
                // options
                itemSelector: '.item',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: col
                },
            });
        }

        $isotope.append($newItems);
        $isotope.isotope('appended', $newItems);
        $(window).scrollTop(scroll);
        //Filter Click
        $filters.click(function (e) {
            e.preventDefault();
            var $link = $(this),
                selector = $link.attr('data-filter');

            $isotope.isotope({filter: selector});
            $filters.parent().siblings().removeClass('current');
            $link.parent().addClass('current');
            $('.layout-container').siblings('div').each(function () {
                if ($(this).height() > $('.layout-container').height()) {
                    $(this).css('height', $('.layout-container').height());
                }
            });
        });
        if ($(window).width() < 900) {
            $(this).find('.md-post-like').css('display', 'none');
            $('.overlay-background').click(function () {
                var $this = $(this);
                if ($this.css('opacity') == '0') {
                    $this.find('.md-post-like').css('display', 'inline');
                    $this.find('.md-post-like').click(function () {
                        $this.mouseleave();
                    })
                }
            });
            $('.overlay-background').mouseleave(function () {

                $(this).find('.md-post-like').css('display', 'none');
            })
        }

    });


}
window_load_functions.pixflow_portfolioMultisize = [];

function pixflow_load_portfolio_multisize(){
    //Fix Iphone/Ipad: fire resize when scrolling
    if($(window).width()!= windowWith) {
        windowWith=$(window).width();
        pixflow_portfolioMultisize();
    }
}
window_resize_functions.pixflow_load_portfolio_multisize = [];

// @TODO : refactor
function pixflow_itemSize($this, $items, padding) {
    'use strict';

    var $portfolio = $this.closest('.portfolio-multisize'),
        portfolioWidth = $this.width(),
        col = 0;

    if (portfolioWidth >= 1024 && portfolioWidth <= 1920) {
        col = 6;
    } else if (portfolioWidth > 1920) {
        col = 6;
    } else if (portfolioWidth < 1024 && portfolioWidth > 770) {
        col = 4;
    } else {
        col = 1;
    }

    col = Math.floor(portfolioWidth / col);
    var doublePadding = padding * 2,
        metaHeight = 0;

    if ($portfolio.hasClass('outside')) {
        metaHeight = 90;
    }

    $items.each(function () {

        var $item = $(this),
            $itemImage = $item.find('.item-image');
        if (portfolioWidth > 769) { //Normal styles

            if ($item.hasClass('thumbnail-large')) { //Thumbnail Large

                $item.css({
                    'width': Math.round(col * 2) + 'px',
                    'height': Math.round(col * 1.722) + metaHeight + 'px',
                    'padding': padding + 'px'
                });

                $itemImage.css({
                    'width': Math.round(col * 2 - doublePadding) + 'px',
                    'height': Math.round(col * 1.722 - doublePadding) + 'px'
                });

            } else if ($item.hasClass('thumbnail-medium')) { //Thumbnail Medium

                $item.css({
                    'width': Math.round(col * 2) + 'px',
                    'height': Math.round(col * 1.203) + metaHeight + 'px',
                    'padding': padding + 'px'
                });

                $itemImage.css({
                    'width': Math.round(col * 2 - doublePadding) + 'px',
                    'height': Math.round(col * 1.203 - doublePadding) + 'px'
                });

            } else { //Thumbnail small

                $item.css({
                    'width': col + 'px',
                    'height': Math.round(col * 1.203) + metaHeight + 'px',
                    'padding': padding + 'px'
                });

                $itemImage.css({
                    'width': col - doublePadding + 'px',
                    'height': Math.round(col * 1.203 - doublePadding) + 'px'
                });
            }
        } else { //Responsive styles
            $item.css({
                'width': col + 'px',
                'height': Math.round(col * .563) + metaHeight + 'px',
                'padding': 0
            });

            $itemImage.css({
                'width': col + 'px',
                'height': Math.round(col * .563) + 'px'
            });
        }
    });
    return col;
}
// @TODO : refactor
function pixflow_portfolioLoadMore() {
    "use strict";

    if (pixflow_detectPosition() != 'front-end') {
        return;
    }

    $('.loadmore-button').each(function () {

        var $this = $(this),
            portfolioID = $this.attr('data-portfolio-id'),
            $portfolio = $('.' + portfolioID),
            $portfolioContainer = $portfolio.find('.portfolio-container'),
            $BTN = $portfolio.find('a.button'),
            nextLink = $this.attr('data-nextLink'),
            loadMoreText = $this.attr('data-loadMoreText'),
            loadingText = $this.attr('data-loadingText'),
            noMorePostText = $this.attr('data-noMorePostText'),
            startPage = parseInt($this.attr('data-startPage')),
            nextPage = startPage + 1,
            max = parseInt($this.attr('data-maxPages')),
            isLoading = false;
        if (max < 2) {
            if (startPage > 1) {
                $BTN.find('span').html(noMorePostText);
                $BTN.fadeOut(3000);
            }
            return
        }

        //Replace links with load more button
        $BTN.find('span').html(loadMoreText);
        var $btn = $BTN,
            $btnText = $BTN.find('span');
        if (nextPage > max) {
            $btnText.html(noMorePostText);
            $BTN.fadeOut(3000);
        }

        $btn.click(function (event) {
            event.preventDefault();
            var scrollPosition = $(window).scrollTop();
            if (nextPage > max || isLoading)
                return;
            isLoading = true;
            var items = [];
            //Set loading text
            $btnText.html(loadingText);
            var $pageContainer = $('<div class="posts-page-' + nextPage + '"></div>');
            var $pagedNum = 'paged';
            nextLink = nextLink.replace(/\/page\/[0-9]+/, '/?' + $pagedNum + '=' + parseInt(nextPage));
            nextLink = nextLink.replace(/paged=[0-9]+/, $pagedNum + '=' + parseInt(nextPage));
            nextLink = nextLink.replace(/paged_[0-9]+=[0-9]+/, $pagedNum + '=' + parseInt(nextPage));
            var index = $('.portfolio-multisize').index($(this).closest('.portfolio-multisize'));
            $pageContainer.load(nextLink + ' .portfolio-container', function () {
                var count = 0;
                if ($portfolioContainer.hasClass($portfolioContainer.closest('.portfolio-multisize').attr('data-id') + 'fixed-height')) {
                    $portfolioContainer.removeClass($portfolioContainer.closest('.portfolio-multisize').attr('data-id') + 'fixed-height');
                }
                $pageContainer.find('.portfolio-container:eq(' + index + ')').find('.portfolio-item').each(function () {
                    var $item = $('<div></div>');
                    $item.attr('class', $(this).attr('class'));
                    $item.html($(this).html());
                    items.push($item);
                    count++
                });
                items = items.reverse();
                for (var i in items) {
                    $portfolioContainer.append(items[i]);
                }
                pixflow_portfolioMultisize($portfolioContainer, count);


                $pageContainer.remove();
                // Update page number and nextLink.
                nextPage++;
                if (/\/page\/[0-9]+/.test(nextLink)) {
                    nextLink = nextLink.replace(/\/page\/[0-9]+/, '/page/' + nextPage);
                } else {
                    nextLink = nextLink.replace(/paged1=[0-9]+/, 'paged=' + nextPage);
                }

                if (nextPage <= max) {
                    $btnText.html(loadMoreText);
                } else if (nextPage > max) {
                    $btnText.html(noMorePostText);
                    $btn.fadeOut(3000);
                }

                //call popup for new items
                pixflow_portfolioPopup();

                isLoading = false;
                var num = nextPage;
                num--;

                var $items = $('.portfolio-item');
                var $container = $('.portfolio-container');
                $(window).scrollTop(scrollPosition);

            });
            return false;
        });
    });

}
window_load_functions.pixflow_portfolioLoadMore = [];

// @TODO: refactor
function pixflow_portfolioPopup() {
    'use strict';

    $('body').on('click',".inside .item-wrap.portfolio-popup",function(e){
        e.preventDefault();
        var element= e.target || e.srcElement;
        if ((e.which != 2) && ($(window).width() >100)) {
            if (element.attributes.class.nodeValue.indexOf('icon') < 0) {
                $.magnificPopup.open({
                    items: {
                        src: $(this).find(".item-image").attr('data-src')
                    },
                    overflowY:'scroll',
                    type: 'image',
                    closeOnContentClick: false,
                    closeBtnInside: false,
                    mainClass: 'mfp-with-zoom mfp-img-mobile',
                    callbacks: {
                        beforeOpen: function () {
                        },
                        afterClose: function () {
                            $("html").css({'overflow-y': 'auto'});
                        },
                    }
                }, 0);
            }
        }
    });
    $('body').on('click', ".outside .item-image.portfolio-popup", function () {

        if (($(window).width() > 100)) {
            $.magnificPopup.open({
                items: {
                    src: $(this).attr('data-src')
                },
                overflowY:'scroll',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                callbacks: {
                    beforeOpen: function () {
                    },
                    afterClose: function () {
                        $("html").css({'overflow-y': 'auto'});
                    },
                }
            }, 0);
        }
    });

}
document_ready_functions.pixflow_portfolioPopup = [];function pixflow_imageBoxSlider(id,height){"use strict";var $=jQuery,$btnIdSlide=$("."+id),$imgSlider=$("#"+id);if($btnIdSlide.length)$btnIdSlide.attr("data-width","."+id);$imgSlider.find(".slides").css({height:height+"px"});$imgSlider.find(".slides").css({"max-height":$(window).height()});if(typeof $.flexslider=="function"){$imgSlider.flexslider({animation:$imgSlider.attr("data-effect"),slideshow:true,animationLoop:true,controlNav:false,easing:"swing",smoothHeight:false,startAt:0,slideshowSpeed:$imgSlider.attr("data-speed"),directionNav:false,touch:true,animationSpeed:1200})}}window_load_functions.pixflow_imageBoxSlider=[];function pixflow_textBox(){"use strict";$(".text-box").each(function(index,element){var $this=$(this),iconTimeline=new TimelineLite,titleTimeline=new TimelineLite,masterTimeline=new TimelineLite({paused:true});iconTimeline.to($this.find(".text-box-icon-holder"),.7,{"margin-top":"-25px","margin-bottom":"25px",ease:Expo.easeInOut}).to($this.find(".text-box-icon-holder"),.6,{"margin-top":"-20px","margin-bottom":"20px",ease:Expo.easeOut});titleTimeline.to($this.find(".text-box-title"),.7,{"margin-top":"2px","margin-bottom":"25px",ease:Expo.easeInOut}).to($this.find(".text-box-title"),.6,{"margin-top":"7px","margin-bottom":"20px",ease:Expo.easeOut});masterTimeline.add(iconTimeline).add(titleTimeline,.3).to($this.find(".text-box-description"),.4,{opacity:"1"},"-= 0.9");element.animation=masterTimeline});$(".text-box").hover(over,out);function over(){this.animation.play()}function out(){this.animation.reverse()}}document_ready_functions.pixflow_textBox=[];function pixflow_sliderCarousel($selector,autoPlay){"use strict";setTimeout(function(){$selector.not(".flickity-enabled").flickity({contain:true,initialIndex:1,autoPlay:autoPlay,prevNextButtons:false,percentPosition:false,wrapAround:true,pauseAutoPlayOnHover:false,selectedAttraction:.045,friction:.5})},100)}function pixflow_fixflickityheight(resized,element){"use strict";var timeout=resized?100:3e3;window.setTimeout(function(){if($(element).legnth<=0){return}var widthdif=parseInt($(window).width())-parseInt($("main #content").width());var extraheight=widthdif>200?320:200;if(parseInt($(window).width())<1281){extraheight+=100}var maxh=0;$(element).each(function(){var postcontenth=parseInt($(this).find(".post-content-container").height());var postdateh=parseInt($(this).find(".post-date ").height());if(maxh<postcontenth+postdateh){maxh=postcontenth+postdateh}$(this).height(maxh+extraheight)})},timeout)}function pixflow_blog_carousel_responsive(){$(".post-carousel-container").each(function(){pixflow_fixflickityheight(true,"#"+$(this).attr("id"))})}responsive_functions.pixflow_blog_carousel_responsive=[];function pixflow_iconBox(){"use strict";if(!$(".iconbox-side .icon-background").length)return;$(".iconbox-side").each(function(){if($(this).find(".icon-background").length){var containerWidth=$(this).find(".iconbox-side-container").outerWidth(true),iconWidth=$(this).find(".icon").width(),colWidth=$(this).parents('div[class *= "vc_col"]').width(),iconboxWidth=containerWidth+iconWidth+20;setTimeout(function(){if(iconboxWidth>colWidth){$(this).addClass("responsive")}else{$(this).removeClass("responsive")}},200)}})}document_ready_functions.pixflow_iconBox=[];window_resize_functions.pixflow_iconBox=[];function pixflow_imageBoxFancy(id,height){"use strict";var $=jQuery,$imgSlider=$("#"+id);$("#"+id+" .image-box-fancy-collapse").click(function(){$(this).closest(".image-box-fancy-desc").toggleClass("image-box-fancy-open");$(this).find("i").toggleClass("icon-minimize").toggleClass("icon-maximize")});if(height!="fit"){$imgSlider.find(".slides").css({height:height+"px"});$imgSlider.find(".slides").css({"max-height":$(window).height()})}else{$imgSlider.find(".slides").css({height:$imgSlider.closest(".vc_row").height()});$imgSlider.find(".slides").css({"min-height":"450px"});if(!isMobile()){$(window).resize(function(){$imgSlider.find(".slides").css({height:$imgSlider.closest(".vc_row").height()})})}$(window).load(function(){$imgSlider.find(".slides").css({height:$imgSlider.closest(".vc_row").height()})})}if(typeof $.flexslider=="function"){$imgSlider.flexslider({animation:$imgSlider.attr("data-effect"),slideshow:true,animationLoop:true,controlNav:false,easing:"swing",smoothHeight:false,startAt:0,slideshowSpeed:$imgSlider.attr("data-speed"),directionNav:false,touch:true,animationSpeed:1200})}}function pixflow_modernSubscribe(){if($(window).width()<=1025){return}$(".modern-subscribe").each(function(){var b=$(this),a=b.css("height");b.find(".subscribe-image").css("height",a)})}document_ready_functions.pixflow_modernSubscribe=[];function pixflow_doubleSlider(id,bg,fg,autoplay,duration){"use strict";function rgba(rgb){if(rgb.indexOf("rgba")!=-1)return rgb;if(rgb.indexOf("#")!=-1){var h=rgb.replace("#","");h=h.match(new RegExp("(.{"+h.length/3+"})","g"));for(var i=0;i<h.length;i++)h[i]=parseInt(h[i].length==1?h[i]+h[i]:h[i],16);h.push(".8");return"rgba("+h.join(",")+")"}rgb=rgb.replace(")",",.8)");rgb=rgb.replace("rgb","rgba");return rgb}if($(window).width()<=800){bg[0]=rgba(bg[0])}$("#"+id+" .double-slider-text-container").css("background-color",bg[0]);$("#"+id+" .double-slider-nav a").css("color",fg[0]);$("#"+id+" .double-slider-image-container").flexslider({animation:"fade",slideshow:autoplay,slideshowSpeed:duration,animationSpeed:600,touch:false});$("#"+id+" .double-slider-text-container").flexslider({animation:"slide",slideshow:autoplay,slideshowSpeed:duration,animationSpeed:600,useCSS:false,touch:false,before:function(slider){if($(window).width()<=800){bg[slider.animatingTo]=rgba(bg[slider.animatingTo])}$("#"+id+" .double-slider-text-container").css("background-color",bg[slider.animatingTo]);$("#"+id+" .double-slider-nav a").css("color",fg[slider.animatingTo]);if(slider.hasClass("double-slider-text-container")){var to=slider.direction=="next"&&slider.animatingTo==0?slider.count:slider.animatingTo;if(slider.currentSlide<to&&slider.direction=="next"){slider.slides.eq(slider.currentSlide).find(".double-slider-sub-title,.double-slider-title,.double-slider-description").css("transform","translateX(-200px)")}else{slider.slides.eq(slider.currentSlide).find(".double-slider-sub-title,.double-slider-title,.double-slider-description").css("transform","translateX(200px)")}slider.find(".slides").delay(200)}},after:function(slider){setTimeout(function(){slider.slides.find(".double-slider-sub-title,.double-slider-title,.double-slider-description").css("transform","")},100)}});$("#"+id+" .double-slider-prev").click(function(e){e.preventDefault();$(this).closest(".double-slider").find(".flex-direction-nav .flex-prev").click();return false});$("#"+id+" .double-slider-next").click(function(e){e.preventDefault();$(this).closest(".double-slider").find(".flex-direction-nav .flex-next").click();return false})}