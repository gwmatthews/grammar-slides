remark.macros.scale = function (percentage, frameColor) {
  var url = this;
  return '<img class="photo" src="' + url + '" style="width: ' + percentage + ';border: 7px solid ' + frameColor + ';" alt="image" />';
};

remark.macros.jump = function (linkText) {
  var url = this;
  return '<a href="' + url + '"target="_blank">' + linkText + '</a>';
};

remark.macros.portrait = function (person, dates, percentage) {
  var url = this;
  return '<div class="center"> <img class="photo" src="' +  url  + '" style="width:' + percentage  + '; border: 4px solid white;" ><span class="bottomcap">' + person + ' <br> ' + dates +  '</span></div>' ;
  
};

remark.macros.captionpic = function (caption, percentage, color) {
  var url = this;
  return '<div class="center"> <img class="photo" src="' +  url  + '" style="width:' + percentage  + '; border: 4px solid ' + color + ' margin-bottom: 5px;" ><span class="image-credits">' + caption + '</span></div>' ;
  
};

remark.macros.colorbox = function (x, y, boxWidth, boxType) {
  var content = this;
  return '<div class="' + boxType + '" style="position: absolute; left:' + x + '; top:' + y + '; width: ' + boxWidth +  ';"><p class="inner">'  + content + '</p></div>';

};

remark.macros.vspace = function (size) {
  return '<div style="height: ' + size + 'px;"><br></div>';
};

remark.macros.video = function (color) {
   var url = this;
   return '<div class="video" style="border: 4px solid ' + color + ';"><iframe src="https://www.youtube.com/embed/' + url + '" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
}


remark.macros.audio = function () {
  var url = this;
  return '<br><audio controls preload="metadata" style=" width:200px; transform: translateY(-30px);"><source src=' + url + ' type="audio/mpeg"></audio>';
}


remark.macros.button = function () {
  
  return '<button class="show-english">英語</button>';
}


remark.macros.next = function () {
  
  return '<button class="next" onclick="slideshow.gotoNextSlide();">+</button>'
  
}

remark.macros.prev = function () {
  
  return '<button class="previous" onclick="slideshow.gotoPreviousSlide();">-</button>'
  
}


/* x= 60 750  y= 400 */
