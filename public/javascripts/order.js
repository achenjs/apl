$(function() {
  //  表单验证
  var isUsername = false,
      isPhone = false,
      isCode = false,
      isquest = true,
      index = 60

  //  检查是否可以提交
  function isButton() {
    if (isPhone && isUsername && isCode) {
      $('.button').addClass('active')
    } else {
      $('.button').removeClass('active')
    }
  }

  //  关闭模态框
  $('.que').on('click', function() {
    $('.motails').css('display', 'none')
  })
  $(document).on('focus', 'input', function() {
    $(this).parent('.itemInput').addClass('active')
  })
  $(document).on('blur', 'input', function() {
    $(this).parent('.itemInput').removeClass('active')
    var className = $(this).attr('class')
    var value = $(this).val()
    switch (className) {
      case 'username':
        if (value === '') {
          $(this).siblings('.error').show()
          isUsername = false
        } else {
          $(this).siblings('.error').hide()
          isUsername = true
        }
        break;
      case 'phone':
        if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(value)) {
          $(this).siblings('.error').show()
          isPhone = false
        } else {
          $(this).siblings('.error').hide()
          isPhone = true
        }
        break;
      case 'captcha':
        if (value === '') {
          $(this).siblings('.error').show()
          isCode = false
        } else {
          $(this).siblings('.error').hide()
          isCode = true
        }
        break;
    }
    isButton()
  })

  //  获取验证码
    $('.verCode').on('click', function() {
      if (!isPhone) {
        alert('请先输入手机号！')
      }
      if (isquest && isPhone) {
        isquest = false
        clearInterval(move)
        var move = setInterval(function() {
          index--
          if (index == 0) {
            $('.verCode').text('发送验证码').removeClass('active')
            isquest = true
            clearInterval(move)
          } else {
            $('.verCode').text(index + '秒后发送').addClass('active')
          }
        }, 1000)
        axios.post('/captcha', {mobile: $('.phone').val()})
          .then(function(result) {
            // Tosts(result.data.result.message)
          })
      }
    })

  //  提交
  $('.button').on('click', function() {
    var count = $('.count').val()
    if (count == '' || isNaN(count)) {
      alert('必须为数字！')
    }
    if (isUsername && isPhone && isCode) {
      var obj = {
        projectname: $('.projectname').val(),
        description: $('.des').val(),
        count: $('.count').val(),
        contact: $('.username').val(),
        mobile: $('.phone').val(),
        captcha: $('.captcha').val()
      }
      axios.post('/addorder', obj)
        .then((result) => {
        })
    }
  })
})
