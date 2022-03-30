@@include('webP.js');
@@include('form.js');
@@include('survey.js');

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

  // Count 24h --------------------------------------

  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.days');
  const $hours = document.querySelector('.hours');
  const $minutes = document.querySelector('.minutes');
  const $seconds = document.querySelector('.seconds');

  // конечная дата
  const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 01);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);

  // Count 5 min-------------------------------------------

  function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  (function () {
    let fiveMinutes = 60 * 5,
      display = $('#count');
    startTimer(fiveMinutes, display);
  })()

  // Date ------------------------------------------
  var objToday = new Date(),
    domEnder = function () {
      var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return ""; a = parseInt((a + "").charAt(1)); return 1 == a ? "" : 2 == a ? "" : 3 == a ? "" : ""
    }(),
    dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear();

  var today = `${dayOfMonth}. ${curMonth} ${curYear}`

  $('#newDate').html(today);


  //------------Smooth scroll-------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Обратный отсчет
  var minute = 60;  // желаемое время таймера в минутах (5 минут)
  var date = new Date(); // получаем сегодняшнюю дату и время
  var deadlineTime = date.setMinutes(date.getMinutes() + minute); // устанавливаем таймер на 5 минут
  // обновляем скрипт каждую секунду - так мы получаем обратный отсчет	
  var countdown = setInterval(function () {
    var now = new Date().getTime(); // текущее время
    var restTime = deadlineTime - now; // находим различие между текущим моментом и временем дедлайна
    // преобразовываем значение миллисекунд в минуты и секунды
    var minute = Math.floor((restTime % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((restTime % (1000 * 60)) / 1000);
    // если значение текущей минуты или секунды меньше 10, добавляем вначале ведущий ноль
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    // отображаем результат таймера в элементе с id="deadline-timer"
    document.getElementById("time").innerHTML = `00:${minute}:${second}`;
    // когда обратный отсчет закончился, отображаем соответствующее уведомление
    if (restTime < 0) {
      clearInterval(countdown);
    }
  }, 1000);

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

  //--------------------------------------------


  $('a').click(function (e) { e.preventDefault() })



});