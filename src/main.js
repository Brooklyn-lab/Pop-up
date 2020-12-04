jQuery(document).ready(function () {

   let burger = $(".header__burger"); /* Создаем переменную, в которой сам бургер */
   let all = $(".header__logo-link, .header__overlay, .header__button, .menu"); /* Создаем переменную, в которой все классы, которым добавляем active */

   burger.on("click", function () { /* Создаем функцию по клику на бургер */
      all.toggleClass("active"); /* Добавляем и убираем класс active при клике */
   })

   $(".fa-search").click(function(){
      $(".nav-search__container, .nav-search__input").toggleClass("active");
      $("nav-search__input[type='text']").focus();
  });

   // ------------------- Попап ---------------

   $(document).ready(function () { /* Заставляем работать функцию после загрузки всей страницы */
      function show_popup() { /* Создаем функцию, называем произвольно (show_popup) */
         $('#popup').addClass('active'); /* Добавляем класс active попапу, тем самым показываем его на странице */
      };
      window.setTimeout(show_popup, 5000); /* Заставляем работать функцию через 5 секунд от загрузки страницы */
   });

   $('.popup__close').click(function () {  /* Создаем функцию, по клику на крестик на попапе */
      $('#popup').removeClass('active');  /* Убираем класс active с попапа, тем самым скрывая его со страницы  */
   });

   //-------------footer-date------------------------

   let date = new Date().getFullYear(); /* Создаем переменную, в которой (new Date().getFullYear()) - текущий год */
   $("#date").text(new Date().getFullYear()); /* Находим нужный отрезок в html, чтобы заменить его на текущий год */

   // ----------------- плавный скролл по странице к нужному месту -----------

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


      $("#menu, #ancor").on("click", "a", function (event) { /* Создаем функцию, по клику на якорь и меню (2 действия в одной функции, можно отделить убран не нужный id) */
         event.preventDefault();
         let id = $(this).attr('href'), /* Создаем переменную, в которой обращаемся к хрефу на текущей странице */
            top = $(id).offset().top; /* Создаем переменную, в которой обращаемся к хрефу на текущей странице выше и возвращаем объект к верхней точке на странице */
         $('body,html').animate({ scrollTop: top }, 1500); /* Задаем анимацию с какой скоростью произойдет скролл к верху страницы */
      });

   });

});