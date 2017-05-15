$(function () {
  var pathname = location.pathname
  var regex = new RegExp('/', 'g'); // 使用g表示整个字符串都要匹配
  var result = pathname.match(regex);
  var count = !result ? 0 : result.length;
  var path = ''
  if (count > 1) {
    var index = pathname.indexOf('/')
        indexTwo = pathname.indexOf('/', index + 1);
        path = pathname.substring(index, indexTwo)
  } else {
    path = pathname
  }
  switch (path) {
    case '/home':
      $('.headActive').eq(0).addClass('active')
      break;
    case '/ecology':
      $('.headActive').eq(2).addClass('active')
      break;
    case '/intellect':
      $('.headActive').eq(3).addClass('active')
      break;
    case '/college':
      $('.headActive').eq(4).addClass('active')
      break;
    case '/newslatest':
      $('.headActive').eq(5).addClass('active')
      break;
  }
})
