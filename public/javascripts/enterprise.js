$(function() {
  var URL = 'https://apl-static.oss-cn-beijing.aliyuncs.com/'
  var enterprise = function () {
    axios('/company')
      .then((result) => {
        var data = result.data.result.items
        var str = ''
        for (let i in data) {
          str += '<li><a href="/home/enterpriseDetail?id='+data[i].id+'"><img src="'+URL+data[i].logo_url+'"></a></li>'
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
})
