console.log("Hey, I'm connected");

$(document).ready(function() {

    /* ---- Top Player animate code ----*/
var keyCountTop = 0;
    $( 'body' ).on('keydown', function(e) {
      if (e.which === 83 && keyCountTop <= 104){
        $( '.blockOne' ).animate({ 'left': '+=15px' }, 80 );
          /* counts key is presses. As of now, im planning to use this number to determine winner*/
          keyCountTop += 1;
            /* Alert winner */
            if (keyCountTop === 104 && keyCountBottom < 104){
              alert('Player One Wins!')
            }
          console.log(keyCountTop); //Logging in console for testing. Will remove once finished.

      }
          /* ---- Negative penalty if player hits wrong key ---- */
      // else if (e.which === 65 || e.which === 87 || e.which === 69 || e.which === 68 || e.which === 88 || e.which === 90) {
      //   $( ".blockOne" ).animate({ "left": "-=30px" }, 80 );
      // }
    });

    /* ---- Bottom Player animate code ----*/
var keyCountBottom = 0;
    $( 'body' ).on('keydown', function(e) {
      if (e.which === 75 && keyCountBottom <= 104){
        $( '.blockTwo' ).animate({ 'left': '+=15px' }, 80 );
          keyCountBottom += 1;
          console.log(keyCountBottom); //Logging in console for testing. Will remove once finished.
            /* Alert winner */
            if (keyCountBottom === 104 && keyCountTop < 104){
              alert('Player Two Wins!')
            }
      }
      /* ---- Commenting out until i figure out bug. This is causing the game to break*/
      // else if (e.which === 74 || e.which === 73 || e.which === 79 || e.which === 76 || e.which === 188 || e.which === 77); {
      //   $( ".blockTwo" ).animate({ "left": "-=30px" }, 80 );
      // }
    });

 // WINNER: 103 key presses

});



// sudo:

// will want to set winning number of clicks based on browser window width
//       http://stackoverflow.com/questions/1038727/how-to-get-browser-width-using-javascript-code
//
// getting var data to persist after page load. For win counter: http://stackoverflow.com/questions/16206322/how-to-get-js-variable-to-retain-value-after-page-refresh

// need a listener to identify when a button is pressed. Maybe add to a counter, ever 10 presses can be one button push? will need function for that as well. every 10, counter starts over?

// IMPORTANT: still need to identify how to deturmin winner
//
// future: for more complex idea of player turn by typing and using math https://github.com/tzuryby/jquery.hotkeys
