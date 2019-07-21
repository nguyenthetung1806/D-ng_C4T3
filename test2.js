function loadImages(sources, callback) {
    var images = [];
    var loadedImages = 0;
    var numImages = sources.length;
    // get num of sources

    for(var src =0; src < numImages; src ++) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src].img;
    }

    console.log(images)
  }
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  var sources = [
    {img: 'http://farm3.static.flickr.com/2666/3686946460_0acfa289fa_m.jpg'},
    {img: 'http://farm4.static.flickr.com/3611/3686140905_cbf9824a49_m.jpg'}
  ];

  loadImages(sources, function(images) {
    context.drawImage(images[0], 100, 30, 200, 137);
    context.drawImage(images[1], 350, 55, 93, 104);
  });