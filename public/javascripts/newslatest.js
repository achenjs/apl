$(function() {
  var article = function (page) {
    axios('/article?page=' + page)
      .then((result) => {
        var data = result.data.result
        var list = data.items
        var str = ''
        for (let i = 0; i < list.length; i++) {
          str += '<dl>'
          +'<dt>'
          +'<a href="/newslatest/detail?id='+list[i].id+'">'
          +'<img src="/images/latest01.png"></a></dt>'
          +'<dd>'
          +'<h5 title="'+ list[i].title +'">'+list[i].title+'</h5>'
          +'<div class="text">'+ list[i].content +'</div>'
          +'<p class="date"><i></i>2017-05-11</p></dd>'
          +'</dl>'
        }
        $('.latest').append(str)
        // 启动分页
        $(".tcdPageCode").createPage({
          pageCount: data.total_page,
          current: data.page_index,
          backFn: function(page) {
            article(page)
          }
        })
      })
  }
  article(1)
})
