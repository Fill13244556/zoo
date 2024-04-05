
    $(function() {
        $(".review_list").show(); // Показываем изначально первые 4 отзыва

        $("#slider-range").slider({
            range: "max",
            min: 0,
            max: 10, 
            value: 0,
            slide: function(event, ui) {
                $(".review_list .review").hide();
                $(".reviews_list .review:lt(" + (ui.value + 4) + ")").show("slide", { direction: "left" }, 500); // Плавное появление следующих отзывов
            }
        });
    });


    function validate(form_id,email) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var address = document.forms[form_id].elements[email].value;
      if(reg.test(address) == false) {
         alert('Введите корректный e-mail');
         return false;
      }
   }
   var currentTextId = null;
   function changeColor(textId) {
    if (currentTextId) {
        var prevTextElement = document.getElementById(currentTextId);
        prevTextElement.style.color = ''; // Возвращаем цвет текста к исходному
    }

    var textElement = document.getElementById(textId);
    textElement.style.color = 'orange'; // Изменяем цвет текстa
    currentTextId = textId;
}
