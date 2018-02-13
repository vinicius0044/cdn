    allFunctions = function() {
        $('#corpo .conteiner .banner.hidden-phone').removeClass('hidden-phone'), $('.carrinho').before('<div class="wishlist span1"><a href="/conta/favorito/listar" alt="Lista de desejos"></a></div>'), $('.pagina-produto #formCalcularCep input').attr('placeholder', 'DIGITE SEU CEP'),
        $('.pagina-produto #formCalcularCep button').html('calcular'), $('.produto .principal .cep label').html('Calcular frete e prazo:'), $('.marcas.hidden-phone').appendTo('.pagina-inicial #corpo .conteiner'), $('.conteudo-topo .carrinho span.vazio-text').html(''), $(".carrinho > a span").remove(), $('.conteudo-topo .carrinho b span').html(''), $(".aproveite-tambem h4.titulo").html("Quem viu este produto, viu tambÃ©m"), $('.bandeiras-produto .bandeira-promocao').each(function() {
            var txt;
            txt = $(this).text().replace('Desconto', '');
            $(this).text(txt);
        }), $('.conteiner-principal .secao-banners').find('.conteiner').removeClass('conteiner').addClass('banner-limit'), $('.secao-banners .banner-limit').find('.span12').removeClass('span12'), $(".flex-direction-nav .flex-prev").html('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"></path></svg>'), $(".flex-direction-nav .flex-next").html('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path></svg>')
    }

    vitrineTime = function() {
        
        $('div#listagemProdutos ul').addClass('produtos-carrosel');
        
        var produtosEmDestaque = '';
        $('.vitrine-destaque + .produtos-carrosel .listagem-item').each(function() {
            produtosEmDestaque += '<li class="' + $(this).attr('class').replace('listagem-item', 'new-product-box') + '">' + $(this).html() + '</li>';
        });
        $('.mini-banner .modulo.span4:nth-child(3)')
        .html('<div class="featuredProducts">\
            <div class="featuredProducts-timer"></div>\
            <div class="featuredProducts-items"><ul class="slides">' + produtosEmDestaque + '</ul></div>\
            </div>');
        $('.featuredProducts-items').flexslider({
            animation: "slide",
            bullets: true
        });
        createTimer('.featuredProducts-timer', createTimerValue, 2, function() {
            $('.featuredProducts-timer').prepend('<div class="featuredProducts-timer-label">\
                <div class="featuredProducts-timer-title">Em Oferta</div>\
                <div class="featuredProducts-timer-description">Acaba em:</div>\
                </div>');
        });
        function createTimer(location, date, days, callback) {
            var $Days = days;
            var $DateStr = date;
            var $Parent = $(location);
            var $StyleName = 'style-ms-timer';
            var $Styles = '<style id="' + $StyleName + '">\
            // .ms-timer {\
                //   font-size: 0;\
                // }\
                // .ms-timer > *:nth-child(even) {\
                    //  background: rgba(34, 35, 35, 0.02);\
                    // }\
                    // .ms-timer > * {\
                        //   width: 25%;\
                        //   text-align: center;\
                        //   line-height: 68px;\
                        //   text-align: center;\
                        //   display: inline-block;\
                        //   font-size: 26px;\
                        //   position: relative;\
                        // }\
                        // .ms-timer > *:before {\
                            //   content: attr(data-describ);\
                            //   display: block;\
                            //   line-height: 36px;\
                            //   width: 100%;\
                            //   font-size: 14px;\
                            //   font-weight: 600;\
                            //   border-bottom: 1px solid rgba(51, 51, 51, 0.05);\
                            // }\
                            </style>';
                            if (!$('#' + $StyleName).length) {
                                $('head').append($Styles);
                            }
                            var $Layout = '<div class="ms-timer">' +
                            '<span ms-timer-days data-describ="dias"></span>' +
                            '<span ms-timer-hours data-describ="hrs"></span>' +
                            '<span ms-timer-minutes data-describ="min"></span>' +
                            '<span ms-timer-seconds data-describ="seg"></span>' +
                            '</div>';
                            $Parent.append($Layout);
                            var timer;
                            var compareDate = new Date($DateStr);
                            compareDate.setDate(compareDate.getDate($DateStr) + $Days);
                            var timer = setInterval(function() {
                                timeBetweenDates(compareDate);
                            }, 1000);
                            var timeBetweenDates = function(toDate) {
                                var dateEntered = toDate;
                                var now = new Date();
                                var difference = dateEntered.getTime() - now.getTime();
                                if (difference <= 0) {
                                    clearInterval(timer);
                                } else {
                                    var seconds = Math.floor(difference / 1000);
                                    var minutes = Math.floor(seconds / 60);
                                    var hours = Math.floor(minutes / 60);
                                    var days = Math.floor(hours / 24);
                                    hours %= 24;
                                    minutes %= 60;
                                    seconds %= 60;
                                    $Parent.find("[ms-timer-days]").text(days);
                                    $Parent.find("[ms-timer-hours]").text(hours);
                                    $Parent.find("[ms-timer-minutes]").text(minutes);
                                    $Parent.find("[ms-timer-seconds]").text(seconds);
                                }
                            }
                            callback()
                        }
                    }


                    head = function() {
                        $(document).ready(function() {
                            if ($("#barraTopo").remove(), $(".barra-inicial .canais-contato ul").append('<li class="rastreio-correios" href="/#modalRastreio" data-toggle="modal" data-target="#modalRastreio"><span class="titulo"><i class="fa fa-truck"></i>Rastreio RÃ¡pido</span>'), $(window).width() > 768) {
                                var s = $("#cabecalho").height();
                                $("#cabecalho").next().css("padding-top", s - 2)
                            }
                            $(window).scroll(function() {
                                fixedHeader()
                            }),
                            $(".busca-mobile").after('<div class="my_account span3 hidden-phone"><a href="/conta/login" class="my_account-title">' + 'Minha Conta</a><ul><li class="login"><a href="/conta/login">Entrar' + '</a></li><li><a href="/conta/login">Cadastrar' + "</a></li></ul></div>"), $("#cabecalho > .conteiner > .row-fluid > .span3").append('<div class="js-hamburguer hamburguer hidden-phone"><span></span><span></span><span></span></div>').addClass("brand"), openMenu(),
                            $(".conteudo-topo .superior .span8 > div").hasClass("btn-group") && $(".my_account .login").replaceWith('<li class="login"><a href="/conta/logout">Sair' + "</a></li>")
                        });
                    }
                    addFavorito = function() {
                        $('<a class="btn-favorite" href="#"></a>').prependTo(".pagina-inicial .listagem-item"), $(".pagina-inicial .listagem-item").each(function() {
                            var a = $(this).find(".info-produto .hide.trustvox-stars").attr("data-trustvox-product-code");
                            $(this).find(".btn-favorite").attr("href", "/conta/favorito/" + a + "/adicionar")
                        })
                    }
                    vitrineResponsiva = function() {
                        if ($(window).width() < 767) {
                            ! function(i) {
                                "use strict";
                                "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
                            }(function(i) {
                                "use strict";
                                var t = window.Slick || {};
                                (t = function() {
                                    var t = 0;
                                    return function(e, o) {
                                        var s, n = this;
                                        n.defaults = {
                                            accessibility: !0,
                                            adaptiveHeight: !1,
                                            appendArrows: i(e),
                                            appendDots: i(e),
                                            arrows: !0,
                                            asNavFor: null,
                                            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                                            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                                            autoplay: !1,
                                            autoplaySpeed: 3e3,
                                            centerMode: !1,
                                            centerPadding: "50px",
                                            cssEase: "ease",
                                            customPaging: function(i, t) {
                                                return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
                                            },
                                            dots: !1,
                                            dotsClass: "slick-dots",
                                            draggable: !0,
                                            easing: "linear",
                                            edgeFriction: .35,
                                            fade: !1,
                                            focusOnSelect: !1,
                                            infinite: !0,
                                            initialSlide: 0,
                                            lazyLoad: "ondemand",
                                            mobileFirst: !1,
                                            pauseOnHover: !0,
                                            pauseOnDotsHover: !1,
                                            respondTo: "window",
                                            responsive: null,
                                            rows: 1,
                                            rtl: !1,
                                            slide: "",
                                            slidesPerRow: 1,
                                            slidesToShow: 1,
                                            slidesToScroll: 1,
                                            speed: 500,
                                            swipe: !0,
                                            swipeToSlide: !1,
                                            touchMove: !0,
                                            touchThreshold: 5,
                                            useCSS: !0,
                                            useTransform: !1,
                                            variableWidth: !1,
                                            vertical: !1,
                                            verticalSwiping: !1,
                                            waitForAnimate: !0,
                                            zIndex: 1e3
                                        }, n.initials = {
                                            animating: !1,
                                            dragging: !1,
                                            autoPlayTimer: null,
                                            currentDirection: 0,
                                            currentLeft: null,
                                            currentSlide: 0,
                                            direction: 1,
                                            $dots: null,
                                            listWidth: null,
                                            listHeight: null,
                                            loadIndex: 0,
                                            $nextArrow: null,
                                            $prevArrow: null,
                                            slideCount: null,
                                            slideWidth: null,
                                            $slideTrack: null,
                                            $slides: null,
                                            sliding: !1,
                                            slideOffset: 0,
                                            swipeLeft: null,
                                            $list: null,
                                            touchObject: {},
                                            transformsEnabled: !1,
                                            unslicked: !1
                                        }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.hidden = "hidden", n.paused = !1, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, s, o), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0), n.checkResponsive(!0)
                                    }
                                }()).prototype.addSlide = t.prototype.slickAdd = function(t, e, o) {
        var s = this;
        if ("boolean" == typeof e) o = e, e = null;
        else if (0 > e || e >= s.slideCount) return !1;
        s.unload(), "number" == typeof e ? 0 === e && 0 === s.$slides.length ? i(t).appendTo(s.$slideTrack) : o ? i(t).insertBefore(s.$slides.eq(e)) : i(t).insertAfter(s.$slides.eq(e)) : !0 === o ? i(t).prependTo(s.$slideTrack) : i(t).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(t, e) {
            i(e).attr("data-slick-index", t)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, t.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var t = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: t
            }, i.options.speed)
        }
    }, t.prototype.animateSlide = function(t, e) {
        var o = {},
        s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (t = -t), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: t
        }, s.options.speed, s.options.easing, e) : s.$slideTrack.animate({
            top: t
        }, s.options.speed, s.options.easing, e) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
            animStart: s.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function() {
                e && e.call()
            }
        })) : (s.applyTransition(), t = Math.ceil(t), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + t + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + t + "px, 0px)", s.$slideTrack.css(o), e && setTimeout(function() {
            s.disableTransition(), e.call()
        }, s.options.speed))
    }, t.prototype.asNavFor = function(t) {
        var e = this,
        o = e.options.asNavFor;
        o && null !== o && (o = i(o).not(e.$slider)), null !== o && "object" == typeof o && o.each(function() {
            var e = i(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function(i) {
        var t = this,
        e = {};
        !1 === t.options.fade ? e[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : e[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(e) : t.$slides.eq(i).css(e)
    }, t.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer), i.slideCount > i.options.slidesToShow && !0 !== i.paused && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var i = this;
        !1 === i.options.infinite ? 1 === i.direction ? (i.currentSlide + 1 === i.slideCount - 1 && (i.direction = 0), i.slideHandler(i.currentSlide + i.options.slidesToScroll)) : (i.currentSlide - 1 == 0 && (i.direction = 1), i.slideHandler(i.currentSlide - i.options.slidesToScroll)) : i.slideHandler(i.currentSlide + i.options.slidesToScroll)
    }, t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = i(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = i(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, e, o = this;
        if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
            for (e = '<ul class="' + o.options.dotsClass + '">', t = 0; t <= o.getDotCount(); t += 1) e += "<li>" + o.options.customPaging.call(this, o, t) + "</li>";
                e += "</ul>", o.$dots = i(e).appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, e) {
            i(e).attr("data-slick-index", t).data("originalStyling", i(e).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? i('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), i("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var i, t, e, o, s, n, a, r = this;
        if (o = document.createDocumentFragment(), n = r.$slider.children(), r.options.rows > 1) {
            for (a = r.options.slidesPerRow * r.options.rows, s = Math.ceil(n.length / a), i = 0; s > i; i++) {
                var l = document.createElement("div");
                for (t = 0; t < r.options.rows; t++) {
                    var d = document.createElement("div");
                    for (e = 0; e < r.options.slidesPerRow; e++) {
                        var c = i * a + (t * r.options.slidesPerRow + e);
                        n.get(c) && d.appendChild(n.get(c))
                    }
                    l.appendChild(d)
                }
                o.appendChild(l)
            }
            r.$slider.html(o), r.$slider.children().children().children().css({
                width: 100 / r.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, e) {
        var o, s, n, a = this,
        r = !1,
        l = a.$slider.width(),
        d = window.innerWidth || i(window).width();
        if ("window" === a.respondTo ? n = d : "slider" === a.respondTo ? n = l : "min" === a.respondTo && (n = Math.min(d, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
            s = null;
            for (o in a.breakpoints) a.breakpoints.hasOwnProperty(o) && (!1 === a.originalSettings.mobileFirst ? n < a.breakpoints[o] && (s = a.breakpoints[o]) : n > a.breakpoints[o] && (s = a.breakpoints[o]));
                null !== s ? null !== a.activeBreakpoint ? (s !== a.activeBreakpoint || e) && (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = i.extend({}, a.originalSettings, a.breakpointSettings[s]), !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t)), r = s) : (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = i.extend({}, a.originalSettings, a.breakpointSettings[s]), !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t)), r = s) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t), r = s), t || !1 === r || a.$slider.trigger("breakpoint", [a, r])
        }
    }, t.prototype.changeSlide = function(t, e) {
        var o, s, n, a = this,
        r = i(t.target);
        switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), n = a.slideCount % a.options.slidesToScroll != 0, o = n ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, t.data.message) {
            case "previous":
            s = 0 === o ? a.options.slidesToScroll : a.options.slidesToShow - o, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - s, !1, e);
            break;
            case "next":
            s = 0 === o ? a.options.slidesToScroll : o, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + s, !1, e);
            break;
            case "index":
            var l = 0 === t.data.index ? 0 : t.data.index || r.index() * a.options.slidesToScroll;
            a.slideHandler(a.checkNavigable(l), !1, e), r.children().trigger("focus");
            break;
            default:
            return
        }
    }, t.prototype.checkNavigable = function(i) {
        var t, e;
        if (t = this.getNavigableIndexes(), e = 0, i > t[t.length - 1]) i = t[t.length - 1];
        else
            for (var o in t) {
                if (i < t[o]) {
                    i = e;
                    break
                }
                e = t[o]
            }
            return i
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (i("li", t.$dots).off("click.slick", t.changeSlide), !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && i("li", t.$dots).off("mouseenter.slick", i.proxy(t.setPaused, t, !0)).off("mouseleave.slick", i.proxy(t.setPaused, t, !1))), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), i(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", i.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", i.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && i(t.$slideTrack).children().off("click.slick", t.selectHandler), i(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), i(window).off("resize.slick.slick-" + t.instanceUid, t.resize), i("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), i(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), i(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpRows = function() {
            var i, t = this;
            t.options.rows > 1 && ((i = t.$slides.children().children()).removeAttr("style"), t.$slider.html(i))
        }, t.prototype.clickHandler = function(i) {
            !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
        }, t.prototype.destroy = function(t) {
            var e = this;
            e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), i(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                i(this).attr("style", i(this).data("originalStyling"))
            }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
        }, t.prototype.disableTransition = function(i) {
            var t = this,
            e = {};
            e[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(e) : t.$slides.eq(i).css(e)
        }, t.prototype.fadeSlide = function(i, t) {
            var e = this;
            !1 === e.cssTransitions ? (e.$slides.eq(i).css({
                zIndex: e.options.zIndex
            }), e.$slides.eq(i).animate({
                opacity: 1
            }, e.options.speed, e.options.easing, t)) : (e.applyTransition(i), e.$slides.eq(i).css({
                opacity: 1,
                zIndex: e.options.zIndex
            }), t && setTimeout(function() {
                e.disableTransition(i), t.call()
            }, e.options.speed))
        }, t.prototype.fadeSlideOut = function(i) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(i).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(i), t.$slides.eq(i).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(i) {
            var t = this;
            null !== i && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(i).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, t.prototype.getDotCount = function() {
            var i = this,
            t = 0,
            e = 0,
            o = 0;
            if (!0 === i.options.infinite)
                for (; t < i.slideCount;) ++o, t = e + i.options.slidesToScroll, e += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                    else if (!0 === i.options.centerMode) o = i.slideCount;
                else
                    for (; t < i.slideCount;) ++o, t = e + i.options.slidesToScroll, e += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                        return o - 1
                }, t.prototype.getLeft = function(i) {
                    var t, e, o, s = this,
                    n = 0;
                    return s.slideOffset = 0, e = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = e * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll != 0 && i + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (i > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (i - s.slideCount)) * s.slideWidth * -1, n = (s.options.slidesToShow - (i - s.slideCount)) * e * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, n = s.slideCount % s.options.slidesToScroll * e * -1))) : i + s.options.slidesToShow > s.slideCount && (s.slideOffset = (i + s.options.slidesToShow - s.slideCount) * s.slideWidth, n = (i + s.options.slidesToShow - s.slideCount) * e), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, n = 0), !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? i * s.slideWidth * -1 + s.slideOffset : i * e * -1 + n, !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow), t = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, t += (s.$list.width() - o.outerWidth()) / 2)), t
                }, t.prototype.getOption = t.prototype.slickGetOption = function(i) {
                    return this.options[i]
                }, t.prototype.getNavigableIndexes = function() {
                    var i, t = this,
                    e = 0,
                    o = 0,
                    s = [];
                    for (!1 === t.options.infinite ? i = t.slideCount : (e = -1 * t.options.slidesToScroll, o = -1 * t.options.slidesToScroll, i = 2 * t.slideCount); i > e;) s.push(e), e = o + t.options.slidesToScroll, o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                        return s
                }, t.prototype.getSlick = function() {
                    return this
                }, t.prototype.getSlideCount = function() {
                    var t, e, o = this;
                    return e = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
                        return n.offsetLeft - e + i(n).outerWidth() / 2 > -1 * o.swipeLeft ? (t = n, !1) : void 0
                    }), Math.abs(i(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
                }, t.prototype.goTo = t.prototype.slickGoTo = function(i, t) {
                    this.changeSlide({
                        data: {
                            message: "index",
                            index: parseInt(i)
                        }
                    }, t)
                }, t.prototype.init = function(t) {
                    var e = this;
                    i(e.$slider).hasClass("slick-initialized") || (i(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA()
                }, t.prototype.initArrowEvents = function() {
                    var i = this;
                    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.on("click.slick", {
                        message: "previous"
                    }, i.changeSlide), i.$nextArrow.on("click.slick", {
                        message: "next"
                    }, i.changeSlide))
                }, t.prototype.initDotEvents = function() {
                    var t = this;
                    !0 === t.options.dots && t.slideCount > t.options.slidesToShow && i("li", t.$dots).on("click.slick", {
                        message: "index"
                    }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && i("li", t.$dots).on("mouseenter.slick", i.proxy(t.setPaused, t, !0)).on("mouseleave.slick", i.proxy(t.setPaused, t, !1))
                }, t.prototype.initializeEvents = function() {
                    var t = this;
                    t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                        action: "start"
                    }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                        action: "move"
                    }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                        action: "end"
                    }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                        action: "end"
                    }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), i(document).on(t.visibilityChange, i.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", i.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", i.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && i(t.$slideTrack).children().on("click.slick", t.selectHandler), i(window).on("orientationchange.slick.slick-" + t.instanceUid, i.proxy(t.orientationChange, t)), i(window).on("resize.slick.slick-" + t.instanceUid, i.proxy(t.resize, t)), i("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), i(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), i(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
                }, t.prototype.initUI = function() {
                    var i = this;
                    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show(), !0 === i.options.autoplay && i.autoPlay()
                }, t.prototype.keyHandler = function(i) {
                    var t = this;
                    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                        data: {
                            message: "previous"
                        }
                    }) : 39 === i.keyCode && !0 === t.options.accessibility && t.changeSlide({
                        data: {
                            message: "next"
                        }
                    }))
                }, t.prototype.lazyLoad = function() {
                    function t(t) {
                        i("img[data-lazy]", t).each(function() {
                            var t = i(this),
                            e = i(this).attr("data-lazy"),
                            o = document.createElement("img");
                            o.onload = function() {
                                t.animate({
                                    opacity: 0
                                }, 100, function() {
                                    t.attr("src", e).animate({
                                        opacity: 1
                                    }, 200, function() {
                                        t.removeAttr("data-lazy").removeClass("slick-loading")
                                    })
                                })
                            }, o.src = e
                        })
                    }
                    var e, o, s, n = this;
                    !0 === n.options.centerMode ? !0 === n.options.infinite ? (o = n.currentSlide + (n.options.slidesToShow / 2 + 1), s = o + n.options.slidesToShow + 2) : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = o + n.options.slidesToShow, !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t(n.$slider.find(".slick-slide").slice(o, s)), n.slideCount <= n.options.slidesToShow ? (e = n.$slider.find(".slick-slide"), t(e)) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? (e = n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow), t(e)) : 0 === n.currentSlide && (e = n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow), t(e))
                }, t.prototype.loadSlider = function() {
                    var i = this;
                    i.setPosition(), i.$slideTrack.css({
                        opacity: 1
                    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
                }, t.prototype.next = t.prototype.slickNext = function() {
                    this.changeSlide({
                        data: {
                            message: "next"
                        }
                    })
                }, t.prototype.orientationChange = function() {
                    var i = this;
                    i.checkResponsive(), i.setPosition()
                }, t.prototype.pause = t.prototype.slickPause = function() {
                    var i = this;
                    i.autoPlayClear(), i.paused = !0
                }, t.prototype.play = t.prototype.slickPlay = function() {
                    var i = this;
                    i.paused = !1, i.autoPlay()
                }, t.prototype.postSlide = function(i) {
                    var t = this;
                    t.$slider.trigger("afterChange", [t, i]), t.animating = !1, t.setPosition(), t.swipeLeft = null, !0 === t.options.autoplay && !1 === t.paused && t.autoPlay(), !0 === t.options.accessibility && t.initADA()
                }, t.prototype.prev = t.prototype.slickPrev = function() {
                    this.changeSlide({
                        data: {
                            message: "previous"
                        }
                    })
                }, t.prototype.preventDefault = function(i) {
                    i.preventDefault()
                }, t.prototype.progressiveLazyLoad = function() {
                    var t, e = this;
                    i("img[data-lazy]", e.$slider).length > 0 && ((t = i("img[data-lazy]", e.$slider).first()).attr("src", null), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function() {
                        t.removeAttr("data-lazy"), e.progressiveLazyLoad(), !0 === e.options.adaptiveHeight && e.setPosition()
                    }).error(function() {
                        t.removeAttr("data-lazy"), e.progressiveLazyLoad()
                    }))
                }, t.prototype.refresh = function(t) {
                    var e, o, s = this;
                    o = s.slideCount - s.options.slidesToShow, s.options.infinite || (s.slideCount <= s.options.slidesToShow ? s.currentSlide = 0 : s.currentSlide > o && (s.currentSlide = o)), e = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
                        currentSlide: e
                    }), s.init(), t || s.changeSlide({
                        data: {
                            message: "index",
                            index: e
                        }
                    }, !1)
                }, t.prototype.registerBreakpoints = function() {
                    var t, e, o, s = this,
                    n = s.options.responsive || null;
                    if ("array" === i.type(n) && n.length) {
                        s.respondTo = s.options.respondTo || "window";
                        for (t in n)
                            if (o = s.breakpoints.length - 1, e = n[t].breakpoint, n.hasOwnProperty(t)) {
                                for (; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === e && s.breakpoints.splice(o, 1), o--;
                                    s.breakpoints.push(e), s.breakpointSettings[e] = n[t].settings
                            }
                            s.breakpoints.sort(function(i, t) {
                                return s.options.mobileFirst ? i - t : t - i
                            })
                        }
                    }, t.prototype.reinit = function() {
                        var t = this;
                        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && i(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), !0 === t.options.autoplay && t.focusHandler()
                    }, t.prototype.resize = function() {
                        var t = this;
                        i(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                            t.windowWidth = i(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
                        }, 50))
                    }, t.prototype.removeSlide = t.prototype.slickRemove = function(i, t, e) {
                        var o = this;
                        return "boolean" == typeof i ? (t = i, i = !0 === t ? 0 : o.slideCount - 1) : i = !0 === t ? --i : i, !(o.slideCount < 1 || 0 > i || i > o.slideCount - 1) && (o.unload(), !0 === e ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
                    }, t.prototype.setCSS = function(i) {
                        var t, e, o = this,
                        s = {};
                        !0 === o.options.rtl && (i = -i), t = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", e = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + t + ", " + e + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + t + ", " + e + ", 0px)", o.$slideTrack.css(s)))
                    }, t.prototype.setDimensions = function() {
                        var i = this;
                        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
                            padding: "0px " + i.options.centerPadding
                        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
                            padding: i.options.centerPadding + " 0px"
                        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
                        var t = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
                        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - t)
                    }, t.prototype.setFade = function() {
                        var t, e = this;
                        e.$slides.each(function(o, s) {
                            t = e.slideWidth * o * -1, !0 === e.options.rtl ? i(s).css({
                                position: "relative",
                                right: t,
                                top: 0,
                                zIndex: e.options.zIndex - 2,
                                opacity: 0
                            }) : i(s).css({
                                position: "relative",
                                left: t,
                                top: 0,
                                zIndex: e.options.zIndex - 2,
                                opacity: 0
                            })
                        }), e.$slides.eq(e.currentSlide).css({
                            zIndex: e.options.zIndex - 1,
                            opacity: 1
                        })
                    }, t.prototype.setHeight = function() {
                        var i = this;
                        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                            var t = i.$slides.eq(i.currentSlide).outerHeight(!0);
                            i.$list.css("height", t)
                        }
                    }, t.prototype.setOption = t.prototype.slickSetOption = function(t, e, o) {
                        var s, n, a = this;
                        if ("responsive" === t && "array" === i.type(e))
                            for (n in e)
                                if ("array" !== i.type(a.options.responsive)) a.options.responsive = [e[n]];
                            else {
                                for (s = a.options.responsive.length - 1; s >= 0;) a.options.responsive[s].breakpoint === e[n].breakpoint && a.options.responsive.splice(s, 1), s--;
                                    a.options.responsive.push(e[n])
                            }
                            else a.options[t] = e;
                            !0 === o && (a.unload(), a.reinit())
                        }, t.prototype.setPosition = function() {
                            var i = this;
                            i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
                        }, t.prototype.setProps = function() {
                            var i = this,
                            t = document.body.style;
                            i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== t.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (i.animType = !1)), void 0 !== t.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (i.animType = !1)), void 0 !== t.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (i.animType = !1)), void 0 !== t.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === t.msTransform && (i.animType = !1)), void 0 !== t.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
                        }, t.prototype.setSlideClasses = function(i) {
                            var t, e, o, s, n = this;
                            e = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode ? (t = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= t && i <= n.slideCount - 1 - t ? n.$slides.slice(i - t, i + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, e.slice(o - t + 1, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? e.eq(e.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && e.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")) : i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : e.length <= n.options.slidesToShow ? e.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? e.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : e.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === n.options.lazyLoad && n.lazyLoad()
                        }, t.prototype.setupInfinite = function() {
                            var t, e, o, s = this;
                            if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (e = null, s.slideCount > s.options.slidesToShow)) {
                                for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, t = s.slideCount; t > s.slideCount - o; t -= 1) e = t - 1, i(s.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                                    for (t = 0; o > t; t += 1) e = t, i(s.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                                        s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                                            i(this).attr("id", "")
                                        })
                                }
                            }, t.prototype.setPaused = function(i) {
                                var t = this;
                                !0 === t.options.autoplay && !0 === t.options.pauseOnHover && (t.paused = i, i ? t.autoPlayClear() : t.autoPlay())
                            }, t.prototype.selectHandler = function(t) {
                                var e = this,
                                o = i(t.target).is(".slick-slide") ? i(t.target) : i(t.target).parents(".slick-slide"),
                                s = parseInt(o.attr("data-slick-index"));
                                return s || (s = 0), e.slideCount <= e.options.slidesToShow ? (e.setSlideClasses(s), void e.asNavFor(s)) : void e.slideHandler(s)
                            }, t.prototype.slideHandler = function(i, t, e) {
                                var o, s, n, a, r = null,
                                l = this;
                                return t = t || !1, !0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === i || l.slideCount <= l.options.slidesToShow ? void 0 : (!1 === t && l.asNavFor(i), o = i, r = l.getLeft(o), a = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? a : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (0 > i || i > l.getDotCount() * l.options.slidesToScroll) ? void(!1 === l.options.fade && (o = l.currentSlide, !0 !== e ? l.animateSlide(a, function() {
                                    l.postSlide(o)
                                }) : l.postSlide(o))) : !1 === l.options.infinite && !0 === l.options.centerMode && (0 > i || i > l.slideCount - l.options.slidesToScroll) ? void(!1 === l.options.fade && (o = l.currentSlide, !0 !== e ? l.animateSlide(a, function() {
                                    l.postSlide(o)
                                }) : l.postSlide(o))) : (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), s = 0 > o ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + o : o >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : o - l.slideCount : o, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, s]), n = l.currentSlide, l.currentSlide = s, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade ? (!0 !== e ? (l.fadeSlideOut(n), l.fadeSlide(s, function() {
                                    l.postSlide(s)
                                })) : l.postSlide(s), void l.animateHeight()) : void(!0 !== e ? l.animateSlide(r, function() {
                                    l.postSlide(s)
                                }) : l.postSlide(s))))
                            }, t.prototype.startLoad = function() {
                                var i = this;
                                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
                            }, t.prototype.swipeDirection = function() {
                                var i, t, e, o, s = this;
                                return i = s.touchObject.startX - s.touchObject.curX, t = s.touchObject.startY - s.touchObject.curY, e = Math.atan2(t, i), 0 > (o = Math.round(180 * e / Math.PI)) && (o = 360 - Math.abs(o)), 45 >= o && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : 360 >= o && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && 225 >= o ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && 135 >= o ? "left" : "right" : "vertical"
                            }, t.prototype.swipeEnd = function(i) {
                                var t, e = this;
                                if (e.dragging = !1, e.shouldClick = !(e.touchObject.swipeLength > 10), void 0 === e.touchObject.curX) return !1;
                                if (!0 === e.touchObject.edgeHit && e.$slider.trigger("edge", [e, e.swipeDirection()]), e.touchObject.swipeLength >= e.touchObject.minSwipe) switch (e.swipeDirection()) {
                                    case "left":
                                    t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide + e.getSlideCount()) : e.currentSlide + e.getSlideCount(), e.slideHandler(t), e.currentDirection = 0, e.touchObject = {}, e.$slider.trigger("swipe", [e, "left"]);
                                    break;
                                    case "right":
                                    t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide - e.getSlideCount()) : e.currentSlide - e.getSlideCount(), e.slideHandler(t), e.currentDirection = 1, e.touchObject = {}, e.$slider.trigger("swipe", [e, "right"])
                                } else e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide), e.touchObject = {})
                            }, t.prototype.swipeHandler = function(i) {
                                var t = this;
                                if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), i.data.action) {
                                    case "start":
                                    t.swipeStart(i);
                                    break;
                                    case "move":
                                    t.swipeMove(i);
                                    break;
                                    case "end":
                                    t.swipeEnd(i)
                                }
                            }, t.prototype.swipeMove = function(i) {
                                var t, e, o, s, n, a = this;
                                return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!a.dragging || n && 1 !== n.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, a.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), "vertical" !== (e = a.swipeDirection()) ? (void 0 !== i.originalEvent && a.touchObject.swipeLength > 4 && i.preventDefault(), s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1), o = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === e || a.currentSlide >= a.getDotCount() && "left" === e) && (o = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + o * s : a.swipeLeft = t + o * (a.$list.height() / a.listWidth) * s, !0 === a.options.verticalSwiping && (a.swipeLeft = t + o * s), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
                            }, t.prototype.swipeStart = function(i) {
                                var t, e = this;
                                return 1 !== e.touchObject.fingerCount || e.slideCount <= e.options.slidesToShow ? (e.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (t = i.originalEvent.touches[0]), e.touchObject.startX = e.touchObject.curX = void 0 !== t ? t.pageX : i.clientX, e.touchObject.startY = e.touchObject.curY = void 0 !== t ? t.pageY : i.clientY, void(e.dragging = !0))
                            }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                                var i = this;
                                null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
                            }, t.prototype.unload = function() {
                                var t = this;
                                i(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
                            }, t.prototype.unslick = function(i) {
                                var t = this;
                                t.$slider.trigger("unslick", [t, i]), t.destroy()
                            }, t.prototype.updateArrows = function() {
                                var i = this;
                                Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
                            }, t.prototype.updateDots = function() {
                                var i = this;
                                null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
                            }, t.prototype.visibility = function() {
                                var i = this;
                                document[i.hidden] ? (i.paused = !0, i.autoPlayClear()) : !0 === i.options.autoplay && (i.paused = !1, i.autoPlay())
                            }, t.prototype.initADA = function() {
                                var t = this;
                                t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                                    "aria-hidden": "true",
                                    tabindex: "-1"
                                }).find("a, input, button, select").attr({
                                    tabindex: "-1"
                                }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(e) {
                                    i(this).attr({
                                        role: "option",
                                        "aria-describedby": "slick-slide" + t.instanceUid + e
                                    })
                                }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(e) {
                                    i(this).attr({
                                        role: "presentation",
                                        "aria-selected": "false",
                                        "aria-controls": "navigation" + t.instanceUid + e,
                                        id: "slick-slide" + t.instanceUid + e
                                    })
                                }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
                            }, t.prototype.activateADA = function() {
                                this.$slideTrack.find(".slick-active").attr({
                                    "aria-hidden": "false"
                                }).find("a, input, button, select").attr({
                                    tabindex: "0"
                                })
                            }, t.prototype.focusHandler = function() {
                                var t = this;
                                t.$slider.on("focus.slick blur.slick", "*", function(e) {
                                    e.stopImmediatePropagation();
                                    var o = i(this);
                                    setTimeout(function() {
                                        t.isPlay && (o.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
                                    }, 0)
                                })
                            }, i.fn.slick = function() {
                                var i, e, o = this,
                                s = arguments[0],
                                n = Array.prototype.slice.call(arguments, 1),
                                a = o.length;
                                for (i = 0; a > i; i++)
                                    if ("object" == typeof s || void 0 === s ? o[i].slick = new t(o[i], s) : e = o[i].slick[s].apply(o[i].slick, n), void 0 !== e) return e;
                                return o
                            }
                        }), $(".listagem-linha").each(function() {
                            if ($(this).hasClass("flexslider")) {
                                var i = $(this).find("ul").html();
                                $(this).find(".flex-viewport").remove(), $(this).find(".flex-direction-nav").remove(), $(this).append("<ul class='slick-product'>" + i + "</ul>")
                            } else $(this).find("li").unwrap().unwrap()
                        }), $(".listagem-linha .slick-product").slick({
                            dots: !0,
                            infinite: !0,
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            speed: 250,
                            dots: !1,
                            afterChange: void $(".slick-product .has-zoom").each(function() {
                                var i = $(this).find(".imagem-principal").attr("data-imagem-caminho");
                                $(this).append('<img src="' + i + '" class="imagem-zoom" alt="zoom">')
                            }),
                            prevArrow: '<div class="slick-prev"></div>',
                            nextArrow: '<div class="slick-next"></div>',
                            responsive: [{
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 1
                                }
                            }, {
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3
                                }
                            }, {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            }]
                        }), $(".slick-next").click(function() {
                            $(this).addClass("active"), $(this).siblings(".slick-prev").removeClass("active")
                        }), $(".slick-prev").click(function() {
                            $(this).addClass("active"), $(this).siblings(".slick-next").removeClass("active")
                        })
                    }
                }
                $(function() {
                    vitrineTime()
                });
