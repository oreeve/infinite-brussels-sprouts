// window.onload = function(){
//   $(".more-sprouts").click();
var pageNum = 2;

$(".more-sprouts").hide();

  $(window).scroll(function () {
    if( $(window).scrollTop() + $(window).height() == $(document).height() ) {

      // $(document.getElementsByClassName("more-sprouts")).on("click",function(event) {
      //   event.preventDefault();

        var request = $.ajax({
          method: "GET",
          url: "/tweets.json?page=" + pageNum++,
          dataType: "JSON"
        });

        request.success(function(json) {
          json.forEach(function(tweet) {
              $(".tweets").append('<li class="tweet"><div class="body">' + tweet.text +'<div class="user">' + tweet.username);
              $(".more-sprouts").attr("href", "/tweets.json?page=" + pageNum)
            });
        });
      // });

    }
  });
  if( $(window).height() == $(document).height() ) {

    // $(document.getElementsByClassName("more-sprouts")).on("click",function(event) {
    //   event.preventDefault();

      var request = $.ajax({
        method: "GET",
        url: "/tweets.json?page=" + pageNum++,
        dataType: "JSON"
      });

      request.success(function(json) {
        json.forEach(function(tweet) {
            $(".tweets").append('<li class="tweet"><div class="body">' + tweet.text +'<div class="user">' + tweet.username);
            $(".more-sprouts").attr("href", "/tweets.json?page=" + pageNum)
          });
      });
    // });

  }
