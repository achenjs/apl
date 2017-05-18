$(function() {
  var id = $('.id').val()
  axios('/companyId?id=' + id)
    .then((result) => {
      var data = result.data.result.company
      var newTime = new Date(data.gmt_create)
      var year = newTime.getFullYear()
      var month = newTime.getMonth() + 1
      var date = newTime.getDate()
      month = month < 10 ? '0' + month : month
      date = date < 10 ? '0' + date : date
      $('.txtTop img').attr('src', 'https://apl-static.oss-cn-beijing.aliyuncs.com/' + data.logo_url)
      $('.description h5').text(data.product_name)
      $('.des b').text(data.slogan)
      $('.Setdate i').text(year+'-'+month+'-'+date)
      $('.web a').attr('href', data.website).text(data.website)
      $('.companySize i').text(data.scale)
      $('.desInfo i').text(data.ceo)
      $('.txtContent h4').text(data.name)
      $('.info').text(data.description)
    })
})
