(function($, videoPlayer, title){

  var player;

  var cachedFrames = [];

  var url_string = window.location.href;
  var url = new URL(url_string);
  var offset = url.searchParams.get("offset");

  videoPlayer.ready(function() {

    player = this;

    this.on('durationchange', function (e) {

    });

    this.on('seeked', function (e) {
      cachedFrames = [];
    });

    this.on('timeupdate', function (e) {

      var bufferedPercent = this.bufferedPercent();
      var buffered = this.buffered();
      var currentTime = parseInt(this.currentTime(), 10);
      var duration = this.duration();
      var i = cachedFrames.indexOf(currentTime);

      if(i === -1) {

          cachedFrames.push(currentTime);

          var ranges = [];

          for (i = 0; i < buffered.length; ++i) {
            ranges.push({"start":buffered.start(i), "end":buffered.end(i)});
          }

          $.post('/timeupdate', JSON.stringify({
              "bufferedPercent":bufferedPercent,
              "ranges":ranges,
              "currentTime":currentTime,
              "title":title,
              "duration":duration
          }), (function(data) {

          }).bind(this));
      }

    });

    this.on('play', function(e) {

    });

    if(offset != null) {
        offset = parseInt(offset, 10);
        if(offset == 0){

        }else if (offset < 0) {

        }else{
          player.currentTime(offset);
        }

    }

  });

    window.history.replaceState('Object', 'Title', '/');

})(jQuery, videojs('videoPlayer'), document.title);
