(function() {
    var URL = 'https://apl-static.oss-cn-beijing.aliyuncs.com/'

    var article = function (page) {
      axios('/article?page=' + page)
        .then(function(result) {
          var data = result.data.result
          var list = data.items
          var str = ''
          for (let i = 0; i < list.length; i++) {
            var newTime = new Date(list[i].gmt_create)
            var year = newTime.getFullYear()
            var month = newTime.getMonth() + 1
            var date = newTime.getDate()
            month = month < 10 ? '0' + month : month
            date = date < 10 ? '0' + date : date
            str += '<dl>'
            +'<dt>'
              +'<a href="/article/'+list[i].uuid+'.html" target="_blank">'
                +'<i style="background-image: url('+URL+list[i].cover+')"></i>'
              +'</a>'
            +'</dt>'
            +'<dd>'
                +'<h5 title="'+ list[i].title +'">'
                  +'<a href="/article/'+list[i].uuid+'.html">'+list[i].title+'</a>'
                +'</h5>'
                +'<div class="text">'
                    +'<a href="/article/'+list[i].uuid+'.html" target="_blank">'+ list[i].content +'</a>'
                +'</div>'
                +'<p class="date"><i></i>'+year + '-' + month + '-' + date+'</p>'
            +'</dd>'
            +'</dl>'
            // str += '<dl>'
            // +'<dt>'
            // +'<a href="/article/'+list[i].uuid+'.html" target="_blank">'
            // +'<i style="background-image: url('+URL+list[i].cover+')"></i></a></dt>'
            // +'<dd>'
            // +'<h5 title="'+ list[i].title +'">'
            // +'<a href="/article/'+list[i].uuid+'.html">'+list[i].title+'</a>'
            // +'</h5>'
            // +'<div class="text"><a href="/article/'+list[i].uuid+'.html" target="_blank">'+ list[i].content +'</a></div>'
            // +'<p class="date"><i></i>'+year + '-' + month + '-' + date+'</p></dd>'
            // +'</dl>'
          }
          $('.latest').empty()
          $('.latest').append(str)
          $('.text img').parent('p').hide()
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

})()
