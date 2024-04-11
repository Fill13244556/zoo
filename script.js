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
      prevTextElement.style.color = '';  
  } 

  var textElement = document.getElementById(textId); 
  textElement.style.color = 'orange'; 
  currentTextId = textId; 
} 


/* Изменение числа. сделать через дата атрибут*/  

document.querySelectorAll('.circle').forEach(function(button){ 
    button.addEventListener('click', function(){ 
        var chislo = this.getAttribute('data-number');
        document.querySelector('.donation_number').textContent = chislo;
   
    })
})




