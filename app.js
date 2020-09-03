// Tabs inside Navbar
window.addEventListener("DOMContentLoaded", (event) => {
  const options = {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity,
  };

  const tabsContainer = document.querySelector(".nav-content .tabs");
  M.Tabs.init(tabsContainer, options);
});

// Tabs in video page
window.addEventListener("DOMContentLoaded", (event) => {
  const options = {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity,
  };

  const tabsContainer = document.querySelector("#select_section .tabs");
  M.Tabs.init(tabsContainer, options);
});

// Side Nav
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  const options = {
    inDuration: 250,
    outDuration: 250,
    edge: "left",
  };
  var instances = M.Sidenav.init(elems, options);
});

// Carousel
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  const options = {
    fullWidth: true,
    indicators: true,
  };
  var instances = M.Carousel.init(elems, options);
});

// Collapsible
document.addEventListener("DOMContentLoaded", function () {
  var elem = document.querySelectorAll(".collapsible.expandable");
  var instance = M.Collapsible.init(elem, {
    accordion: false,
  });
  const options = {
    inDuration: 100,
    outDuration: 100,
  };
});

// Floating action button
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".fixed-action-btn");
  const options = {
    hoverEnabled: false,
  };
  var instances = M.FloatingActionButton.init(elems, options);
});

//ToolTips
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".tooltipped");
  const options = {
    position: "left",
  };
  var instances = M.Tooltip.init(elems, options);
});

/*------
VIDEO SECTION Javascript
-------*/

/*
initial state: content_1 appears
*/

/*switch 1*/
function switch1() {
  const one = document.getElementById("content_1");
  one.style.display = "block";
  const two = document.getElementById("content_2");
  two.style.display = "none";
  const three = document.getElementById("content_3");
  three.style.display = "none";
  const four = document.getElementById("content_4");
  four.style.display = "none";
}
/*switch 2*/
function switch2() {
  const one = document.getElementById("content_1");
  one.style.display = "none";
  const two = document.getElementById("content_2");
  two.style.display = "block";
  const three = document.getElementById("content_3");
  three.style.display = "none";
  const four = document.getElementById("content_4");
  four.style.display = "none";
}
/*switch3*/
function switch3() {
  const one = document.getElementById("content_1");
  one.style.display = "none";
  const two = document.getElementById("content_2");
  two.style.display = "none";
  const three = document.getElementById("content_3");
  three.style.display = "block";
  const four = document.getElementById("content_4");
  four.style.display = "none";
}
/*switch4*/
function switch4() {
  const one = document.getElementById("content_1");
  one.style.display = "none";
  const two = document.getElementById("content_2");
  two.style.display = "none";
  const three = document.getElementById("content_3");
  three.style.display = "none";
  const four = document.getElementById("content_4");
  four.style.display = "block";
}
