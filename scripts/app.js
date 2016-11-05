console.log("Hey, I'm connected");

$(document).ready(function() {

    /* ---- Top Player animate code ----*/
var keyCountTop = 0;
    $( "body" ).on('keydown', function(e) {
      if (e.which === 83){
        $( ".blockOne" ).animate({ "left": "+=15px" }, 80 );
          /* counts key is presses. As of now, im planning to use this number to determine winner*/
          keyCountTop += 1;
          console.log(keyCountTop); //Logging in console for testing. Will remove once finished.
      }
          /* ---- Negative penalty if player hits wrong key ---- */
      else if (e.which === 65 || e.which === 87 || e.which === 69 || e.which === 68 || e.which === 88 || e.which === 90) {
        $( ".blockOne" ).animate({ "left": "-=30px" }, 80 );
      }
    });

    /* ---- Bottom Player animate code ----*/
    $( "#rightTwo" ).click(function() {
    $( ".blockTwo" ).animate({ "left": "+=15px" }, 80 );
    });
          /* Code to move player left */
          // $( "#leftTwo" ).click(function(){
          // $( ".blockTwo" ).animate({ "left": "-=15px" }, 80 );
          // });

});



// sudo:
// Keys s is 83 | k is 75
// will want to set winning number of clicks based on browser window width
//       http://stackoverflow.com/questions/1038727/how-to-get-browser-width-using-javascript-code

// need a listener to identify when a button is pressed. Maybe add to a counter, ever 10 presses can be one button push? will need function for that as well. every 10, counter starts over?

// IMPORTANT: still need to identify how to deturmin winner
//
// future: for more complex idea of player turn by typing and using math https://github.com/tzuryby/jquery.hotkeys
