$(document).ready(function (){
  $("#love").click(function() {
      $('html, body').animate({
          scrollTop: $("#fullscreen2").offset().top
      }, 2000);
      return false;
  });
  $("#clients").click(function() {
      $('html, body').animate({
          scrollTop: $("#fullscreen3").offset().top
      }, 2000);
      return false;
  });
  $("#work").click(function() {
      $('html, body').animate({
          scrollTop: $("#fullscreen4").offset().top
      }, 2000);
      return false;
  });
  $("#team").click(function() {
      $('html, body').animate({
          scrollTop: $("#fullscreen5").offset().top
      }, 2000);
      return false;
  });
  $("#chat").click(function() {
      $('html, body').animate({
          scrollTop: $("#fullscreen6").offset().top
      }, 2000);
      return false;
  });
});
