$(function () {
  $('.toggle-menu').on('click', function () {
    if (!$('.menus').is(':visible')) {
      $('.menus').velocity('stop')
        .velocity('transition.slideDownIn', { duration: 300 })
    } else {
      $('.menus').velocity('stop')
        .velocity('transition.slideUpOut', { duration: 300 })
    }
  })
  $(document).on('click', function (e) {
    var flag = $('.menus')[0].contains(e.target) || $('.toggle-menu')[0].contains(e.target)
    if (!flag && $('.toggle-menu').is(':visible')) {
      $('.menus').velocity('stop')
        .velocity('transition.slideUpOut', { duration: 300 })
    }
  })
  $(window).on('resize', function (e) {
    if (!$('.toggle-menu').is(':visible')) {
      if (!$('.menus').is(':visible')) {
        $('.menus').velocity('stop')
          .velocity('transition.slideDownIn', { duration: 300 })
      }
    }
  })
  $('body').prepend(`<div id="landlord">
    <div class="message" style="opacity:0"></div>
    <canvas id="live2d" width="280" height="250" class="live2d"></canvas>
    <div class="hide-button">隐藏</div>
</div>`);
  $('head').append(`<link rel="stylesheet" href="../css/live2d.css" />`);
  var message_Path = 'live2d/'
  var home_Path = 'https://xiqing520.com/'
  $('body').append(`<script type="text/javascript" src="/js/live2d.js"></script>`);
  $('body').append(`<script type="text/javascript" src="/js/message.js"></script>`);
    let lastId=Math.ceil(Math.random()*28-1);
    let src='http://api.fghrsh.net/live2d/get/?id=6-'+lastId;
    // let src="../../static/live2d/live2d-widget-model-nipsilon/assets/nipsilon.model.json"
    loadlive2d("live2d", src);

})
