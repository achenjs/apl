"use strict";!function(){function e(){n&&a&&o?$(".button").addClass("active"):$(".button").removeClass("active")}function t(){""===$(".username").val()?($(".username").siblings(".error").show(),a=!1):($(".username").siblings(".error").hide(),a=!0),/^1[3|4|5|8][0-9]\d{4,8}$/.test($(".phone").val())?($(".phone").siblings(".error").hide(),n=!0):($(".phone").siblings(".error").show(),n=!1),""===$(".captcha").val()?($(".captcha").siblings(".error").show(),o=!1):($(".captcha").siblings(".error").hide(),o=!0)}$(".form_date").datetimepicker({language:"zh-CN",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,minView:2,forceParse:0});var a=!1,n=!1,o=!1,i=!0,r=60;$(".que").on("click",function(){$(".motails").css("display","none")}),$(document).on("focus","input",function(){$(this).parent(".itemInput").addClass("active")}),$(document).on("blur","input",function(){$(this).parent(".itemInput").removeClass("active"),t(),e()}),$(".verCode").on("click",function(){if(i&&n){i=!1,clearInterval(e);var e=setInterval(function(){r--,0==r?(r=60,$(".verCode").text("发送验证码").removeClass("active"),i=!0,clearInterval(e)):$(".verCode").text(r+"秒后发送").addClass("active")},1e3);axios.post("/captcha",{mobile:$(".phone").val()}).then(function(e){})}}),$(".button").on("click",function(){var e=$(".count").val();if((""!=e||isNaN(e))&&alert("必须为数字！"),a&&n&&o){var t={projectname:$(".projectname").val(),description:$(".des").val(),count:parseInt($(".count").val()),contact:$(".username").val(),mobile:$(".phone").val(),captcha:$(".captcha").val()};axios.post("/addorder",t).then(function(e){alert(e.data.result.message)})}})}();