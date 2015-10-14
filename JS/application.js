$(document).ready(function(){

  var score = 0;
  // 0 == top left
  // 1 == top right
  // 2 == bottom left
  // 3 == bottom right
  var wolfPosition = 0;

  $("#start").on('click', function(whereEggGo){

    console.log("clicked btn");

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
//----------------------------------------------------------
// set random number for falling eggs for 4 sides brunches
// --> if random number = 0 ---> assign to left upper brunch
// --> if random number = 1 ---> assign to left low brunch
// --> if random number = 2 ---> assign to right upper brunch
// --> if random number = 3 ---> assign to right low brunch


//--------------------------------------------------------
//set function timeout 5 sec for falling new eggs to random branches
// var timeoutID = setTimeout (whereEggGo, 5000);
var timeoutID = setTimeout (whereEggGo, 1000);

  var randEgg = Math.floor(Math.random() *4);

  function whereEggGo(){
    var newRandEgg = randEgg;
    if (newRandEgg == 0) {
      $('#branch-LU').attr('src', 'img/tree-L1.png');

      console.log("adding time out");
      setTimeout(animeEgg, 500);

      function animeEgg(){

        // set the first image
        $('#branch-LU').attr('src', 'img/tree-L1.png');

        // setTimeout(function(){$('#branch-LU').attr('src', 'img/tree-L1.png');}, 500);

        setTimeout(function(){$('#branch-LU').attr('src', 'img/tree-L2.png');}, 1000);
        setTimeout(function(){$('#branch-LU').attr('src', 'img/tree-L3.png');}, 1500);
        setTimeout(function(){$('#branch-LB').attr('src', 'img/tree-L4.png');}, 2000);
        setTimeout(function(){$('#branch-L-Broken').attr('src', 'img/egg-broken-30percent.png');}, 2500);
        setTimeout(function(){$('#branch-LU').attr('src', 'img/tree-L.png');}, 2200);
        setTimeout(function(){$('#branch-LB').attr('src', 'img/tree-L.png');}, 2500);
      }


    } else if (newRandEgg == 1){
      $('#branch-LB').attr('src', 'img/tree-L1.png');
        setTimeout(function(){$('#branch-LB').attr('src', 'img/tree-L2.png');}, 1000);
        setTimeout(function(){$('#branch-LB').attr('src', 'img/tree-L3.png');}, 1500);
        setTimeout(function(){$('#branch-LB').attr('src', 'img/tree-L4.png');}, 2000);
        setTimeout(function(){$('#branch-L-Broken').attr('src', 'img/egg-broken-30percent.png');}, 2500);
        setTimeout(function(){$('#branch-LU').attr('src', 'img/tree-L.png');}, 2200);
        setTimeout(function(){$('#branch-LB').attr('src', 'img/tree-L.png');}, 2500);
    } else if (newRandEgg == 2){
      $('#branch-RU').attr('src', 'img/tree-R1.png');
        setTimeout(function(){$('#branch-RU').attr('src', 'img/tree-R2.png');}, 1000);
        setTimeout(function(){$('#branch-RU').attr('src', 'img/tree-R3.png');}, 1500);
        setTimeout(function(){$('#branch-RB').attr('src', 'img/tree-R4.png');}, 2000);
        setTimeout(function(){$('#branch-R-Broken').attr('src', 'img/egg-broken-30percent.png');}, 2500);
        setTimeout(function(){$('#branch-RU').attr('src', 'img/tree-R.png');}, 2200);
        setTimeout(function(){$('#branch-RB').attr('src', 'img/tree-R.png');}, 2500);
    } else if (newRandEgg == 3){
      $('#branch-RB').attr('src', 'img/tree-R1.png');
        setTimeout(function(){$('#branch-RB').attr('src', 'img/tree-R2.png');}, 1000);
        setTimeout(function(){$('#branch-RB').attr('src', 'img/tree-R3.png');}, 1500);
        setTimeout(function(){$('#branch-RB').attr('src', 'img/tree-R4.png');}, 2000);
        setTimeout(function(){$('#branch-R-Broken').attr('src', 'img/egg-broken-30percent.png');}, 2500);
        setTimeout(function(){$('#branch-RU').attr('src', 'img/tree-R.png');}, 2200);
        setTimeout(function(){$('#branch-RB').attr('src', 'img/tree-R.png');}, 2500);
    }
}



});