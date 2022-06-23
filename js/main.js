$(function() {

  $(".header__list a, .services__box a, .btn-link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  new Swiper('.header__slider', {
    slidesPerView: 1,
    speed: 800,
    autoplay: {
      delay: 3000,
    },
    // breakpoints: {
    //   1200: {
    //     // centeredSlides: false,
    //     slidesPerView: 2.5,
    //     spaceBetween: 105,
    //   },
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
  
  new Swiper('.works-slider1', {
    slidesPerView: 4,
    speed: 800,
    spaceBetween: 100,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      900: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      100: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    }
  });
  new Swiper('.clients__slider', {
    slidesPerView: 3,
    speed: 800,
    spaceBetween: 100,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      900: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      100: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    }
  });

  $('.header__menu-btn').on('click', function () {
    $('.header__list-adaptive').toggleClass('header__list-adaptive--active');
  });

  $('.header__close-btn').on('click', function () {
    $('.header__list-adaptive').removeClass('header__list-adaptive--active')
  });


  // Открытие попапа с формой
  $(document).on('click', '.js-open-pop-up_form', function () {
    $('.pop-up.pop-up_form').addClass('openned');
    $('body').addClass('blocked');
  });

  $(document).on('click', '.js-open-pop-up_form-1', function () {
    $('.pop-up-1.pop-up_form').addClass('openned');
    $('body').addClass('blocked');
  });

  // Закрытие попапа
  $(document).mouseup(function (e) {
    var div = $(".pop-up form, .pop-up-1 form");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.pop-up').removeClass('openned');
      $('.pop-up-1').removeClass('openned');
      $('body').removeClass('blocked');
    }
  });
  $(document).on('click', '.pop-up .close, .pop-up-1 .close', function () {
    $('.pop-up').removeClass('openned');
    $('.pop-up-1').removeClass('openned');
    $('body').removeClass('blocked');
  });


  
});

$(document).ready(function () { $("#static_form_pop-up").submit(function () { var formID = $(this).attr('id'); var formNm = $('#' + formID); $.ajax({ type: "POST", url: 'php/static_form.php', data: formNm.serialize(), success: function (data) { $(formNm).html(data); }, error: function (jqXHR, text, error) { $(formNm).html(error); } }); return false; }); });
$(document).ready(function () { $("#static_form_pop-up-1").submit(function () { var formID = $(this).attr('id'); var formNm = $('#' + formID); $.ajax({ type: "POST", url: 'php/static_form.php', data: formNm.serialize(), success: function (data) { $(formNm).html(data); }, error: function (jqXHR, text, error) { $(formNm).html(error); } }); return false; }); });
$(document).ready(function () { $("#static_form_pop-up-2").submit(function () { var formID = $(this).attr('id'); var formNm = $('#' + formID); $.ajax({ type: "POST", url: 'php/static_form.php', data: formNm.serialize(), success: function (data) { $(formNm).html(data); }, error: function (jqXHR, text, error) { $(formNm).html(error); } }); return false; }); });