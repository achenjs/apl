$(function () {
  var pathname = location.pathname
  var regex = new RegExp('/', 'g'); // 使用g表示整个字符串都要匹配
  var result = pathname.match(regex);
  var count = !result ? 0 : result.length;
  var path = ''
  if (count > 1) {
    try {
      var index = pathname.indexOf('/')
        indexTwo = pathname.indexOf('/', index + 1)
        path = pathname.substring(index, indexTwo)
    } catch (e) {

    }
  } else {
    path = pathname
  }
  switch (path) {
    case '/home':
      $('.headActive').eq(0).addClass('active')
      break;
    case '/ecology':
      $('.headActive').eq(1).addClass('active')
      break;
    case '/intellect':
      $('.headActive').eq(2).addClass('active')
      break;
    case '/college':
      $('.headActive').eq(3).addClass('active')
      break;
    case '/newslatest':
      $('.headActive').eq(4).addClass('active')
      break;
  }

  var lang = $('#lang').val()
  if (lang == 'cn') {
    $('.lang').eq(0).addClass('active').siblings().removeClass('active')
  } else if (lang == 'en') {
    $('.lang').eq(1).addClass('active').siblings().removeClass('active')
  }

  //  中英文切换
  $('.lang').on('click', function() {
    $(this).addClass('active').siblings('.lang').removeClass('active')
    axios.get('/lang?lang=' + $(this).attr('lang'))
      .then((result) => {
        location.reload()
      })
  })
})
