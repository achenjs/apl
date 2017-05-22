(function(){
  var URL = 'https://apl-static.oss-cn-beijing.aliyuncs.com/'

  var collegeList = function(page) {
    axios('/collegeList?page=' + page)
      .then(function(result) {
        var data = result.data.result
        var list = data.items
        var newStr = ''
        var pastStr = ''
        // <p class="date">'+new init(list[i].gmt_create).formatDate()+'</p>
        if (page >= 2) {
          for (let i in list) {
            pastStr += '<li><a href="'+list[i].url+'" target="_blank"><div class="pic"><img src="'+URL+list[i].logo_url+'"></i>'
            +'<b></b><div class="txt"><h5 title="'+list[i].name+'">'+list[i].name+'</h5></div>'
            +'</div></a></li>'
          }
          $('.newVideo').hide()
        } else {
          for (let i = 1; i < list.length; i++) {
            if (i < 5) {
              newStr += '<li><a href="'+list[i].url+'" target="_blank"><div class="pic"><img src="'+URL+list[i].logo_url+'"></i>'
              +'<b></b><div class="txt"><h5 title="'+list[i].name+'">'+list[i].name+'</h5></div>'
              +'</div></a></li>'
            } else {
              pastStr += '<li><a href="'+list[i].url+'" target="_blank"><div class="pic"><img src="'+URL+list[i].logo_url+'"></i>'
              +'<b></b><div class="txt"><h5 title="'+list[i].name+'">'+list[i].name+'</h5></div>'
              +'</div></a></li>'
            }
          }
          $('.newVideo').show()
          $('.newList').empty()
          $('.newList').append(newStr)
          //  第一条
          $('.newOne').empty()
          $('.newOne').append('<a href="'+list[0].url+'" target="_blank"><div class="pic"><img src="'+URL+list[0].logo_url+'"></i>'
          +'<b></b><div class="txt"><h5 title="'+list[0].name+'">'+list[0].name+'</h5></div>'
          +'</div></a>')
        }
        $('.pastList').empty()
        $('.pastList').append(pastStr)
        // 启动分页
        $(".tcdPageCode").createPage({
          pageCount: data.total_page,
          current: data.page_index,
          backFn: function(page) {
            collegeList(page)
          }
        })
      })
  }

  collegeList(1)
})()
