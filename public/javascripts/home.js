$(function(){
  //  轮播图列表
  axios('/carousel')
    .then((result) => {
      var data = JSON.parse(result.data.result).carousels
      var str = '',     //  图片
          str1 = ''     //  图片对应下标
      for (let i in data) {
        if (data[i].url) {
          str += '<li class="carousel-item" style="background-image: url(https://apl-static.oss-cn-beijing.aliyuncs.com/'+ data[i].url +')"></li>'
        }
      }
      $('.carousel-list').append(str)
      var carouselItem = $('.carousel-list').find('.carousel-item')
      carouselItem.eq(0).addClass('active')
      for (let i = 0; i < carouselItem.length; i++) {
        str1 += '<li class="carousel-index-item"></li>'
      }
      $('.carousel-index-list').append(str1)
      var width = $('.carousel-index-list').width() //  下标box的宽度
      $('.carousel-index-list').css('marginLeft', - width / 2).find('.carousel-index-item').eq(0).addClass('active')
    })

  class init {
    constructor () {
      this.index = 0
    }
    carousel () {
      if (this.index < $('.carousel-item').length - 1) {
        this.index++
      }
      else {
        this.index = 0
      }
      $('.carousel-item').eq(this.index).fadeIn(1000).siblings().hide()
      $('.carousel-index-item').eq(this.index).addClass('active').siblings().removeClass('active')
    }
    leftBtn () {
      if (this.index > 0) {
        this.index--
      }
      else {
        this.index = $('.carousel-item').length - 1
      }
      $('.carousel-item').eq(this.index).fadeIn(1000).siblings().hide()
      $('.carousel-index-item').eq(this.index).addClass('active').siblings().removeClass('active')
    }
  }
  var render = new init()
  var movement = setInterval(() => {
    render.carousel()
  }, 3000)
  //  移入清楚定时器
  $('.carousel').on('mouseover', () => {
    clearInterval(movement)
  })
  //  移出开启定时器
  $('.carousel').on('mouseout', () => {
    movement = setInterval(() => {
      render.carousel()
    }, 3000)
  })
  //  轮播 左按钮
  $('.left-btn').on('click', () => {
    render.leftBtn()
  })
  //  轮播 右按钮
  $('.right-btn').on('click', () => {
    render.carousel()
  })
  //  轮播 下标点击切换
  $('.carousel-index-item').on('click', (el) => {
    console.log(1)
    console.log(el)
  })

  axios('/article')
    .then((result) => {
      var data = JSON.parse(result.data.result)
      var list = data.items
      var str = ''
      for (let i = 0; i < 2; i++) {
        str += '<dl>'
          +'<dt>'
            +'<img src="/images/latest01.png"></dt>'
          +'<dd>'
          +'<h5>'
          +'<i></i><span title="洪泰智造工场洪泰智造工场洪泰智造工场洪泰智造工场洪泰智造工场洪泰智造工场洪泰智造工场">'+list[i].title+'</span></h5>'
            +'<div class="text">'+ list[i].content +'</div>'
            +'<p class="date">2017-05-11</p></dd>'
            +'</dl>'
      }
      $('.latest').append(str)
    })

})
