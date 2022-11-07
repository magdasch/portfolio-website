//alert("Hello and welcome to my portfolio");
//console.log("Hello world")
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
} else {
  x.className = 'navtoggle';
  }
}
