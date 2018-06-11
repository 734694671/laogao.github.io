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
  if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
      return false;
  }
  $('body').prepend(`<div id="landlord">
                        <div class="message" style="opacity:0"></div>
                        <canvas id="live2d" width="280" height="250" class="live2d"></canvas>
                        <div class="hide-button">隐藏</div>
                    </div>`);
  $('head').append(`<link rel="stylesheet" href="https://xiqing520.com/css/live2d.css" />`);

  $('body').append(`<script type="text/javascript" src="https://xiqing520.com/js/live.min.js"></script>`);
  $('body').append(`<script type="text/javascript" src="https://xiqing520.com/js/message.js"></script>`);
    let lastId=Math.ceil(Math.random()*20);
    let src='https://api.fghrsh.net/live2d/get/?id=6-'+lastId;
    // let src="../../static/live2d/live2d-widget-model-nipsilon/assets/nipsilon.model.json"
    loadlive2d("live2d", src);

})
