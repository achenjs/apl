"use strict";$(function(){var e=location.pathname,a=new RegExp("/","g"),s=e.match(a),t=s?s.length:0,i="";if(t>1)try{var c=e.indexOf("/");indexTwo=e.indexOf("/",c+1),i=e.substring(c,indexTwo)}catch(e){}else i=e;switch(i){case"/home":$(".headActive").eq(0).addClass("active");break;case"/ecology":$(".headActive").eq(1).addClass("active");break;case"/intellect":$(".headActive").eq(2).addClass("active");break;case"/college":$(".headActive").eq(3).addClass("active");break;case"/newslatest":$(".headActive").eq(4).addClass("active")}var l=sessionStorage.getItem("lang");"cn"==l?$(".lang").eq(0).addClass("active").siblings().removeClass("active"):"en"==l&&$(".lang").eq(1).addClass("active").siblings().removeClass("active"),$(".lang").on("click",function(){$(this).addClass("active").siblings(".lang").removeClass("active"),sessionStorage.setItem("lang",$(this).attr("lang")),location.reload()})});