$(function() {
  $('.quality .item').on('mouseover', function() {
    $(this).addClass('active')
  })
  $('.quality .item').on('mouseout', function() {
    $(this).removeClass('active')
  })
})
