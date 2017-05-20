  videojs.options.flash.swf = "video-js.swf"
  var URL = 'https://apl-static.oss-cn-beijing.aliyuncs.com/'
  var id = $('.id').val()
  axios('/collegeId?id=' + id)
    .then(function(result) {
      var data = result.data.result.class
      $('.title').text(data.name)
      $('.date').text(new init(data.gmt_create).formatDate())
      $('.videoContent').append('<video id="my-video" class="video-js" controls preload="auto" width="100%" height="300" poster="'+URL+data.logo_url+'" data-setup="{}">'
        +'<source src="'+data.url+'" type="video/mp4">'
        +'<source src="'+data.url+'" type="video/webm">'
        +'<embed src="'+data.url+'" allowFullScreen="true" quality="high" width="100%" height="300" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'
        +'<object id="sample_video" class="vjs-flash-fallback" width="100%" height="300" type="application/x-shockwave-flash" data="'+data.url+'">'
            +'<param name="movie" value="'+data.url+'" />'
            +'<param name="allowfullscreen" value="true" />'
            +'<param name="flashvars" value="config={"playlist":["'+URL+data.logo_url+'", {"url": "'+data.url+'","autoPlay":false,"autoBuffering":true}]}" />'
            +'<img src="images/sample_video.png" width="100%" height="300" alt="Poster Image" title="No video playback capabilities." />'
        +'</object>'
      +'</video>')
      var player = videojs('my-video')
      var options = {}

      var player = videojs('my-video', options, function onPlayerReady() {
          videojs.log('Your player is ready!')

          // In this context, `this` is the player that was created by Video.js.
          this.play()

          // How about an event listener?
          this.on('ended', function() {
            videojs.log('Awww...over so soon?!')
          })
        })
      })
