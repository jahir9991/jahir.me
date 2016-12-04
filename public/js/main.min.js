new WOW().init();
function menuToggle() {
  var windowWidth = $(window).width();

  if (windowWidth > 767) {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 10) {
        $('.main-nav').addClass('fixed-menu animated slideInDown');
      } else {
        $('.main-nav').removeClass('fixed-menu animated slideInDown');
      }
    });
  } else {

    $('.main-nav').addClass('fixed-menu animated slideInDown');
  }
}


$(window).resize(function () {
  menuToggle();
});


$(".fab").on('click', function () {
  $(this).addClass("new-message");
  $("form").removeClass("hidden");
  $(".message").attr("class", "message hidden");

})


$(".send").on('click', function (e) {
  $(".fab").removeClass("new-message");
  $(".fab").addClass("return");
  $("form").addClass("hidden");
  $(".message").attr("class", "message");
  e.stopPropagation();
})



var path = '/data/test.json';

function test() {
  var animData = {
    wrapper: document.getElementById('test'),
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: path
  };
  var anim = bodymovin.loadAnimation(animData);
}


