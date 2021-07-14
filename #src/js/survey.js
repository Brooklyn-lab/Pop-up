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

})