//Make the quotes curly
function smarten(a) {
  a = a.replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018");      // opening singles
  a = a.replace(/'/g, "\u2019");                             // closing singles & apostrophes
  a = a.replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c"); // opening doubles
  a = a.replace(/"/g, "\u201d");                             // closing doubles
  a = a.replace(/--/g, "\u2014");                            // em-dashes
  return a
};

//Load and parse through the RSS feed
function parseRSS(url,section){
  $.ajax({
    url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      var fetchedQuote = data.responseData.feed.entries[0].title;
      var displayQuote = smarten(fetchedQuote);
      $(section+' h1').text(displayQuote)
    }
  });
};

//Make stuff happen
$(function(){
    parseRSS('http://www.quotesdaddy.com/feed/tagged/Inspirational', '#inspiration');
    parseRSS('http://www.quotesdaddy.com/feed/tagged/Love','#love');
    parseRSS('http://www.quotesdaddy.com/feed/tagged/Funny','#humor');
    $('nav a').click(function(){
      var currentSection = this.getAttribute('href');
      $(currentSection).addClass('active');
      $(currentSection).siblings().removeClass();

    });
})