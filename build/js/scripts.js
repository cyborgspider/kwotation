//Make the quotes curly
function smarten(e){e=e.replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘");e=e.replace(/'/g,"’");e=e.replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“");e=e.replace(/"/g,"”");e=e.replace(/--/g,"—");return e}function parseRSS(e,t){$.ajax({url:"http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1&callback=?&q="+encodeURIComponent(e),dataType:"json",success:function(e){var n=e.responseData.feed.entries[0].title,r=smarten(n);$(t+" h1").text(r)}})}function pageSlide(){totalSections=$("section").length;sectionWidth=$("section").outerWidth();$("section").css({width:sectionWidth});$("#wrap").css({width:sectionWidth*totalSections})}$(function(){pageSlide();parseRSS("http://www.quotesdaddy.com/feed/tagged/Inspirational","#inspiration");parseRSS("http://www.quotesdaddy.com/feed/tagged/Love","#love");parseRSS("http://www.quotesdaddy.com/feed/tagged/Funny","#humor");$("nav a").click(function(e){e.preventDefault();var t=this.getAttribute("href");$(t).addClass("active");$(t).siblings().removeClass()})});