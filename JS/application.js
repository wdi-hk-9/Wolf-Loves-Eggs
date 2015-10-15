$(document).ready(function(){

  var score = 0;
  var lostEggs = 0;
  var wolfPosition = 0;
  var gameTimer;
  var chiken;
  var Egg = function() {
    this.CSS = [
      'egg-left  egg-topL',    // 0 = Left-Up
      'egg-left  egg-bottom',  // 1 = Left-Bottom
      'egg-right egg-topR',    // 2 = Right-Up
      'egg-right egg-bottom',  // 3 = Right-Bottom
    ];

    this.position = Math.floor(Math.random() *4);
    //this.position = 0;
    // Step of the animation
    // 0 = initial egg
    // 1 = go horizontal in branch
    // 2 = fall down to where it can be catched
    // 3 = fall down to ground
    // 4 = change image to broken egg
    this.step = 0;
    this.timer = 0;
    this.element;
  };

  Egg.prototype.start = function() {
    // Add egg to the screeen
    $('#game').append('<img class="egg" src="img/egg-first.png">');
    // Save the jQuery element in this.$element to use later
    this.element = $('#game :last-child');
    // Position element in screen
    this.element.addClass(this.CSS[this.position]);
    // Start animation timer
    if (this.position < 2) {
      this.timer = setTimeout(this.animateL(this), 1000);
    } else {
      this.timer = setTimeout(this.animateR(this), 1000);
    }
  };

  Egg.prototype.animateL = function(egg) {
    // Horizontal animation
    $(egg.element).animate({left: "+=60"}, 1000, function() {
      // Diagonal animation
      $(this).animate({left: "+=85", top: "+=60"}, 1000, function(){
        // Vertical animation
        $(this).animate({top: "+=30"}, 500, function(){
          // if wolf: stop and delete egg, increase counter
          if (wolfPosition == egg.position) {
            $(this).remove();
            score = score +1;
            console.log('you got the egg');
          } else {
            // if not wolf: animate down
            $(this).animate({top: "+=150", width: "30px"}, 1000, function(){
              $(this).attr('src', 'img/egg-broken-30percent.png');
              // change to broken
              lostEggs = lostEggs + 1;
              if (lostEggs > 4) {
                $('.egg').remove();
                console.log('game over');
                clearInterval(gameTimer);
                $('#banner').html("GAME OVER !!!");
              } else {
                console.log('you lost the egg');
                $('#LostEgg').html(lostEggs);

              }
            });
          }
          $('#scoreEgg').html(score);

        });
      });
    });
  };

  //animation of right side
  Egg.prototype.animateR = function(egg) {
    // Horizontal animation
    $(egg.element).animate({left: "-=60"}, 1000, function() {
      // Diagonal animation
      $(this).animate({left: "-=85", top: "+=60"}, 1000, function(){
        // Vertical animation
        $(this).animate({top: "+=30"}, 500, function(){
          // if wolf: stop and delete egg, increase counter
          if (wolfPosition == egg.position) {
            $(this).remove();
            score = score +1;
            console.log('you got the egg');
          } else {
            // if not wolf: animate down
            $(this).animate({top: "+=145", width: "30px"}, 1000, function(){
              $(this).attr('src', 'img/egg-broken-30percent.png');
              // change to broken
              lostEggs = lostEggs + 1;
              if (lostEggs > 4) {
                console.log('game over');
                $('.egg').remove();
                clearInterval(gameTimer);
                $('#banner').html("GAME OVER !!!");
              } else {
                console.log('you lost the egg');
                $('#LostEgg').html(lostEggs);
              }
            });
          }
          $('#scoreEgg').html(score);

        });
      });
    });
  };

  var generateEggs = function() {
    var newEgg = new Egg();
    newEgg.start();
  };

  $("#start").on('click', function(){
    $('#scoreEgg').html(0);
    $('#LostEgg').html(0);
    gameTimer = setInterval(generateEggs, 1000);
  });

  // listen to keyboard and:
  //   --> update #wolf with corresponding picture
  $(document).on("keyup", function(){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '90'){
      $('#wolf').attr('src','img/lb.png');
      wolfPosition = 1;
    }
    else if (keycode == '65'){
      $('#wolf').attr('src','img/lu.png');
      wolfPosition = 0;
    }
    else if (keycode == '88'){
      $('#wolf').attr('src','img/rbcopy.png');
      wolfPosition = 3;
    }
    else if (keycode == '83'){
      $('#wolf').attr('src','img/rucopy.png');
      wolfPosition = 2;
    }
  });


});