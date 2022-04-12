
// images animation

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}


function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("photos");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
x[slideIndex -1].style.display = "block";
}


// navbar effect

var prevScrollpos=
window.pageYOffset;
window.onscroll = function() {
  var currentScrollpos =
  window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {

    document.getElementById("nav").style.top = "0";
  }else {

    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollpos;
}

// scroll trigger


