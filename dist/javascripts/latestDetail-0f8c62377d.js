"use strict";!function(){var t=$(".id").val();axios("/articleId?id="+t).then(function(t){var e=t.data.result.article;$(".title").text(e.title);var a=new Date(e.gmt_create),i=a.getFullYear(),l=a.getMonth()+1,n=a.getDate();l=l<10?"0"+l:l,n=n<10?"0"+n:n,$(".date").text(i+"-"+l+"-"+n),$(".txt").html(e.content)}),axios("/recommend").then(function(t){var e=t.data.result.items,a="";for(var i in e)a+='<li><a href="/newslatest/detail?id='+e[i].id+'" title="'+e[i].title+'">'+e[i].title+"</a></li>";$(".listData").append(a)})}();