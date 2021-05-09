$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel(
        {
            items: 1,
            loop: true,
            dots: false,
        }
    );
// Go to the next item
    $('.owl-next').click(function () {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl-prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    //tabs

    $('ul.catalog__caption').on('click', 'li:not(.catalog__item_active)', function () {
        $(this)
            .addClass('catalog__item_active').siblings().removeClass('catalog__item_active')
            .closest('div.catalog__tabs').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog__front-more').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog__front').eq(i).addClass('catalog__front-notActive');
            $('.catalog__inner').eq(i).toggleClass('catalog__inner-active');
            $('.catalog__back').eq(i).toggleClass('catalog__back-active');
        })
    });
    $('.catalog__back-more').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog__front').eq(i).removeClass('catalog__front-notActive');
            $('.catalog__inner').eq(i).toggleClass('catalog__inner-active');
            $('.catalog__back').eq(i).removeClass('catalog__back-active');
        })
    });
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "slideShow",
            "close"
        ],

        loop: true
    });

    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.843755, 74.623135],
            zoom: 13
        });
        var myIcon = DG.icon({
            iconUrl: 'src/images/footer/128px-Map_marker_font_awesome.svg.png',
            iconSize: [50, 50],
        });
        var marker = DG.marker([42.843755, 74.623135], {icon: myIcon}).addTo(map).bindPopup('IT-Run Academy');
        marker.bindLabel('IT-Run Academy', {static: true});
    });

    $('.tel').inputmask('+\\9\\96(999) 99-99-99');

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.go-top').fadeIn('slow')
        } else {
            $('.go-top').fadeOut('slow')
        }
    });

    $('.header__right__btn, .hero__content__btn').on('click', function () {
        $('.overlay, .popup__consultation, .popup__closeSurface-top').fadeIn('slow')
    });

    $('.consult__btn').on('click', function(e){
        e.preventDefault()
        $('.overlay, .popup__thanks').fadeIn('1')
        $('.popup__consultation').fadeOut('1')
    });

    $('#consult__btnMain').on('click', function(e){
        e.preventDefault()
        $('.overlay, .popup__thanks').fadeIn('slow')
    });

    $('.catalog__btn').each(function (item) {
        $(this).on('click', function () {
            $('.overlay, .popup__order').fadeIn('slow')
            $('.popup__order-subtitle').text($('h3.catalog__front-title').eq(item).text())
        })
    });

    $('.consult__btnBuy').on('click', function (e) {
        e.preventDefault()
        $('.overlay, .popup__thanksBuy').fadeIn('1')
        $('.popup__order').fadeOut('1')
    });

    $('.popup__close, .overlay__closeSurface-top, .overlay__closeSurface-right, .overlay__closeSurface-bottom, .overlay__closeSurface-left').on('click', function () {
        $('.overlay, .popup__consultation, .popup__order, .popup__thanks').fadeOut('slow')
    });

});