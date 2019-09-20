# 4d-video-server-example
Example of using ffmpeg and mp4box for video streaming

* ``ffmpeg``: Static version was downloaded from [here](https://ffmpeg.zeranoe.com/builds/)

* ``mp4box``: Static version was build from source downloaded from [here](https://gpac.wp.imt.fr/2015/07/29/gpac-build-mp4box-only-all-platforms/) 

Mac: Make sure libraries such as ``lzma`` or ``z`` are not dynamically linked (if that's what you want).

#### Tips

Reduce ``stdOut`` ``stdErr`` that may clog ``LAUNCH EXTERNAL PROCESS`` especially on Windows.

[https://superuser.com/questions/326629/how-can-i-make-ffmpeg-be-quieter-less-verbose](https://superuser.com/questions/326629/how-can-i-make-ffmpeg-be-quieter-less-verbose)

Comprehensive tutorial for ``ffmpeg``

[https://nyanshiba.hatenablog.com/entry/2018/02/03/071256](https://nyanshiba.hatenablog.com/entry/2018/02/03/071256)

More links

[https://qiita.com/tomoyukilabs/items/c4eb7a829baac880797c](https://qiita.com/tomoyukilabs/items/c4eb7a829baac880797c)

[https://www.nuevolab.com/videojs/tests/dash](https://www.nuevolab.com/videojs/tests/dash)

[https://developer.mozilla.org/en-US/docs/Web/HTML/DASH_Adaptive_Streaming_for_HTML_5_Video](https://developer.mozilla.org/en-US/docs/Web/HTML/DASH_Adaptive_Streaming_for_HTML_5_Video)
