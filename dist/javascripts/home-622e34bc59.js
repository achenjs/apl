"use strict";!function(){function e(){for(var e=0;e<$(".latest").find("dl").length;e++)$(".latest").find("dl").eq(e).find("dt").height()<$(".latest").find("dl").eq(e).find("dd").height()&&$(".latest").find("dl").eq(e).find("dt").css("height",$(".latest").find("dl").eq(e).find("dd").outerHeight())}var t="https://apl-static.oss-cn-beijing.aliyuncs.com/",i=$("#lang").val();$(".carouselSwiper").css("height",$(window).height()),$(window).on("resize",function(){$(".carouselSwiper").css("height",$(window).height())}),axios("/carousel").then(function(e){var a=e.data.result.carousels,n="";for(var l in a)a[l].url&&("cn"===i?n+='<div class="swiper-slide" style="background-image: url('+t+a[l].url+')"><div class="content"><div class="box"><div class="title">'+a[l].title+'</div><div class="des">'+a[l].description+"</div></div></div></div>":"en"===i&&(n+='<div class="swiper-slide" style="background-image: url('+t+a[l].url+')"><div class="content"><div class="box"><div class="title">'+a[l].description+'</div><div class="des">'+a[l].title+"</div></div></div></div>"));$(".carouselContent").append(n),"en"===i&&$(".carouselContent .box").css("margin-left","-50px");new Swiper(".carouselSwiper",{loop:!0,pagination:".swiper-pagination",paginationElement:"li",paginationClickable:!0,nextButton:".carousel-next",prevButton:".carousel-prev",autoplay:4e3})}),axios("/article?page=1&pagesize=10").then(function(i){var a=i.data.result,n=a.items,l="";try{var s=n.length;s>2&&(s=2);for(var r=0;r<s;r++){var d=n[r].content,o=d.replace(/\<p\>&nbsp;\<\/p\>/g,"");o=o.replace(/\<p\>\<br\><\/p\>/g,""),l+='<dl><dt style="width: 325px; height: 200px;"><a href="/article/'+n[r].uuid+'.html" target="_blank"><i style="background:url('+t+n[r].cover+')"></i></dt><dd><h5><a href="/article/'+n[r].uuid+'.html" target="_blank"><i></i><span title="'+n[r].title+'">'+n[r].title+'</span></a></h5><div class="text">'+o+"</div></dd></dl>"}$(".latest").html(l),$(".text img").parent("p").remove();for(var c=0;c<$(".text").length;c++){var p=$(".text").eq(c).html();p="cn"==$("#lang").val()?p.substr(0,190)+"...":p.substr(0,320)+"...",$(".text").eq(c).html(p)}e()}catch(e){}}),new Swiper(".officeSwiper",{centeredSlides:!0,paginationClickable:!0,spaceBetween:30}),$(window).on("resize",function(){e()}),axios("/company").then(function(e){var i=e.data.result.items,a="";try{for(var n=i.length,l=0,s=0;s<n;s++)l<10&&i[s].logo_url&&(a+='<a href="/home/enterpriseDetail?id='+i[s].id+'"><i style="background: url('+t+i[s].logo_url+')"></i></a>',l++)}catch(e){}$(".hatching .content").append(a)})}();