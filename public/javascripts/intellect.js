$(function() {
  $('.quality .item').on('mouseover', function() {
    $(this).addClass('active')
  })
  $('.quality .item').on('mouseout', function() {
    $(this).removeClass('active')
  })
  var li = $('.equipment').find('ul').find('li');
  for(var i =0 ;i<li.length;i++){
  		var width = $(li[i]).width();
  		$(li[i]).find('.bigB').css('height',width+'px');
  }
  $(window).on('resize',function(){
  		for(var i =0 ;i<li.length;i++){
  			var width = $(li[i]).width();
  			$(li[i]).find('.bigB').css('height',width+'px');
  		}
  })
})
