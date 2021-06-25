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
jQuery(document).ready(function ($) {

   const countNumber = $('#progresNumber')
   const buttonNext = $('.form__button-next');
   const buttonPrev = $('.card__prev');
   const formContent = $('.form__content');

   let arr = []
   let credits;
   let steps = 1;
   let name = '';
   let lastName = '';
   // let email = '';
   // let id;
   // let dateBirth; 

   function nextQuestion(personalized, name, lastName, idNumber, birthDate, credits, employment, preTax, email, telephone) {
      arr.push(personalized, name, lastName, idNumber, birthDate, credits, employment, preTax, email, telephone)

      // name = name;
      // lastName = lastName;

      // credits = dateValue
      // name = name
      // email = email
   }

   const countUp = () => {
      countNumber.html(function (i, val) {
         if (val >= 8) {
            return 8
         } else if (val > 0 || $('input[name=credits-btn]:checked').length > 0) {
            buttonPrev.removeClass('disable')
            return steps = val * 1 + 1
         }
      })
   }

   const countDown = () => {
      countNumber.html(function (i, val) {
         if (val <= 1) {
            buttonPrev.addClass('disable')
            return 1
         } else if (val <= 2) {
            buttonPrev.addClass('disable')
            return steps = val * 1 - 1
         } else {
            return steps = val * 1 - 1
         }
      });
   }

   const step1 = () =>
      `
         <p class="card__title">Request your personalized loan-proposal</p>
         <div class='form__wrapper'>
            <label for="one-btn" class="form__radio-btn">
               <input type="radio" name='personalized' checked id="one-btn" data-value='5'>
               <span class="form__circle"></span>
               <span class="form__text">Less than €5,000</span>
            </label>
            <label for="two-btn" class="form__radio-btn">
               <input type="radio" name='personalized' id="two-btn" data-value='5/25'>
               <span class="form__circle"></span>
               <span class="form__text">€5,000-€25,000</span>
            </label>
            <label for="three-btn" class="form__radio-btn">
               <input type="radio" name='personalized' id="three-btn" data-value='25'>
               <span class="form__circle"></span>
               <span class="form__text">More than €25,000</span>
            </label>
         </div>
      `

   const step2 = () =>
      `
         <p class="card__title">Fill the rows below to suits better loan-offer for you</p>
         <div class='form__wrapper'>
            <input type="text" name='name' placeholder='First name' class='form__input'>
            <input type="text" name='lastName' placeholder='Last name' class='form__input'>
         </div>
      `

   const step3 = () =>
      `
         <div class='form__wrapper'>
            <input type="text" name='idNumber' placeholder='ID-number' class='form__input'>
            <input type="text" name='birthDate' placeholder='Date of birth' class='form__input'>
         </div>
      `

   const step4 = () =>
      `
         <p class="card__title">Credit score</p>
         <div class='form__wrapper'>
            <label for="four-btn" class="form__radio-btn">
               <input type="radio" name='credits' checked id="four-btn" data-value='<720'>
               <span class="form__circle"></span>
               <span class="form__text">Excellent (720-850)</span>
            </label>
            <label for="fiwe-btn" class="form__radio-btn">
               <input type="radio" name='credits' id="fiwe-btn" data-value='<680'>
               <span class="form__circle"></span>
               <span class="form__text">Good (680-719)</span>
            </label>
            <label for="six-btn" class="form__radio-btn">
               <input type="radio" name='credits' id="six-btn" data-value='<640'>
               <span class="form__circle"></span>
               <span class="form__text">Fair (640-679)</span>
            </label>
            <label for="seven-btn" class="form__radio-btn">
               <input type="radio" name='credits' id="seven-btn" data-value='>639'>
               <span class="form__circle"></span>
               <span class="form__text">Poor (0-639)</span>
            </label>
         </div>
      `

   const step5 = () =>
      `
         <p class="card__title">Employment status</p>
         <div class='form__wrapper'>
            <label for="eight-btn" class="form__radio-btn">
               <input type="radio" checked name='employment' id="eight-btn" data-value='full time'>
               <span class="form__circle"></span>
               <span class="form__text">Full Time</span>
            </label>
            <label for="nine-btn" class="form__radio-btn">
               <input type="radio" name='employment' id="nine-btn" data-value='part time'>
               <span class="form__circle"></span>
               <span class="form__text">Part Time</span>
            </label>
            <label for="ten-btn" class="form__radio-btn">
               <input type="radio" name='employment' id="ten-btn" data-value='employed'>
               <span class="form__circle"></span>
               <span class="form__text">Self-Employed</span>
            </label>
            <label for="eleven-btn" class="form__radio-btn">
               <input type="radio" name='employment' id="eleven-btn" data-value='unemployed'>
               <span class="form__circle"></span>
               <span class="form__text">Unemployed</span>
            </label>
            <label for="twelve-btn" class="form__radio-btn">
               <input type="radio" name='employment' id="twelve-btn" data-value='other'>
               <span class="form__circle"></span>
               <span class="form__text">Other</span>
            </label>
         </div>   
      `

   const step6 = () =>
      `
         <p class="card__title">What’s your yearly pre-tax income?</p>
         <div class='form__wrapper'>
            <input type="text" name='preTax' placeholder='€ 90.000' class='form__input'> 
         </div>
      `

   const step7 = () =>
      `
         <p class="card__title">How do we contact you?</p>
         <div class='form__wrapper'>
            <input type="email" name='email' placeholder='E-mail' class='form__input'>
            <input type="tel" name='telephone' placeholder='+1 201-555-0123' class='form__input'>
         </div>
      `

   if ($('input[name=credits-btn]:checked').length === 0) {
      formContent.html(step1())
   }

   buttonNext.click(function (event) {
      event.preventDefault();

      if (steps === 1 && $('input[name=personalized]:checked').length != 0) {
         nextQuestion($('input[name=personalized]:checked').attr('data-value'))
         countUp()
         formContent.html(step2())
      } else if (steps === 2 && $('input[name=name]').val().length != 0 && $('input[name=lastName]').val().length != 0) {
         nextQuestion($('input[name=name]').val(), $('input[name=lastName]').val())
         countUp()
         formContent.html(step3())
      } else if (steps === 3 && $('input[name=idNumber]').val().length != 0 && $('input[name=birthDate]').val().length != 0) {
         nextQuestion($('input[name=idNumber]').val(), $('input[name=birthDate]').val())
         countUp()
         formContent.html(step4())
      } else if (steps === 4 && $('input[name=credits]:checked').length != 0) {
         nextQuestion($('input[name=credits]:checked').attr('data-value'))
         countUp()
         formContent.html(step5())
      } else if (steps === 5 && $('input[name=employment]:checked').length != 0) {
         nextQuestion($('input[name=employment]:checked').attr('data-value'))
         countUp()
         formContent.html(step6())
      } else if (steps === 6 && $('input[name=preTax]').val().length != 0) {
         nextQuestion($('input[name=preTax]').val())
         countUp()
         formContent.html(step7())
      } else if (steps === 7 && $('input[name=email]').val().length != 0 && $('input[name=telephone]').val().length != 0) {
         nextQuestion($('input[name=email]').val(), $('input[name=telephone]').val())
         console.log(arr.join(', '))
         countUp()
         formContent.html(step8())

      }
   })

   buttonPrev.click(function (event) {
      event.preventDefault();

      if (steps === 2) {
         countDown()
         formContent.html(step1())
      } else if (steps === 3) {
         countDown()
         formContent.html(step2())
      } else if (steps === 4) {
         countDown()
         formContent.html(step3())
      } else if (steps === 5) {
         countDown()
         formContent.html(step4())
      } else if (steps === 6) {
         countDown()
         formContent.html(step5())
      } else if (steps === 7) {
         countDown()
         formContent.html(step6())
      } else if (steps === 8) {
         countDown()
         formContent.html(step7())
      }
   });

})





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

  //--------------------------------------------
});