(function() {
    var URL = 'https://apl-static.oss-cn-beijing.aliyuncs.com/'

    var article = function (page) {
      axios('/article?page=' + page + '&pagesize=10')
        .then(function(result) {
          var data = result.data.result
          var list = data.items
          var str = ''
          for (let i = 0; i < list.length; i++) {
            var content = list[i].content;
            var contents = content.replace(/\<p\>&nbsp;\<\/p\>/g,'');
            contents = contents.replace(/\<p\>\<br\><\/p\>/g,'');
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
