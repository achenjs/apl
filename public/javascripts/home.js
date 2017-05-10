$(function(){
  axios('/carousel')
    .then((result) => {
      var data = JSON.parse(result.data.result).carousels
      var str = ''
      for (let i in data) {
        if (data[i].url) {
          str += '<li class="carousel-item" style="background: url(https://apl-static.oss-cn-beijing.aliyuncs.com/'+ data[i].url +')"></li>'
        }
      }
      $('.carousel-list').append(str)
    })
})
