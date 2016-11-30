require('objectFitPolyfill');

var navToggle   = document.getElementById('do-toggle-nav'),
    body        = document.body,
    menuItems   = document.getElementById('main-nav').getElementsByTagName('a');

navToggle.addEventListener('click', function() {
  toggleNav();
}, false);

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    toggleNav();
  }, false);
}

function toggleNav() {
  if (body.classList.contains('nav-open')) {
    body.classList.remove('nav-open');
    navToggle.textContent = 'Visa meny';
  } else {
    body.classList.add('nav-open');
    navToggle.textContent = 'Stäng meny';
  }
}
$(function() {
  // following function from http://stackoverflow.com/questions/14653346/jquery-bind-run-function-before-media-ends
  $('video').on('timeupdate', function(event) {
    var current = Math.round(event.target.currentTime * 1000);
    var total = Math.round(event.target.duration * 1000);

    if ( ( total - current ) < 2000 ) {
      $('.welcome').addClass('video-ended');
    }
  });
});
