$(function() {
  var h = $(window).height();
  $('#loading_wrapper').css('display', 'none');
  $('#is-loading ,#loading').height(h).css('display', 'block')
});

$(window).on('load', function() {
  $('#is-loading').delay(1500).fadeOut(800);
  $('#loading').delay(1200).fadeOut(300);
  $('#loading_wrapper').css('display', 'block');
});


$(function() {
  setTimeout('stopload()', 10000);
});

function stopload() {
  $('#loading_wrapper').css('display', 'block');
  $('#is-loading').delay(1500).fadeOut(800);
  $('#loading').delay(1200).fadeOut(300);
}
