"use strict";!function(){!function t(e){axios("/article?page="+e+"&pagesize=10").then(function(e){for(var a=e.data.result,i=a.items,l="",n=0;n<i.length;n++){var c=new Date(i[n].gmt_create),r=c.getFullYear(),d=c.getMonth()+1,g=c.getDate();d=d<10?"0"+d:d,g=g<10?"0"+g:g,l+='<dl><dt><a href="/article/'+i[n].uuid+'.html" target="_blank"><i style="background-image: url(https://apl-static.oss-cn-beijing.aliyuncs.com/'+i[n].cover+')"></i></a></dt><dd><h5 title="'+i[n].title+'"><a href="/article/'+i[n].uuid+'.html">'+i[n].title+'</a></h5><div class="text"><a href="/article/'+i[n].uuid+'.html" target="_blank">'+i[n].content+'</a></div><p class="date"><i></i>'+r+"-"+d+"-"+g+"</p></dd></dl>"}$(".latest").empty(),$(".latest").append(l),$(".text img").parent("p").hide(),$(".tcdPageCode").createPage({pageCount:a.total_page,current:a.page_index,backFn:function(e){t(e)}})})}(1)}();