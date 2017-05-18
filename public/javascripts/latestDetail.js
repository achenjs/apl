$(function() {
  var id = $('.id').val()
  axios('/articleId?id=' + id)
    .then((result) => {
      var data = result.data.result.article
      $('.title').text(data.title)
      var newTime = new Date(data.gmt_create)
      var year = newTime.getFullYear()
      var month = newTime.getMonth() + 1
      var date = newTime.getDate()
      month = month < 10 ? '0' + month : month
      date = date < 10 ? '0' + date : date
      $('.date').text(year + '-' + month + '-' + date)
      //  内容
      $('.txt').html(data.content)
    })

  axios('/recommend')
    .then((result) => {
      var data = result.data.result.items
      var str = ''
      for (let i in data) {
        str += '<li><a href="/newslatest/detail?id='+data[i].id+'" title="'+data[i].title+'">'+data[i].title+'</a></li>'
      }
      $('.listData').append(str)
    })
})
