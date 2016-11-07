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
          $('#p1-progress').text(Math.round((keyCountTop / 103) * 100) + '%');
          }
            /* Alert winner */
            if (keyCountTop === 103 && keyCountBottom < 103){
              showText('win-dialog');
              $( function() {
                $( "#win-dialog" )text('Player 1 Wins!').dialog();
              } );
            }
      }
    });
    /* ---- Bottom Player animate code ----*/
var keyCountBottom = 0;
    $( 'body' ).on('keydown', function(e) {
      if (e.which === 75 && keyCountBottom <= 103){
        $( '.blockTwo' ).animate({ 'left': '+=15px' }, 80 );
          keyCountBottom += 1;
          /* Calculates percentage complete and changes text on page to reflect */
          if (keyCountBottom > 0){
            $('#p2-progress').text(Math.round((keyCountBottom / 103) * 100) + '%');
            }
              if (keyCountBottom === 103 && keyCountTop < 103){
                showText('win-dialog');
                $( function() {
                  $( "#win-dialog" ).text('Player 2 Wins!').dialog();
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
    /* ---- Hides the win dialog text until needed. Encountered a bug that showed the text on screen at all times. This is the fix This is reused code that i have used before and got off of stack overflow*/
    function showText(id){
        var elem=document.getElementById(id);
        setTimeout(function(){elem.style.visibility='visible';})
        }
});
