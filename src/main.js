
// ------------------- Попап ---------------

$(document).ready(function () {
   function show_popup() {
      $('#popup').addClass('active');
   };
   window.setTimeout(show_popup, 5000);
});

$('.popup__close').click(function () {
   $('#popup').removeClass('active');
});