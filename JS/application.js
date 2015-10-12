$(document).ready(function(){

  var score = 0;
  // 0 == top left
  // 1 == top right
  // 2 == bottom left
  // 3 == bottom right
  var wolfPosition = 0;

  $("#start").on('click', function(Z){

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
  var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '90'){
      $('#wolf').attr('src','img/lb.png');
        console.log('You pressed a "Z" key in keaboard');
    }
    else if (keycode == '65'){

      $('#wolf').attr('src','img/lu.png');
        console.log('You pressed a "A" key in keaboard');
    }
    else if (keycode == '88'){

      $('#wolf').attr('src','img/rb.png');
        console.log('You pressed a "X" key in keaboard');
    }
    else if (keycode == '83'){

      $('#wolf').attr('src','img/ru.png');
        console.log('You pressed a "S" key in keaboard');
    }
  });





});