//expand textbox on click
$('#email').focus(function()
{
    /*to make this flexible, I'm storing the current width in an attribute*/
    $(this).attr('data-default', $(this).width());
    $(this).animate({ width: 401 }, 'slow');
}).blur(function()
{
    /* lookup the original width */
    var w = $(this).attr('data-default');
    $(this).animate({ width: w }, 'slow');
});

//cool slide in
$('#everything').addClass('animated fadeInDown');

$( "#target" ).keyup(function() {
  alert( "Handler for .keyup() called." );
});

/* display thank you on enter
$( "#email" ).keyup(function() {
  alert( "Handler for .keyup() called." );
});
*/

// I want to display thank you on enter


$( "#email" ).keyup(function() {
      console.log( event.type + ": " + event.which );
      var code = event.keyCode || event.which;
		 if(event.which == 13) { //Enter keycode
		   //Do something
		   console.log('ENTER');
		   /*
		   $(input).attr("placeholder", "Type your answer here");
		   document.getElementById("#email").value='text to be displayed' ;
		   */

		   $('#email').val('Thank you!');
		   $('#email').blur();
		   $('#email').disableSelection();
		 }
      });
