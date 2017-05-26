(function() {
  var URL = 'https://apl-static.oss-cn-beijing.aliyuncs.com/'
  var enterprise = function (page) {
    axios('/company?page=' + page)
      .then(function(result) {
        var data = result.data.result
        var list = data.items
        var str = ''
        for (let i in list) {
          if (list[i].logo_url) {
            str += '<li><a href="/home/enterpriseDetail?id='+list[i].id+'" style="background: url('+URL+list[i].base_logo_url+')"><i style="background: url('+URL+list[i].logo_url+')"></i></li>'
          } else {
            str += '<li><a href="/home/enterpriseDetail?id='+list[i].id+'" title="'+list[i].product_name+'">'+list[i].product_name+'</a></li>'
          }
        }
        $('.list').empty()
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
  enterprise(1)
})()
