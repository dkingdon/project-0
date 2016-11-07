console.log("Hey, I'm connected");

$(document).ready(function() {

    /* ---- Top Player animate code ----*/
var keyCountTop = 0;
    $( 'body' ).on('keydown', function(e) {
      if (e.which === 83 && keyCountTop <= 104){
        $( '.blockOne' ).animate({ 'left': '+=15px' }, 80 );
          /* counts key is presses. As of now, im planning to use this number to determine winner*/
          keyCountTop += 1;
          /* Calculates percentage complete and changes text on page to reflect */
          if (keyCountTop > 0){
          $('#p1-progress').text(Math.round((keyCountTop / 104) * 100) + '%');
          }
            /* Alert winner */
            if (keyCountTop === 104 && keyCountBottom < 104){
              showText('p1-win-dialog');
              $( function() {
                $( "#p1-win-dialog" ).dialog();
              } );
            }
          console.log(keyCountTop); //Logging in console for testing. Will remove once finished.
      }
    });

    /* ---- Bottom Player animate code ----*/
var keyCountBottom = 0;
    $( 'body' ).on('keydown', function(e) {
      if (e.which === 75 && keyCountBottom <= 104){
        $( '.blockTwo' ).animate({ 'left': '+=15px' }, 80 );
          keyCountBottom += 1;
          /* Calculates percentage complete and changes text on page to reflect */
          if (keyCountBottom > 0){
          $('#p2-progress').text(Math.round((keyCountBottom / 104) * 100) + '%');
          }
          console.log(keyCountBottom); //Logging in console for testing. Will remove once finished.
            /* Alert winner */
            if (keyCountBottom === 104 && keyCountTop < 104){
              showText('p2-win-dialog');
              $( function() {
                $( "#p1-win-dialog" ).dialog();
              } );
            }
      }
    });

    /* ---- jQuery UI intro modal ---- */
    $( function() {
      $( "#dialog" ).dialog({
        autoOpen: true,
        minWidth: 800,
        show: {
          effect: "blind",
          duration: 1200
        },
        hide: {
          effect: "clip",
          duration: 700
        }
      });
    } );

    /* ---- Play button countdown initiation ---- */
    $('button').on('click', function(event){
      event.preventDefault();
      var index = 0;
      var countdown = [3, 2, 1, 'GO', ' '];
          $(function() { setInterval(function(){
            $('#countdown').text(countdown[index++]).css('font-size', '250px');}, 1000); });
    })


    /* ---- Hides the win dialog text until needed. Encountered a bug that showed the text on screen at all times. This is the fix */
function showText(id){
    var elem=document.getElementById(id);
    setTimeout(function(){elem.style.visibility='visible';})
    }

});



// sudo:

// getting var data to persist after page load. For win counter: http://stackoverflow.com/questions/16206322/how-to-get-js-variable-to-retain-value-after-page-refresh
