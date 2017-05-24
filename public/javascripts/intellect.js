$(function() {
  $('.quality .item').on('mouseover', function() {
    //$(this).addClass('active');
    $(this).css('box-shadow','5px 5px 3px #b4b4b4');
  })
  $('.quality .item').on('mouseout', function() {
    //$(this).removeClass('active')
    $(this).css('box-shadow','0px 0px 0px transparent');
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
  Array.prototype.max = function () { 
   var max = this[0]; 
   for (var i = 1; i < this.length; i++) {
     if (this[i] > max) {
       max = this[i]; 
     } 
   } 
   return max;
  }
  var arr =[];
  for(var i=0;i<$('.item').length;i++){
    arr.push($('.item').eq(i).height());
  }
  var maxs = arr.max();
  //$('.item').height(maxs);
  $('.item').css('min-height',maxs+'px');

})
