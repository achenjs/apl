"use strict";$(function(){$(".quality .item").on("mouseover",function(){$(this).css("box-shadow","5px 5px 3px #b4b4b4")}),$(".quality .item").on("mouseout",function(){$(this).css("box-shadow","0px 0px 0px transparent")});for(var t=$(".equipment").find("ul").find("li"),i=0;i<t.length;i++){var n=$(t[i]).width();$(t[i]).find(".bigB").css("height",n+"px")}$(window).on("resize",function(){for(var i=0;i<t.length;i++){var n=$(t[i]).width();$(t[i]).find(".bigB").css("height",n+"px")}}),Array.prototype.max=function(){for(var t=this[0],i=1;i<this.length;i++)this[i]>t&&(t=this[i]);return t};for(var e=[],i=0;i<$(".item").length;i++)e.push($(".item").eq(i).height());var s=e.max();$(".item").css("min-height",s+"px")});