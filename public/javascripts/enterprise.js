$(function() {
  var enterprise = function () {
    axios('/company')
      .then((result) => {
        var data = result.data.result
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
  enterprise()
})
