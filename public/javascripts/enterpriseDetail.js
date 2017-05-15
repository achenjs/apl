$(function() {
  var id = $('.id').val()
  axios('/companyId?id=' + id)
    .then((result) => {
      console.log(result)
    })
})
