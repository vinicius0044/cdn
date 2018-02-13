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

                }
                $(function() {
                    vitrineTime()
                });
