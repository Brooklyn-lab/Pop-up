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

  let burger = $('.header__burger'); /* Создаем переменную, в которой сам бургер */
  let all = $(
    '.header__logo-link, .header__overlay, .header__button, .menu',
  ); /* Создаем переменную, в которой все классы, которым добавляем active */

  burger.on('click', function () {
    /* Создаем функцию по клику на бургер */ all.toggleClass(
      'active',
    ); /* Добавляем и убираем класс active при клике */
  });

  $('.fa-search').click(function () {
    $('.nav-search__container, .nav-search__input').toggleClass('active');
    $("nav-search__input[type='text']").focus();
  });

  // ------------------- Попап ---------------

  $(document).ready(function () {
    /* Заставляем работать функцию после загрузки всей страницы */ function show_popup() {
      /* Создаем функцию, называем произвольно (show_popup) */ $('#popup').addClass(
        'active',
      ); /* Добавляем класс active попапу, тем самым показываем его на странице */
    }
    window.setTimeout(
      show_popup,
      5000,
    ); /* Заставляем работать функцию через 5 секунд от загрузки страницы */
  });

  $('.popup__close').click(function () {
    /* Создаем функцию, по клику на крестик на попапе */ $('#popup').removeClass(
      'active',
    ); /* Убираем класс active с попапа, тем самым скрывая его со страницы  */
  });

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

jQuery(document).ready(function () {
  $('#all-modal-btn').on('click', function () {
    console.log('1');
    $('.all-modal-main-block').addClass('active-modal');
    function show_popup() {
      $('.all-modal-block').addClass('active-modal-block');
    }
    window.setTimeout(show_popup, 100);
  });
});

const popupLinks = document.querySelectorAll('#all-modal-btn');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.all-modal__close');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.all-modal__popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.all-modal__popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('.open');
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.all-modal__content')) {
        popupClose(e.target.closest('.all-modal__popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index.length > 0; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(() => {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.all-modal__close');
    popupClose(popupActive);
  }
});

(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();

(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();
