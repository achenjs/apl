"use strict";$(function(){var e="https://apl-static.oss-cn-beijing.aliyuncs.com/";!function t(){axios("/company").then(function(a){var i=a.data.result.items,n="";for(var o in i)i[o].logo_url?n+='<li><a href="/home/enterpriseDetail?id='+i[o].id+'" style="background: url('+e+i[o].base_logo_url+')"><i style="background: url('+e+i[o].logo_url+')"></i></li>':n+='<li><a href="/home/enterpriseDetail?id='+i[o].id+'" title="'+i[o].product_nam+'">'+i[o].product_name+"</a></li>";$(".list").append(n),$(".tcdPageCode").createPage({pageCount:i.total_page,current:i.page_index,backFn:function(e){t(e)}})})}()});