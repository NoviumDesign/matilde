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
  $('video').on('ended', function() {
    // $('video')[0].autoplay = false;
    // $('video')[0].load();
    $('video').remove();
  });
});