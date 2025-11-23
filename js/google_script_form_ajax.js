var $form = $('form#contactMeform'),
    url = 'https://script.google.com/macros/s/AKfycbxUPsGHtoq1zgrs5vMqE4ex9qH5Cw08WDKJAl5wIiLP9xYgtiM/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault(); 
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
    
    $('#emailSuccess').show(),
    $('#contact').hide()
    
  );
})