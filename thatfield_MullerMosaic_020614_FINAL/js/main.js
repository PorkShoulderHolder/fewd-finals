
$(function() {
  $( ".block-container" ).hide();
  $( "#red-blocks" ).show();

  $( "#red-palette" ).click(function() { $( ".block-container" ).hide(); $( "#red-blocks" ).show() });
  $( "#black-palette" ).click(function() { $( ".block-container" ).hide(); $( "#black-blocks" ).show() });
  
  $( ".block" ).draggable({
    revert: "invalid",
    helper: "clone",
    snapMode: "corner",
    snap: ".grid"
  });

  $( ".grid" ).droppable({
    drop: function( event, ui ) {
      var icon = ui.draggable.clone();
      var angle = 90;

      icon.on("click", function () {
        // get current rotation
        // add 90 degress to it
        // change css to new amount
        $(this).css({'-webkit-transform': 'rotate(' + angle + 'deg)',
           '-moz-transform': 'rotate(' + angle + 'deg)',
             '-o-transform': 'rotate(' + angle + 'deg)',
            '-ms-transform': 'rotate(' + angle + 'deg)'
    });
    angle+=90;
      });

      $( this ).html(icon);
    }
  });

    $("#menu").click(function(){
    $("#info").slideToggle("slow");
  });

  $("#btn").click(function(){
  $(".grid").toggleClass("show");

  });

});
/*


*/


