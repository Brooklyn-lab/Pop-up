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





