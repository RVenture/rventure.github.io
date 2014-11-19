$(document).ready(function (){
  $("#arrow").click(function() {
      $('html, body').animate({
          scrollTop: $("#top").offset().top
      }, 2000);
      return false;
  });
});
