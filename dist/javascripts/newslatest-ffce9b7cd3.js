"use strict";$(function(){!function t(e){axios("/article?page="+e).then(function(e){for(var a=e.data.result,i=a.items,n="",c=0;c<i.length;c++){var l=new Date(i[c].gmt_create),r=l.getFullYear(),d=l.getMonth()+1,s=l.getDate();d=d<10?"0"+d:d,s=s<10?"0"+s:s,n+='<dl><dt><a href="/article/'+i[c].uuid+'" target="_blank"><img src="https://apl-static.oss-cn-beijing.aliyuncs.com/'+i[c].cover+'"></a></dt><dd><h5 title="'+i[c].title+'">'+i[c].title+'</h5><div class="text"><a href="/article/'+i[c].uuid+'" target="_blank">'+i[c].content+'</a></div><p class="date"><i></i>'+r+"-"+d+"-"+s+"</p></dd></dl>"}$(".latest").append(n),$(".tcdPageCode").createPage({pageCount:a.total_page,current:a.page_index,backFn:function(e){t(e)}})})}(1)});