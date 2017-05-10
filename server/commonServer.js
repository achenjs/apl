var http = require('http');
var Url = require('./constant');
var request = require("request");

exports.request = function request(options, callback,params,NoPrintResult) {
	var post_data = "";
  var logInfo = "http请求，url:" + "http://" + options.host + ":"
      + options.port + options.path;
  if(params){
      if(typeof params=="string"){
          post_data = params;
      }else{
          post_data = JSON.stringify(params);
      }
      logInfo = logInfo +",params:"+post_data;
  }
	console.log(logInfo)
	var post_req = http.request(options, function(result) {
		var data = '';
	  result.setEncoding("utf8");
		result.on("data", function(chunk) {
			data += chunk;
		});
		result.on('end', function() {
      if(!NoPrintResult){
          console.log("请求返回结果，result:" + data.toString());
      }else{
          console.log('请求返回结果，result：设置为不打印结果！')
      }
			callback(data);
		});
	});

	post_req.setTimeout(Url.time_out, function() {
		post_req.abort();
    console.log('Request timeout');
    callback("");
	});
	post_req.on('error', function(e) {
    console.log("httpGet : exception " + e.message);
	});
  if(params){
    post_req.write(post_data);
  }
	post_req.end();
}
