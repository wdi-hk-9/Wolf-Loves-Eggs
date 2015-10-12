$(document).ready(function(){

  var score = 0;

  // Generate random 4 numbers in an interval for falling eggs
  var eggRand = function(){
    return Math.floor(Math.random() * 4);
    console.log(eggRand);
  };

  // activate Button click
  $("#start").on('click', function(){
    console.log("clecked btn");
  });

});