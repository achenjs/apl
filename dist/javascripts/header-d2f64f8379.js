"use strict";$(function(){var a=location.pathname,e=new RegExp("/","g"),s=a.match(e),t=s?s.length:0,i="";if(t>1)try{var c=a.indexOf("/");indexTwo=a.indexOf("/",c+1),i=a.substring(c,indexTwo)}catch(a){}else i=a;switch(i){case"/":$(".headActive").eq(0).addClass("active");break;case"/ecology":$(".headActive").eq(1).addClass("active");break;case"/intellect":$(".headActive").eq(2).addClass("active");break;case"/college":$(".headActive").eq(3).addClass("active");break;case"/newslatest":$(".headActive").eq(4).addClass("active")}var l=$("#lang").val();"cn"==l?$(".lang").eq(0).addClass("active").siblings().removeClass("active"):"en"==l&&$(".lang").eq(1).addClass("active").siblings().removeClass("active"),$(".lang").on("click",function(){$(this).addClass("active").siblings(".lang").removeClass("active"),axios.get("/lang?lang="+$(this).attr("lang")+"&_="+Date.now()).then(function(a){location.reload()})})});