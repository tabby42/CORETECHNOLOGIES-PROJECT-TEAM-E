//Counter for members page
var counter1 = document.getElementById("counter-1");
var counter2 = document.getElementById("counter-2");
var counter3 = document.getElementById("counter-3");
var counter4 = document.getElementById("counter-4");
var bar1 = document.getElementById("bar-1");
var bar2 = document.getElementById("bar-2");
var bar3 = document.getElementById("bar-3");
var bar4 = document.getElementById("bar-4");

window.setTimeout(startCounters, 1000);

function count(elem, end, interval) {
  var start = 0;
  var id = setInterval(countinner, interval);
  function countinner() {
    if (start === end) {
      clearInterval(id);
    } else {
      start++; 
      elem.innerHTML = start; 
    }
  }
}

function move(elem, end, interval) {
  var width = 0;
  var id = setInterval(step, interval);
  function step() {
    if (width >= end) {
      clearInterval(id);
    } else {
      width ++; 
      elem.style.width = width + '%'; 
    }
  }
}

function startCounters () {
  count(counter1, 83, 80);
  count(counter2, 169, 85);
  count(counter3, 254, 90);
  count(counter4, 230, 95);
  move(bar1, 57, 100);
  move(bar2, 87, 130);
  move(bar3, 99, 160);
  move(bar4, 99, 160);
}
//Counter END

//Sticky Nav
window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 200) {
    document.getElementsByTagName("nav")[0].classList.add("sticky-nav");
  } else {
    document.getElementsByTagName("nav")[0].classList.remove("sticky-nav");
  }
});