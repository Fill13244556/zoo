const slider = document.getElementById('slider');
const reviews = document.querySelector('.review_list2').children;

slider.addEventListener('input', function() {
    const value = this.value;
    for (let i = 0; i < reviews.length; i++) {
        if (i < value) {
            reviews[i].classList.add('.review_1');
        } else {
            reviews[i].classList.remove('show');
        }
    }
});


$(function() {
    $(".btn-submit").on("click", validate);
   
    // Validate email
    function validateEmail(email) {
      var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return re.test(String(email).toLowerCase());
    }
     
    // send form
    function sendForm() {
      $(".error").text("Form sending").fadeIn();
    }
   
    // validate email and send form after success validation
    function validate() {
      var email = $(".email").val();
      var $error = $(".error");
      $error.text("");
   
      if (validateEmail(email)) {
        $error.fadeOut();
        sendForm();
      } else {
        $error.fadeIn();
        $error.text(email + " is not valid");
      }
      return false;
    }
  });




  let button = document.querySelector('.circle_button');
  let colors = 'orange';
  let currentColorIndex = 0;
 
  button.addEventListener('click', function() {
      button.className = 'circle_button ' + colors[currentColorIndex];
      currentColorIndex = (currentColorIndex + 1) % colors.length;
  });
