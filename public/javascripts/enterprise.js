(function() {
  var URL = 'https://apl-static.oss-cn-beijing.aliyuncs.com/'
  var enterprise = function () {
    axios('/company')
    .then(function(result) {
      var data = result.data.result.items
      var str = ''
      for (let i in data) {
        if (data[i].logo_url) {
          str += '<li><a href="/home/enterpriseDetail?id='+data[i].id+'" style="background: url('+URL+data[i].base_logo_url+')"><i style="background: url('+URL+data[i].logo_url+')"></i></li>'
        } else {
          str += '<li><a href="/home/enterpriseDetail?id='+data[i].id+'" title="'+data[i].product_nam+'">'+data[i].product_name+'</a></li>'
        }
      }
      $('.list').append(str)
      // 启动分页
      $(".tcdPageCode").createPage({
        pageCount: data.total_page,
        current: data.page_index,
        backFn: function(page) {
          enterprise(page)
        }
      })
    })
  }
  enterprise()
})()
