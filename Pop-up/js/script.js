function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  }
});

;

$(window).on('load', function () {
  $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
});

jQuery(document).ready(function () {
  // Анимированный логотип
  $('#logo').hover(
    function () {
      $(this).addClass('animate__tada');
    },
    function () {
      $(this).removeClass('animate__tada');
    },
  );

  let burger = $('.header__burger');
  let all = $(
    '.header__logo-link, .header__overlay, .header__button, .menu',
  ); /* Создаем переменную, в которой все классы, которым добавляем active */

  burger.click(() => all.toggleClass('active'));

  $('.fa-search').click(function () {
    $('.nav-search__container, .nav-search__input').toggleClass('active');
    $("nav-search__input[type='text']").focus();
  });

  // ------------------- Попап ---------------

  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  const popup = $('#popup');
  const popupCloses = $('.popup__close');

  let alertwin = getCookie("alertwin");

  function removePopup(cookie, cookieMeaning, pop) {
    if (cookie == `${cookieMeaning}`) {
      pop.remove()
    }
  };

  removePopup(alertwin, 'no', popup);

  /* Заставляем работать функцию после загрузки всей страницы */
  function show_popup() { popup.addClass('active') };

  /* Заставляем работать функцию через 5 секунд от загрузки страницы */
  window.setTimeout(
    show_popup,
    5000,
  );

  function hidePopup(closeClass, pop, cookieKey, cookieMeaning) {
    closeClass.click(() => {
      pop.removeClass('active').addClass('closes')

      if (pop.hasClass('closes')) {
        let date = new Date;
        date.setDate(date.getDate() + 1);
        document.cookie = `${cookieKey}=${cookieMeaning}; path=/; expires=` + date.toUTCString();

        let cookie = getCookie(`${cookieKey}`);
        if (cookie == `${cookieMeaning}`) pop.remove()
      }
    })
  }

  hidePopup(popupCloses, popup, 'alertwin', 'no');

  //-------------footer-date------------------------

  let date = new Date().getFullYear(); /* Создаем переменную, в которой (new Date().getFullYear()) - текущий год */
  $('#date').text(
    new Date().getFullYear(),
  ); /* Находим нужный отрезок в html, чтобы заменить его на текущий год */

  // ----------------- плавный скролл по странице к нужному месту -----------

  $('#ancor').on('click', 'a', function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  // $(window).scroll(function () {
  //   let skrollHidden = $(window).scrollTop();

  //   if (skrollHidden > 300) {
  //     $('.organization-carts__extra').addClass('animate-hidden');
  //   } else {
  //     $('.organization-carts__extra').removeClass('animate-hidden');
  //   }

  //   if (skrollHidden > 500) {
  //     $('#section2').addClass('animate-hidden2');
  //   } else {
  //     $('#section2').removeClass('animate-hidden2');
  //   }
  // });
  let animateHidden = $('.animate-hidden');
  animateHidden.waypoint(
    function () {
      animateHidden.addClass('not-in-view');
    },
    { offset: '80%' },
  );

  // (function showBlocksOnScroll() {
  //   if ($.fn.waypoint) {
  //     $('.animate-hidden').addClass('not-in-view');
  //     $('.animate-hidden').waypoint(
  //       function () {
  //         this.element.classList.remove('not-in-view');
  //       },
  //       { offset: '80%' },
  //     );
  //   }
  // })();

  $(window).scroll(function () {
    let height = $(window).scrollTop();
    /*Если сделали скролл на 600px задаём новый класс для span*/
    if (height > 600) {
      $('#span').addClass('active');
    } else {
      /*Если меньше 600px удаляем класс для span*/
      $('#span').removeClass('active');
    }

    if (height > 100) {
      /*Если сделали скролл на 100px задаём новый класс для ancor*/
      $('#ancor').addClass('active');
    } else {
      /*Если меньше 100px удаляем класс для ancor*/
      $('#ancor').removeClass('active');
    }
  });

  // ================================================

  // Попап без тайминга с куками на 1 день. 

  // function getCookie(name) {
  //   let matches = document.cookie.match(new RegExp(
  //     "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  //   ));
  //   return matches ? decodeURIComponent(matches[1]) : undefined;
  // }

  // Находим попап 
  // const popup = $('#popup');
  // const popup2 = $('#popup2');
  // const popup3 = $('#popup3');
  // const popupCloses = $('#close-popup');
  // const popupCloses2 = $('#close-popup2');
  // const popupCloses3 = $('#close-popup3');

  // // Создаем для каждого нового попапа переменную с cookie 
  // let alertwin = getCookie("alertwin");
  // let alertwin2 = getCookie("alertwin2");
  // let alertwin3 = getCookie("alertwin3");

  // // Функция проверки cookie и удаления попапа с нужной cookie
  // function removePopup(cookie, cookieMeaning, pop) {
  //   if (cookie == `${cookieMeaning}`) {
  //     pop.remove()
  //   }
  // };

  // // Вызываем для каждого нового попапа проверку и удаление
  // removePopup(alertwin, 'no', popup);
  // removePopup(alertwin2, 'no2', popup2);
  // removePopup(alertwin3, 'no3', popup3);

  // // По клику на закрытие попапа добавляем cooklie на сутки и удаляем попап
  // function hidePopup(closeClass, pop, cookieKey, cookieMeaning) {
  //   closeClass.click(() => {
  //     pop.removeClass('active').addClass('closes')

  //     if (pop.hasClass('closes')) {
  //       let date = new Date;
  //       date.setDate(date.getDate() + 1);
  //       document.cookie = `${cookieKey}=${cookieMeaning}; path=/; expires=` + date.toUTCString();

  //       let cookie = getCookie(`${cookieKey}`);
  //       if (cookie == `${cookieMeaning}`) pop.remove()
  //     }
  //   })
  // }

  // // Выводим нужный попап при попытке уйти с сайта
  // $(document).mouseleave(function (e) {
  //   if (e.clientY < 10) {
  //     popup.addClass('active')

  //     hidePopup(popupCloses, popup, 'alertwin', 'no')

  //     if (popup2) {
  //       if (alertwin == "no") popup2.addClass('active')
  //       hidePopup(popupCloses2, popup2, 'alertwin2', 'no2')
  //     }

  //     if (popup3) {
  //       if (alertwin2 == "no2") popup3.addClass('active')
  //       hidePopup(popupCloses3, popup3, 'alertwin3', 'no3')
  //     }
  //   }
  // });

});