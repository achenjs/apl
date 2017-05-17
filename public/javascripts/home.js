$(function(){
  var URL = 'https://apl-static.oss-cn-beijing.aliyuncs.com/'

  $('.header').addClass('active')

  $('.carouselSwiper').css('height', $(window).height())
  $(window).on('resize', () => {
    $('.carouselSwiper').css('height', $(window).height())
  })
  //  轮播图列表
  axios('/carousel')
    .then((result) => {
      var data = result.data.result.carousels
      var str = ''
      for (let i in data) {
        if (data[i].url) {
          str += '<div class="swiper-slide" style="background-image: url(https://apl-static.oss-cn-beijing.aliyuncs.com/'+ data[i].url +')">'
          +'<div class="content"><div class="title">'+data[i].title+'</div>'
          +'<div class="des">'+data[i].description+'</div></div>'
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
        autoplay: 3000
      })
    })

  axios('/article')
    .then((result) => {
      var data = result.data.result
      var list = data.items
      var str = ''
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
        str += '<dl>'
                +'<dt><a href="/newslatest/detail?id='+list[i].id+'"><img src="'+URL+list[i].cover+'"></a></dt>'
                +'<dd>'
                +'<h5>'
                +'<i></i><span title="'+list[i].title+'">'+list[i].title+'</span></h5>'
                +'<div class="text"><a href="/newslatest/detail?id='+list[i].id+'">'+ list[i].content +'</a></div>'
                +'<p class="date">'+year + '-' + month + '-' + date+'</p></dd>'
              +'</dl>'
      }
      $('.latest').append(str)
    })
    new Swiper ('.officeSwiper', {
      // 如果需要前进后退按钮
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 30,
    })
    $('.silid').on('mouseover', function(){
      $(this).find('.content').show()
    })
    $('.silid').on('mouseout', function(){
      $(this).find('.content').hide()
    })
    axios('/company')
      .then((result) => {
        var data = result.data.result.items
        for (let i in data) {
          $('.hatching .content').append('<a href="/home/enterpriseDetail?id='+data[i].id+'"><img src="'+URL+data[i].logo_url+'"></a>')
        }
      })

})
