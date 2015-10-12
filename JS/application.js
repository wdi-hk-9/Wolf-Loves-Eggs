$(document).ready(function(){

  var score = 0;
  // 0 == top left
  // 1 == top right
  // 2 == bottom left
  // 3 == bottom right
  var wolfPosition = 0;

  $("#start").on('click', function(){
    console.log("clecked btn");
  });

  // listen to keyboard and:
  // - if 'w' is pressed
  //   --> console.log 'w was pressed'
  //   --> change state of wolfPosition variable, console.log wolfPosition to check
  //   --> update #wolf with corresponding picture
  // - if 'e' is pressed --> console.log 'e was pressed'
  // - if 's' is pressed --> console.log 's was pressed'
  // - if 'd' is pressed --> console.log 'd was pressed'
  //
  $(document).on("keyup", function(){
    console.log()
  });

});