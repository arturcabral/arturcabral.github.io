
//seta a posição
function setImgPosition() {
  //pega a clase e atribui posição
  // $('.lime').each(function() { 
  //   var contW = $('.img-container').width(),
  //     contH = $('.img-container').height(),
  //     maxPosX = (contW - $(this).outerWidth() - 10),
  //     maxPosY = (contH - $(this).outerHeight() - 10),
  //     randPosX = Math.ceil((Math.random() * maxPosX)),
  //     randPosY = Math.ceil((Math.random() * maxPosY)),
  //     randZind = Math.ceil((Math.random() * 3));
  //   $(this).css({
  //     'left': randPosX,
  //     'top': randPosY,
  //     //'z-index': randZind
  //   });
  // });
}


window.onload = setImgPosition;

// // New position button
// $('.new-pos').click(function(e) {
//   e.preventDefault();
//   setImgPosition();
// });

// Draggable - https://codepen.io/chriscoyier/pen/zdsty
$.fn.drags = function(opt) {

  opt = $.extend({
    handle: "",
    cursor: "move"
  }, opt);

  if (opt.handle === "") {
    var $el = this;
  } else {
    var $el = this.find(opt.handle);
  }

  return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
    if (opt.handle === "") {
      var $drag = $(this).addClass('draggable');
    } else {
      var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
    }
    var z_highest = 0,
        drg_h = $drag.outerHeight(),
        drg_w = $drag.outerWidth(),
        pos_y = $drag.offset().top + drg_h - e.pageY,
        pos_x = $drag.offset().left + drg_w - e.pageX;
    // Find the higest z-index
    $(".img").each(function() {
      var z_current = parseInt($(this).css("zIndex"), 10);
      z_highest = Math.max( z_highest, z_current );
    });
    $drag.css('z-index', z_highest + 1).parents().on("mousemove", function(e) {
      $('.draggable').offset({
        top: e.pageY + pos_y - drg_h,
        left: e.pageX + pos_x - drg_w
      }).on("mouseup", function() {
        $(this).removeClass('draggable').css('z-index', z_highest + 2);
      });
    });
    e.preventDefault(); // disable selection
  }).on("mouseup", function() {
    if (opt.handle === "") {
      $(this).removeClass('draggable');
    } else {
      $(this).removeClass('active-handle').parent().removeClass('draggable');
    }
  });

}
$('.img').drags();