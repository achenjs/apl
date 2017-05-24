(function() {
  var URL = 'https://apl-static.oss-cn-beijing.aliyuncs.com/'

  // $('.header').addClass('active')

  $('.carouselSwiper').css('height', $(window).height())
  $(window).on('resize', function() {
    $('.carouselSwiper').css('height', $(window).height())
  })
  //  轮播图列表
  axios('/carousel')
  .then(function(result) {
    var data = result.data.result.carousels
    var str = ''
    for (let i in data) {
      if (data[i].url) {
        str += '<div class="swiper-slide" style="background-image: url('+ URL + data[i].url +')">'
        +'<div class="content"><div class="box"><div class="title">'+ data[i].title +'</div>'
        +'<div class="des">'+data[i].description+'</div></div></div>'
        +'</div>'
      }
    }
    $('.carouselContent').append(str)
    var mySwiper = new Swiper ('.carouselSwiper', {
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      paginationElement : 'li',
      paginationClickable: true,
      // 如果需要前进后退按钮
      nextButton: '.carousel-next',
      prevButton: '.carousel-prev',
      autoplay: 4000
    })
  })
  axios('/article')
    .then(function(result) {
      var data = result.data.result
      var list = data.items
      var str = ''
      try {
        var length = list.length
        if (length > 2) {
          length = 2
        }
        for (let i = 0; i < length; i++) {
          var newTime = new Date(list[i].gmt_create)
          var year = newTime.getFullYear()
          var month = newTime.getMonth() + 1
          var date = newTime.getDate()
          month = month < 10 ? '0' + month : month
          date = date < 10 ? '0' + date : date
          //var content = list[i].content.substr(0,150)+'...';
          str += '<dl>'
          +'<dt><a href="/article/'+list[i].uuid+'.html" target="_blank"><i style="background:url('+ URL + list[i].cover +')"></i></dt>'
          +'<dd>'
          +'<h5>'
          +'<a href="/article/'+list[i].uuid+'.html">'
          +'<i></i><span title="'+list[i].title+'">'+list[i].title+'</span></a></h5>'
          +'<div class="text">'+list[i].content+'</div>'
          +'<p class="date">'+year + '-' + month + '-' + date+'</p></dd>'
          +'</dl>'
        }
        $('.latest').append(str)
        $('.text img').parent('p').remove();
        for(var i = 0; i<$('.text').length; i++){
          var html = $('.text').eq(i).html();
          html = html.substr(0,150)+'...'
          $('.text').eq(i).html(html);
        }
        
        a();
        
        
      } catch (err) {

      }
    })
  new Swiper ('.officeSwiper', {
    // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
  })
  function a() {
    for(var i=0;i<$('.latest').find('dl').length;i++){
          if($('.latest').find('dl').eq(i).find('dt').height()<$('.latest').find('dl').eq(i).find('dd').height()){
              $('.latest').find('dl').eq(i).find('dt').css('height',$('.latest').find('dl').eq(i).find('dd').outerHeight());
          }
        }
  }
  $(window).on('resize',function(){
    a();
  })
  axios('/company')
    .then(function(result) {
      var data = result.data.result.items
      var str = ''
      try {
        var length = data.length
        var index = 0
        for (let i = 0; i < length; i++) {
          if (index < 10) {
            if (data[i].logo_url) {
              str += '<a href="/home/enterpriseDetail?id='+data[i].id+'"><i style="background: url('+URL+data[i].logo_url+')"></i></a>'
              index++
            }
          }
        }
      } catch (err) {

      }
      $('.hatching .content').append(str)
    })
})()
