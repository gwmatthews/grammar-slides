

remark.macros.audio = function () {
  var url = this;
  return '<audio controls preload="metadata" class="sound"><source src=' + url + ' type="audio/mpeg"></audio><br>';
}

remark.macros.naudio = function () {
  var url = this;
  return '<audio><source src=' + url + ' type="audio/mpeg"></audio><br>';
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

remark.macros.note = function () {
  
  return '<button class="grammar-note">注</button>';
  
}


/* x= 60 750  y= 400 */
