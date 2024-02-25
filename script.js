$(function() {
    $(".btn-submit").on("click", validate);
   
  
    function validateEmail(email) {
      var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return re.test(String(email).toLowerCase());
    }
     
 
    function sendForm() {
      $(".error").text("Form sending").fadeIn();
    }
   
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
