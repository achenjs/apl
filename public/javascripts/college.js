$(function() {
  var collegeList = function() {
    axios('/collegeList')
      .then((result) => {
        var data = result.data.result
        var list = data.items
        for (let i = 0; i < list.length; i++) {

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

  collegeList()
})
