function trim(e){return e.replace(/^\s*|\s*$/g,"")}function IsOfficialEmailCheck(e){var t=e.split("@")[1].toLowerCase();if("hotmail.com"==t||"gmail.com"==t)return!1;if("yahoo.co"==t)return!1;if("yahoo.com"==t)return!1;if("mailinator.com"==t)return!1;else if("gmail.co.in"==t)return!1;else if("aol.com"==t)return!1;else if("yandex.com"==t)return!1;else if("msn.com"==t)return!1;else if("gawab.com"==t)return!1;else if("inbox.com"==t)return!1;else if("gmx.com"==t)return!1;else if("rediffmail.com"==t)return!1;else if("in.com"==t)return!1;else if("live.com"==t)return!1;else if("hotmail.co.uk"==t)return!1;else if("hotmail.fr"==t)return!1;else if("yahoo.fr"==t)return!1;else if("wanadoo.fr"==t)return!1;else if("wanadoo.fr"==t)return!1;else if("comcast.net"==t)return!1;else if("yahoo.co.uk"==t)return!1;else if("yahoo.com.br"==t)return!1;else if("yahoo.co.in"==t)return!1;else if("rediffmail.com"==t)return!1;else if("free.fr"==t)return!1;else if("gmx.de"==t)return!1;else if("gmx.de"==t)return!1;else if("yandex.ru"==t)return!1;else if("ymail.com"==t)return!1;else if("libero.it"==t)return!1;else if("outlook.com"==t)return!1;else if("uol.com.br"==t)return!1;else if("bol.com.br"==t)return!1;else if("mail.ru"==t)return!1;else if("cox.net"==t)return!1;else if("hotmail.it"==t)return!1;else if("sbcglobal.net"==t)return!1;else if("sfr.fr"==t)return!1;else if("live.fr"==t)return!1;else if("verizon.net"==t)return!1;else if("live.co.uk"==t)return!1;else if("googlemail.com"==t)return!1;else if("yahoo.es"==t)return!1;else if("ig.com.br"==t)return!1;else if("live.nl"==t)return!1;else if("bigpond.com"==t)return!1;else if("terra.com.br"==t)return!1;else if("yahoo.it"==t)return!1;else if("neuf.fr"==t)return!1;else if("yahoo.de"==t)return!1;else if("live.com"==t)return!1;else if("yahoo.de"==t)return!1;else if("rocketmail.com"==t)return!1;else if("att.net"==t)return!1;else if("laposte.net"==t)return!1;else if("facebook.com"==t)return!1;else if("bellsouth.net"==t)return!1;else if("yahoo.in"==t)return!1;else if("hotmail.es"==t)return!1;else if("charter.net"==t)return!1;else if("yahoo.ca"==t)return!1;else if("yahoo.com.au"==t)return!1;else if("rambler.ru"==t)return!1;else if("hotmail.de"==t)return!1;else if("tiscali.it"==t)return!1;else if("shaw.ca"==t)return!1;else if("yahoo.co.jp"==t)return!1;else if("sky.com"==t)return!1;else if("earthlink.net"==t)return!1;else if("optonline.net"==t)return!1;else if("freenet.de"==t)return!1;else if("t-online.de"==t)return!1;else if("aliceadsl.fr"==t)return!1;else if("virgilio.it"==t)return!1;else if("home.nl"==t)return!1;else if("qq.com"==t)return!1;else if("telenet.be"==t)return!1;else if("me.com"==t)return!1;else if("yahoo.com.ar"==t)return!1;else if("tiscali.co.uk"==t)return!1;else if("yahoo.com.mx"==t)return!1;else if("gmx.net"==t)return!1;else if("mail.com"==t)return!1;else if("planet.nl"==t)return!1;else if("tin.it"==t)return!1;else if("live.it"==t)return!1;else if("ntlworld.com"==t)return!1;else if("arcor.de"==t)return!1;else if("yahoo.co.id"==t)return!1;else if("frontiernet.net"==t)return!1;else if("hetnet.nl"==t)return!1;else if("live.com.au"==t)return!1;else if("yahoo.com.sg"==t)return!1;else if("zonnet.nl"==t)return!1;else if("club-internet.fr"==t)return!1;else if("juno.com"==t)return!1;else if("optusnet.com.au"==t)return!1;else if("blueyonder.co.uk"==t)return!1;else if("bluewin.ch"==t)return!1;else if("skynet.be"==t)return!1;else if("sympatico.ca"==t)return!1;else if("windstream.net"==t)return!1;else if("mac.com"==t)return!1;else if("centurytel.net"==t)return!1;else if("chello.nl"==t)return!1;else if("live.ca"==t)return!1;else if("aim.com"==t)return!1;else if("bigpond.net.au"==t)return!1;else return!0}function validateEmail(e){return/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,10}$/.test(e)}function fnValidationContact(){return""==trim(document.contactus.name.value)?(alert("Please enter your name"),document.contactus.name.focus(),!1):""==trim(document.contactus.email.value)?(alert("Please enter your email"),document.contactus.email.focus(),!1):validateEmail(trim(document.contactus.email.value))?IsOfficialEmailCheck(trim(document.contactus.email.value))?""==trim(document.contactus.phone.value)?(alert("Please enter phone number"),document.contactus.phone.focus(),!1):""==trim(document.contactus.comments.value)?(alert("Please enter your requirement"),document.contactus.comments.focus(),!1):void 0:(alert("Please enter your business email address"),document.contactus.email.focus(),!1):(alert("Please enter valid email id"),document.contactus.email.focus(),!1)}function customPopup(){return""==trim(document.customPopupForm.name.value)?(alert("Please enter your name"),document.customPopupForm.name.focus(),!1):""==trim(document.customPopupForm.email.value)?(alert("Please enter your email"),document.customPopupForm.email.focus(),!1):validateEmail(trim(document.customPopupForm.email.value))?IsOfficialEmailCheck(trim(document.customPopupForm.email.value))?""==trim(document.customPopupForm.phone.value)?(alert("Please enter phone number"),document.customPopupForm.phone.focus(),!1):""==trim(document.customPopupForm.upload.value)?(alert("Please upload file"),document.customPopupForm.upload.focus(),!1):""==trim(document.customPopupForm.comments.value)?(alert("Please enter your requirement"),document.customPopupForm.comments.focus(),!1):void 0:(alert("Please enter your business email address"),document.customPopupForm.email.focus(),!1):(alert("Please enter valid email id"),document.customPopupForm.email.focus(),!1)}function fnValidationContactbottom(){return""==trim(document.contactbottom.name.value)?(alert("Please enter your name"),document.contactbottom.name.focus(),!1):""==trim(document.contactbottom.email.value)?(alert("Please enter your email"),document.contactbottom.email.focus(),!1):validateEmail(trim(document.contactbottom.email.value))?IsOfficialEmailCheck(trim(document.contactbottom.email.value))?""==trim(document.contactbottom.phone.value)?(alert("Please enter phone number"),document.contactbottom.phone.focus(),!1):""==trim(document.contactbottom.comments.value)?(alert("Please enter your requirement"),document.contactbottom.comments.focus(),!1):void 0:(alert("Please enter your business email address"),document.contactbottom.email.focus(),!1):(alert("Please enter valid email id"),document.contactbottom.email.focus(),!1)}!function(e){"use strict";if(e(window).on("load",function(){e("#preloader").length&&e("#preloader").delay(100).fadeOut("slow",function(){e(this).remove()})}),e(window).scroll(function(){e(this).scrollTop()>100?e(".back-to-top").fadeIn("slow"):e(".back-to-top").fadeOut("slow")}),e(".back-to-top").click(function(){return e("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1}),new WOW().init(),e(".nav-menu").superfish({animation:{opacity:"show"},speed:400}),e("#nav-menu-container").length){var t=e("#nav-menu-container").clone().prop({id:"mobile-nav"});t.find("> ul").attr({class:"",id:""}),e("body").append(t),e("body").prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'),e("body").append('<div id="mobile-body-overly"></div>'),e("#mobile-nav").find(".menu-has-children").prepend('<i class="fa fa-chevron-down"></i>'),e(document).on("click",".menu-has-children i",function(t){e(this).next().toggleClass("menu-item-active"),e(this).nextAll("ul").eq(0).slideToggle(),e(this).toggleClass("fa-chevron-up fa-chevron-down")}),e(document).on("click","#mobile-nav-toggle",function(t){e("body").toggleClass("mobile-nav-active"),e("#mobile-nav-toggle i").toggleClass("fa-times fa-bars"),e("#mobile-body-overly").toggle()}),e(document).click(function(t){var o=e("#mobile-nav, #mobile-nav-toggle");!o.is(t.target)&&0===o.has(t.target).length&&e("body").hasClass("mobile-nav-active")&&(e("body").removeClass("mobile-nav-active"),e("#mobile-nav-toggle i").toggleClass("fa-times fa-bars"),e("#mobile-body-overly").fadeOut())})}else e("#mobile-nav, #mobile-nav-toggle").length&&e("#mobile-nav, #mobile-nav-toggle").hide();e(window).scroll(function(){e(this).scrollTop()>100?(e("#header").addClass("header-scrolled"),e(".hs").addClass("head-space")):(e("#header").removeClass("header-scrolled"),e(".hs").removeClass("head-space"))}),e(window).scrollTop()>100&&e("#header").addClass("header-scrolled"),e(".nav-menu a, #mobile-nav a, .scrollto").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=e(this.hash);if(t.length){var o=0;return e("#header").length&&(o=e("#header").outerHeight(),e("#header").hasClass("header-scrolled")||(o-=20)),e("html, body").animate({scrollTop:t.offset().top-o},1500,"easeInOutExpo"),e(this).parents(".nav-menu").length&&(e(".nav-menu .menu-active").removeClass("menu-active"),e(this).closest("li").addClass("menu-active")),e("body").hasClass("mobile-nav-active")&&(e("body").removeClass("mobile-nav-active"),e("#mobile-nav-toggle i").toggleClass("fa-times fa-bars"),e("#mobile-body-overly").fadeOut()),!1}}});var o=e("section"),r=e(".nav-menu, #mobile-nav"),i=e("#header").outerHeight();e(window).on("scroll",function(){var t=e(this).scrollTop();o.each(function(){var o=e(this).offset().top-i,l=o+e(this).outerHeight();t>=o&&t<=l&&(r.find("li").removeClass("menu-active menu-item-active"),r.find('a[href="#'+e(this).attr("id")+'"]').parent("li").addClass("menu-active menu-item-active"))})});var l=e(".carousel"),a=e(".carousel-indicators");l.find(".carousel-inner").children(".carousel-item").each(function(t){0===t?a.append("<li data-target='#introCarousel' data-slide-to='"+t+"' class='active'></li>"):a.append("<li data-target='#introCarousel' data-slide-to='"+t+"'></li>"),e(this).css("background-image","url('"+e(this).children(".carousel-background").children("img").attr("src")+"')"),e(this).children(".carousel-background").remove()}),e(".carousel").swipe({swipe:function(t,o,r,i,l,a){"left"==o&&e(this).carousel("next"),"right"==o&&e(this).carousel("prev")},allowPageScroll:"vertical"}),e("#skills").waypoint(function(){e(".progress .progress-bar").each(function(){e(this).css("width",e(this).attr("aria-valuenow")+"%")})},{offset:"80%"}),e('[data-toggle="counter-up"]').counterUp({delay:10,time:1e3});var n=e(".portfolio-container").isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"});e("#portfolio-flters li").on("click",function(){e("#portfolio-flters li").removeClass("filter-active"),e(this).addClass("filter-active"),n.isotope({filter:e(this).data("filter")})}),e(document).ready(function(){e(".venobox").venobox()}),e(".services-carousel").owlCarousel({autoplay:!0,dots:!1,nav:!0,navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],loop:!0,responsive:{0:{items:1},480:{items:2},800:{items:3},1e3:{items:4}}}),e(".twocon").owlCarousel({autoplay:!0,dots:!1,nav:!0,navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],loop:!0,responsive:{0:{items:1},480:{items:2},800:{items:2},1e3:{items:2}}}),e(".testimonials-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,items:1})}(jQuery);