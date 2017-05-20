$(function() {
  window.onscroll = function() {
    if (window.scrollY > 500) {
      $('.returnTop').show()
    } else {
      $('.returnTop').hide()
    }
  }
  $('.returnTop').on('click', function() {
    $('.returnTop').hide()
    $('body,html').stop().animate({scrollTop: 0}, 500)
  })
})
