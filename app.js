// Tabs
window.addEventListener("DOMContentLoaded", event => {
  const options = {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity
  };

  const tabsContainer = document.querySelector(".nav-content .tabs");
  M.Tabs.init(tabsContainer, options);
});

// Side Nav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  const options = {
    inDuration:250,
    outDuration:250,
    edge:'left'
  }
  var instances = M.Sidenav.init(elems, options);
});


// Carousel
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  const options = {
    fullWidth: true,
    indicators: true
  }
  var instances = M.Carousel.init(elems, options);
});

// Collapsible
document.addEventListener('DOMContentLoaded', function () {
  var elem = document.querySelector('.collapsible.expandable');
  var instance = M.Collapsible.init(elem, {
    accordion: false
  });
  const options = {
    inDuration: 200,
    outDuration: 200
  }
});
