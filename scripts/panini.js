var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/snoozer.jpeg') {
    myImage.setAttribute ('src','images/outside.jpeg');
  } else {
    myImage.setAttribute ('src','images/snoozer.jpeg');
  }
}


