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
   // const slidePage = $(".slide-page");
   // const btnNext = $(".form__button-next");
   // const countNumber = $('#progresNumber');
   // const btnPrev = $('.survey__prev');
   // const numberSteps = $('.form__body').length + 1;

   // let steps = 1;
   // let zeroMargin = 0;

   // const margin = () => {
   //    zeroMargin.toFixed(2)
   //    slidePage.css('marginLeft', `${zeroMargin}%`)
   // }

   // const countUp = () => {
   //    countNumber.html(function (i, val) {
   //       if (val >= numberSteps) {
   //          return numberSteps
   //       } else if (val > 0) {
   //          btnPrev.removeClass('disable')
   //          zeroMargin += -14.28
   //          return (
   //             margin(),
   //             steps = val * 1 + 1
   //          )
   //       }
   //    })
   // }

   // const countDown = () => {
   //    countNumber.html(function (i, val) {
   //       if (val <= 1) {
   //          btnPrev.addClass('disable')
   //          return 1
   //       } else if (val <= 2) {
   //          btnPrev.addClass('disable')
   //          zeroMargin -= -14.28
   //          return (
   //             margin(),
   //             steps = val * 1 - 1
   //          )
   //       } else {
   //          zeroMargin -= -14.28
   //          return (
   //             margin(),
   //             steps = val * 1 - 1
   //          )
   //       }
   //    });
   // }

   // btnPrev.click(function (event) {
   //    event.preventDefault();

   //    if ($('input').hasClass('error')) {
   //       return
   //    } else if (steps <= 7) {
   //       btnNext.removeClass('hidden')
   //       btnNext.removeAttr('data-submit')
   //       countDown()
   //    } else if (steps <= 8) {
   //       btnNext.removeClass('hidden')
   //       countDown()
   //    } else {
   //       countDown()
   //    }
   // })

   // btnNext.click(function (event) {
   //    event.preventDefault();

   //    if ($('input').hasClass('error')) {
   //       return
   //    } else if (steps === 1 && $('input[name=radio]:checked').length != 0) {
   //       countUp()
   //    } else if (steps === 2 && $('input[name=name]').val().length != 0 && $('input[name=lastName]').val().length != 0) {
   //       countUp()
   //    } else if (steps === 3 && $('input[name=idNumber]').val().length != 0 && $('input[name=birthDate]').val().length != 0) {
   //       countUp()
   //    } else if (steps === 4 && $('input[name=radio2]:checked').length != 0) {
   //       countUp()
   //    } else if (steps === 5 && $('input[name=radio3]:checked').length != 0) {
   //       countUp()
   //    } else if (steps === 6 && $('input[name=preTax]').val().length != 0) {
   //       $(this).attr('data-submit', '')
   //       countUp()
   //    } else if (steps === 7 && $('input[name=email]').val().length != 0 && $('input[name=telephone]').val().length != 0) {
   //       btnNext.addClass('hidden')
   //       countUp()
   //    }
   // })

   // $('[data-submit]').on('click', function (e) {
   //    e.preventDefault();
   //    $(this).parent('form').submit();
   // })
   // $.validator.addMethod(
   //    "regex",
   //    function (value, element, regexp) {
   //       var re = new RegExp(regexp);
   //       return this.optional(element) || re.test(value);
   //    },
   //    "Please check your input."
   // );

   // // Функция валидации и вывода сообщений
   // function valEl(el) {

   //    el.validate({
   //       rules: {
   //          name: {
   //             required: true,
   //             minlength: 3,
   //          },
   //          lastName: {
   //             required: true,
   //             minlength: 3,
   //          },
   //          idNumber: {
   //             required: true,
   //             minlength: 3,
   //          },
   //          birthDate: {
   //             required: true
   //          },
   //          preTax: {
   //             required: true
   //          },
   //          tel: {
   //             required: true,
   //             regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
   //          },
   //          email: {
   //             required: true,
   //             email: true
   //          }
   //       },
   //       // messages: {
   //       //    tel: {
   //       //       required: 'Поле обязательно для заполнения',
   //       //       regex: 'Телефон может содержать символы + - ()'
   //       //    },
   //       //    name: {
   //       //       required: 'Поле обязательно для заполнения',
   //       //    },
   //       //    email: {
   //       //       required: 'Поле обязательно для заполнения',
   //       //       email: 'Неверный формат E-mail'
   //       //    }
   //       // },

   //       // Начинаем проверку id="" формы
   //       submitHandler: function (form) {
   //          $('.preloader').fadeIn();
   //          var $form = $(form);
   //          var $formId = $(form).attr('id');
   //          switch ($formId) {
   //             // Если у формы id="goToNewPage" - делаем:
   //             case 'goToNewPage':
   //                $.ajax({
   //                   type: 'POST',
   //                   url: $form.attr('action'),
   //                   data: $form.serialize(),
   //                })
   //                   .always(function (response) {
   //                      //ссылка на страницу "спасибо" - редирект
   //                      location.href = 'https://wayup.in/lm/landing-page-marathon/success';
   //                      //отправка целей в Я.Метрику и Google Analytics
   //                      ga('send', 'event', 'masterklass7', 'register');
   //                      yaCounter27714603.reachGoal('lm17lead');
   //                   });
   //                break;
   //             // Если у формы id="popupResult" - делаем:
   //             case 'popupResult':
   //                $.ajax({
   //                   type: 'POST',
   //                   url: $form.attr('action'),
   //                   data: $form.serialize(),
   //                })
   //                   .always(function (response) {
   //                      setTimeout(function () {
   //                         $('.preloader').fadeOut();
   //                      }, 800);
   //                      // setTimeout(function () {
   //                      //    $('#overlay').fadeIn();
   //                      //    $form.trigger('reset');
   //                      //    //строки для остлеживания целей в Я.Метрике и Google Analytics
   //                      // }, 1100);
   //                      // $('#overlay').on('click', function (e) {
   //                      //    $(this).fadeOut();
   //                      // });

   //                   });
   //                break;
   //          }
   //          return false;
   //       }
   //    })
   // }

   // // Запускаем механизм валидации форм, если у них есть класс .js-form
   // $('.js-form').each(function () {
   //    valEl($(this));
   // });

   // $("#date").mask("99/99/9999");

   const form = $('.form');
   const countNumber = $('#progresNumber');
   const buttonNext = $('.form__button-next');
   const buttonPrev = $('.survey__prev');
   const formContent = $('.form__content');
   const buttonReset = $('#buttonReset');

   let steps = 1;
   let date = {
      personalizedValue = '',
      nameValue = '',
      lastNameValue = '',
      idNumberValue = '',
      birthDateValue = '',
      creditsValue = '',
      employmentValue = '',
      preTaxValue = '',
      emailValue = '',
      telephoneValue = '',
   }

   buttonReset.hide();

   buttonReset.click(function () {
      form.trigger('reset');
   })

   const formValidate = function () {
      form.validate({
         rules: {
            name: {
               required: true,
               minlength: 3,
            },
            lastName: {
               required: true,
               minlength: 3,
            },
            idNumber: {
               required: true,
               minlength: 3,
            },
            birthDate: {
               required: true
            },
            preTax: {
               required: true
            },
            tel: {
               required: true,
               regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            email: {
               required: true,
               email: true
            }
         },
      })
   }

   formValidate();

   const addCheckInput = function () {
      let allInputs = $('.form__wrapper').find('input');
      $.each(allInputs, function (index, value) {
         if ($(this).attr('data-value') == date.personalizedValue) {
            $(this).attr('checked', '')
         } else if ($(this).attr('data-value') == date.creditsValue) {
            $(this).attr('checked', '')
         } else if ($(this).attr('data-value') == date.employmentValue) {
            $(this).attr('checked', '')
         }
      })
   }

   //  Счетчик степов вверх
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

   //  Счетчик степов вниз
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
      <p class="survey__title">Request your personalized loan-proposal</p>
      <div class='form__wrapper'>
         <label for="one-btn" class="form__radio-btn">
            <input type="radio" name='personalized' id="one-btn" data-value='5'>
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
      <p class="survey__title">Fill the rows below to suits better loan-offer for you</p>
      <div class='form__wrapper'>
         <input type="text" name='name' placeholder='First name' class='form__input' require>
         <input type="text" name='lastName' placeholder='Last name' class='form__input' require>
      </div>
   `

   const step3 = () =>
      `
         <div class='form__wrapper'>
            <input id='idNumber' type="number" name='idNumber' placeholder='ID-number' class='form__input' require>
            <input type="text" id='date' name='birthDate' placeholder='Date of birth' class='form__input' require>
         </div>
      `

   const step4 = () =>
      `
         <p class="survey__title">Credit score</p>
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
         <p class="survey__title">Employment status</p>
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
         <p class="survey__title">What’s your yearly pre-tax income?</p>
         <div class='form__wrapper'>
            <input id='preTax' type="number" name='preTax' placeholder='€ 90.000' class='form__input' require> 
         </div>
      `

   const step7 = () =>
      `
         <p class="survey__title">How do we contact you?</p>
         <div class='form__wrapper'>
            <input type="email" name='email' placeholder='E-mail' class='form__input' require>
            <input type="tel" id='phone' name='telephone' placeholder='+1 201-555-0123' class='form__input' require>
         </div>
      `

   const step8 = () =>
      `
      <p class="survey__title">Thank you for filling out the form!</p>
      <p class="survey__title">We’ll send you an email with loan-information in 24h at the email address you provided. </p>
      <p>Respectfully, The <span>[Your Company]</span> Team</p>
      `

   // Показывает изначально 1й степ.
   if ($('input[name=credits-btn]:checked').length === 0) {
      formContent.html(step1())
   }

   let inputValue = (name) => $(`input[name=${name}]`).val();
   let inputCheckedValue = (name) => $(`input[name=${name}]:checked`).attr('data-value');
   let inputCheckedLength = (name) => $(`input[name=${name}]:checked`).length != 0;
   let inputValueLength = (name) => $(`input[name=${name}]`).val().length != 0;

   // По клику показывать степы
   buttonNext.click(function (event) {
      event.preventDefault();

      if (steps === 1 && inputCheckedLength('personalized')) {
         (() => date.personalizedValue = inputCheckedValue('personalized'))();
         countUp()
         formContent.html(step2())
         $(`input[name=name]`).val(`${date.nameValue}`)
         $(`input[name=lastName]`).val(`${date.lastNameValue}`)
      } else if (steps === 2 && inputValueLength('name') && inputValueLength('lastName')) {
         (() => {
            date.nameValue = inputValue('name');
            date.lastNameValue = inputValue('lastName');
         })();
         countUp()
         formContent.html(step3())
         $('#date').mask('99/99/99')
         $(`input[name=idNumber]`).val(`${date.idNumberValue}`)
         $(`input[name=birthDate]`).val(`${date.birthDateValue}`)
      } else if (steps === 3 && inputValueLength('idNumber') && inputValueLength('birthDate')) {
         (() => {
            date.idNumberValue = inputValue('idNumber');
            date.birthDateValue = inputValue('birthDate');
         })()
         countUp()
         formContent.html(step4())
      } else if (steps === 4 && inputCheckedLength('credits')) {
         (() => date.creditsValue = inputCheckedValue('credits'))()
         countUp()
         formContent.html(step5())
      } else if (steps === 5 && inputCheckedLength('employment')) {
         (() => date.employmentValue = inputCheckedValue('employment'))()
         countUp()
         formContent.html(step6())
         $(`input[name=preTax]`).val(`${date.preTaxValue}`)
      } else if (steps === 6 && inputValueLength('preTax')) {
         (() => date.preTaxValue = inputValue('preTax'))()
         countUp()
         formContent.html(step7())
         $('#phone').mask('+9 (999) 999-99-99')
         $(`input[name=email]`).val(`${date.emailValue}`)
         $(`input[name=telephone]`).val(`${date.telephoneValue}`)
      } else if (steps === 7 && inputValueLength('email') && inputValueLength('telephone')) {
         (() => {
            date.emailValue = inputValue('email');
            date.telephoneValue = inputValue('telephone');
         })()
         countUp()
         console.log(date)
         formContent.html(step8())
         buttonPrev.hide()
         buttonReset.show()
      }
   })

   buttonPrev.click(function (event) {
      event.preventDefault();

      switch (steps) {
         case 2: {
            countDown()
            formContent.html(step1())
            addCheckInput()
            break;
         }
         case 3: {
            countDown()
            formContent.html(step2())
            $(`input[name=name]`).val(`${date.nameValue}`)
            $(`input[name=lastName]`).val(`${date.lastNameValue}`)
            break;
         }
         case 4: {
            countDown()
            formContent.html(step3())
            $(`input[name=idNumber]`).val(`${date.idNumberValue}`)
            $(`input[name=birthDate]`).val(`${date.birthDateValue}`)
            break;
         }
         case 5: {
            countDown()
            formContent.html(step4())
            addCheckInput()
            break;
         }
         case 6: {
            countDown()
            formContent.html(step5())
            addCheckInput()
            break;
         }
         case 7: {
            countDown()
            formContent.html(step6())
            $(`input[name=preTax]`).val(`${date.preTaxValue}`)
            break;
         }
         case 8: {
            countDown()
            formContent.html(step7())
            buttonReset.hide()
            buttonPrev.show()
            $(`input[name=email]`).val(`${date.emailValue}`)
            $(`input[name=telephone]`).val(`${date.telephoneValue}`)
            break;
         }
      }
   })















































})
















;
jQuery(document).ready(function () {

   const form = $('.form');
   const countNumber = $('#progresNumber');
   const buttonNext = $('.form__button-next');

   let steps = 1;

   //  Счетчик степов вверх
   const countUp = () => {
      countNumber.html(function (i, val) {
         if (val >= 8) {
            return 8
         } else if (val > 0) {
            return steps = val * 1 + 1
         }
      })
   }

   const step1 = () =>
      `
      <label for="one-btn" class="form__radio-btn">
         <input type="radio" name='shop' id="one-btn" data-value='1'>
         <span class="form__circle"></span>
         <span class="form__text">Daily</span>
      </label>
      <label for="two-btn" class="form__radio-btn">
         <input type="radio" name='shop' id="two-btn" data-value='2'>
         <span class="form__circle"></span>
         <span class="form__text">Once in 2-3 days</span>
      </label>
      <label for="three-btn" class="form__radio-btn">
         <input type="radio" name='shop' id="three-btn" data-value='3'>
         <span class="form__circle"></span>
         <span class="form__text">Weekly</span>
      </label>
      <label for="four-btn" class="form__radio-btn">
         <input type="radio" name='shop' id="four-btn" data-value='4'>
         <span class="form__circle"></span>
         <span class="form__text">Monthly</span>
      </label>
      <label for="five-btn" class="form__radio-btn">
         <input type="radio" name='shop' id="five-btn" data-value='5'>
         <span class="form__circle"></span>
         <span class="form__text">Once in 2-3 months</span>
      </label>
      <label for="six-btn" class="form__radio-btn">
         <input type="radio" name='shop' id="six-btn" data-value='6'>
         <span class="form__circle"></span>
         <span class="form__text">When I'm free</span>
      </label>
      <label for="seven-btn" class="form__radio-btn">
         <input type="radio" name='shop' id="seven-btn" data-value='7'>
         <span class="form__circle"></span>
         <span class="form__text">Other</span>
      </label>
      <input type="text" name='specify' id="one-btn" placeholder='please specify'>
   `

   if ($('input[name=credits-btn]:checked').length === 0) {
      formContent.html(step1())
   }

});

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


  $('a').click(function (e) { e.preventDefault() })


  //-----------------------------------------------

  // var granimInstance = new Granim({
  //   element: '#circle',
  //   direction: 'left-right',
  //   isPausedWhenNotInView: true,
  //   states: {
  //     "default-state": {
  //       gradients: [
  //         [
  //           { color: '#833ab4', pos: .2 },
  //           { color: '#fd1d1d', pos: .8 },
  //           { color: '#38ef7d', pos: 1 }
  //         ], [
  //           { color: '#40e0d0', pos: 0 },
  //           { color: '#ff8c00', pos: .2 },
  //           { color: '#ff0080', pos: .75 }
  //         ],
  //       ]
  //     }
  //   }
  // });

  var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image: {
      source: '../img/pik7.jpeg',
      position: ['center', 'bottom'],
      stretchMode: ['stretch', 'stretch-if-bigger'],
      blendingMode: 'multiply'
    },
    states: {
      "default-state": {
        gradients: [
          // ['#29323c', '#485563'],
          // ['#FF6B6B', '#556270'],
          // ['#80d3fe', '#7ea0c4'],
          // ['#f0ab51', '#eceba3']
          ['#30cfd0', '#330867'],
          ['#a7a6cb', '#8989ba'],
          ['#13547a', '#80d0c7'],
          ['#fff1eb', '#ace0f9'],
          ['#ff0000', '#000021'],
        ],
        transitionSpeed: 3000
      }
    }
  });

});