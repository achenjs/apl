"use strict";$(function(){var t="https://apl-static.oss-cn-beijing.aliyuncs.com/";$(".carouselSwiper").css("height",$(window).height()),$(window).on("resize",function(){$(".carouselSwiper").css("height",$(window).height())}),axios("/carousel").then(function(t){var e=t.data.result.carousels,i="";for(var a in e)e[a].url&&(i+='<div class="swiper-slide" style="background-image: url(https://apl-static.oss-cn-beijing.aliyuncs.com/'+e[a].url+')"><div class="content"><div class="box"><div class="title">'+e[a].title+'</div><div class="des">'+e[a].description+"</div></div></div></div>");$(".carouselContent").append(i);new Swiper(".carouselSwiper",{loop:!0,pagination:".swiper-pagination",paginationElement:"li",paginationClickable:!0,nextButton:".carousel-next",prevButton:".carousel-prev",autoplay:3e3})}),axios("/article").then(function(e){var i=e.data.result,a=i.items,n="";try{var s=a.length;s>2&&(s=2);for(var o=0;o<s;o++){var l=new Date(a[o].gmt_create),r=l.getFullYear(),c=l.getMonth()+1,d=l.getDate();c=c<10?"0"+c:c,d=d<10?"0"+d:d,n+='<dl><dt><a href="/article/'+a[o].uuid+'.html" target="_blank"><img src="'+t+a[o].cover+'"></a></dt><dd><h5><i></i><span title="'+a[o].title+'">'+a[o].title+'</span></h5><div class="text"><a href="/article/'+a[o].uuid+'.html" target="_blank">'+a[o].content+'</a></div><p class="date">'+r+"-"+c+"-"+d+"</p></dd></dl>"}$(".latest").append(n),$(".text img").hide()}catch(t){}}),new Swiper(".officeSwiper",{centeredSlides:!0,paginationClickable:!0,spaceBetween:30}),$(".silid").on("mouseover",function(){$(this).find(".content").show()}),$(".silid").on("mouseout",function(){$(this).find(".content").hide()}),axios("/company").then(function(e){var i=e.data.result.items,a="";try{for(var n=i.length,s=0,o=0;o<n;o++)s<5&&i[o].logo_url&&(a+='<a href="/home/enterpriseDetail?id='+i[o].id+'"><img src="'+t+i[o].base_logo_url+'"></a>',s++)}catch(t){}$(".hatching .content").append(a)})});