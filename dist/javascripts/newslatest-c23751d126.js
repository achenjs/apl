"use strict";!function(){!function t(e){axios("/article?page="+e+"&pagesize=2").then(function(e){for(var a=e.data.result,l=a.items,r="",i=0;i<l.length;i++){var n=l[i].content,c=n.replace(/\<p\>&nbsp;\<\/p\>/g,"");c=c.replace(/\<p\>\<br\><\/p\>/g,""),r+='<dl><dt><a href="/article/'+l[i].uuid+'.html" target="_blank"><i style="background-image: url(https://apl-static.oss-cn-beijing.aliyuncs.com/'+l[i].cover+')"></i></a></dt><dd><h5 title="'+l[i].title+'"><a href="/article/'+l[i].uuid+'.html" target="_blank">'+l[i].title+'</a></h5><div class="text">'+c+"</div></dd></dl>"}$(".latest").html(r),$(".text img").parent("p").remove();for(var s=0;s<$(".text").length;s++){var g=$(".text").eq(s).html();g="cn"==$("#lang").val()?g.substr(0,190)+"...":g.substr(0,340)+"...",$(".text").eq(s).html(g)}$(".tcdPageCode").createPage({pageCount:a.total_page,current:a.page_index,backFn:function(e){t(e)}})})}(1)}();