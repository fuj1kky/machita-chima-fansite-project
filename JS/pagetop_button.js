jQuery(function() {
  var pagetop = $('#page_top');
  pagetop.css('display', 'none');
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) { //100pxスクロールしたら表示
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500); //0.5秒かけてトップへ移動
    return false;
  });
});
