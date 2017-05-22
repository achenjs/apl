(function(){
  var URL = 'https://apl-static.oss-cn-beijing.aliyuncs.com/'

  var collegeList = function(page) {
    axios('/collegeList?page=' + page + '&page_size=5')
    .then(function(result) {
      var data = result.data.result
      var list = data.items
      var newStr = ''
      var pastStr = ''
      for (let i = 1; i < list.length; i++) {
        if (i < 5) {
          newStr += '<li><a href="'+list[i].url+'" target="_blank"><div class="pic"><i style="background: url("'+URL+list[i].logo_url+'")></i>'
          +'<b></b><div class="txt"><h5>'+list[i].name+'</h5><p class="date">'+new init(list[i].gmt_create).formatDate()+'</p></div>'
          +'</div></a></li>'
        } else {
          pastStr += '<li><a href="'+list[i].url+'" target="_blank"><div class="pic"><i style="background: url("'+URL+list[i].logo_url+'")></i>'
          +'<b></b><div class="txt"><h5>'+list[i].name+'</h5><p class="date">'+new init(list[i].gmt_create).formatDate()+'</p></div>'
          +'</div></a></li>'
        }
      }
      if (newStr) {
        $('.newList').append(newStr)
      }
      if (pastStr) {
        $('.pastList').append(pastStr)
      }
      //  第一条
      $('.newOne').append('<a href="'+list[0].url+'" target="_blank"><div class="pic"><i style="background: url("'+URL+list[0].logo_url+'")></i>>'
      +'<b></b><div class="txt"><h5>'+list[0].name+'</h5><p class="date">'+new init(list[0].gmt_modified).formatDate()+'</p></div>'
      +'</div></a>')
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
  
  collegeList(1)
})()
