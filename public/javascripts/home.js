(function() {
  var URL = 'https://apl-static.oss-cn-beijing.aliyuncs.com/'

  // $('.header').addClass('active')
  var lang = $('#lang').val()

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
          if (lang === 'cn') {
            str += '<div class="swiper-slide" style="background-image: url('+ URL + data[i].url +')">'
            +'<div class="content"><div class="box"><div class="title">'+ data[i].title +'</div>'
            +'<div class="des">'+data[i].description+'</div></div></div>'
            +'</div>'
          } else if (lang === 'en') {
            str += '<div class="swiper-slide" style="background-image: url('+ URL + data[i].url +')">'
            +'<div class="content"><div class="box"><div class="title">'+ data[i].description +'</div>'
            +'<div class="des">'+data[i].title+'</div></div></div>'
            +'</div>'
          }
        }
      }
      $('.carouselContent').append(str)
      if (lang === 'en') {
        $('.carouselContent .box').css('margin-left', '-50px');
      }
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
  axios('/article?page=1&pagesize=10')
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
          var content = list[i].content;
          var contents = content.replace(/\<p\>&nbsp;\<\/p\>/g,'');
          contents = contents.replace(/\<p\>\<br\><\/p\>/g,'');
          str += '<dl>'
                  +'<dt style="width: 325px; height: 200px;"><a href="/article/'+list[i].uuid+'.html" target="_blank"><i style="background:url('+ URL + list[i].cover +')"></i></dt>'
                  +'<dd>'
                    +'<h5>'
                    +'<a href="/article/'+list[i].uuid+'.html" target="_blank">'
                    +'<i></i><span title="'+list[i].title+'">'+list[i].title+'</span></a></h5>'
                    +'<div class="text">'+contents+'</div>'
                  +'</dd>'
                +'</dl>'
        }
        $('.latest').html(str)
        $('.text img').parent('p').remove();
        for(var i = 0; i<$('.text').length; i++){
          var html = $('.text').eq(i).html();
          var lang = $('#lang').val();
            if(lang == 'cn'){
              html = html.substr(0,150)+'...'
            }else{
              html = html.substr(0,300)+'...'
            }
          $('.text').eq(i).html(html);
        }

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
