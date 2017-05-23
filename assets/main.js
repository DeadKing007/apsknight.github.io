var attribute = ["Aman Pratap Singh",
                 "an Indian",
                 "a CS undergraduate ",
                 "an IITian",
                 "a CS:Go Fanatic",
                 "a Quoraphile",
                 "an ambivert",
                 "an agnostic",
                 "a programmer",
                 "eating pizza",
                 "interested in MEAN stack",
                 "solving Codechef problem"];

var len = attribute.length;

var i = 0;
var j = 0;
function myLoop () {
   var temp = setTimeout(function () {
      $(".magic").append(attribute[i][j]);
      j++;
      if (j <= attribute[i].length) {
         myLoop();
      }
      else {
        setTimeout(function(){
          $(".magic").text("");
          i = (i + 1)%len;
          j = 0;
          myLoop();
        }, 2000);
      }
   }, 130);
};

function blink() {
  setInterval(function() {
    $(".cursor").toggleClass('trans');
  }, 400);
};

$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".name").addClass('trans');
  blink();
  setTimeout(function() {
    myLoop();
    $(".attribute").css("opacity", 1);
  }, 1500);


  $(".main-btn").click(function(){
    $(".main-btn").toggleClass("pulse");
  });

  if($(window).width() >= 1024){
    $(".main-btn").toggleClass("pulse");
    $('.social-icons').append('<li><a class="btn-floating" style="background-color: #0077B5;" href="https://www.linkedin.com/in/aman-pratap-singh-06bab5126/" target="_blank"><i class="fa fa-linkedin"></i></a></li>');
    $('.social-icons').append('<li><a class="btn-floating" style="background-color: #02b875;" href="https://medium.com/@amanpratapsingh" target="_blank"><i class="fa fa-medium"></i></a></li>');
    $('.social-icons').append('<li><a class="btn-floating pink darken-2"><i class="fa fa-instagram" href="https://www.instagram.com/apsknight" target="_blank"></i></a></li>');
    $('.social-icons').append('<li><a class="btn-floating indigo darken-4"><i class="fa fa-steam" href="http://steamcommunity.com/id/amanpratapsingh/" target="_blank"></i></a></li>');
    $(".main-btn").click();
  };
});
