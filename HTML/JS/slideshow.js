var slideindex = 1; 
window.onload = showslides(slideindex);


function next() {
  slideindex+=1;
  showslides(slideindex);
}

function back() {
  var n = document.getElementsByClassName("slide_img");
  var e = document.getElementsByClassName("text");
  slideindex-=1;
  showslides(slideindex);
}

function showslides(x) {
  var n = document.getElementsByClassName("slide_img");
  var e = document.getElementsByClassName("text");
  if (slideindex > n.length) {slideindex=1};
  if (slideindex < 1) {slideindex=n.length};
  for (i=0; i<n.length; i++) {
    n[i].style.display = "none";
    e[i].style.display = "none";
  }
  n[slideindex-1].style.display = "block";
  e[slideindex-1].style.display = "block";
}