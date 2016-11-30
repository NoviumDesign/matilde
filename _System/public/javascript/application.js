(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfU3lzdGVtL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcGxpY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgbmF2VG9nZ2xlICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG8tdG9nZ2xlLW5hdicpLFxuICAgIGJvZHkgICAgICAgID0gZG9jdW1lbnQuYm9keSxcbiAgICBtZW51SXRlbXMgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLW5hdicpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJyk7XG5cbm5hdlRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICB0b2dnbGVOYXYoKTtcbn0sIGZhbHNlKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgbWVudUl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgdG9nZ2xlTmF2KCk7XG4gIH0sIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1vcGVuJykpIHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuJyk7XG4gICAgbmF2VG9nZ2xlLnRleHRDb250ZW50ID0gJ1Zpc2EgbWVueSc7XG4gIH0gZWxzZSB7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCduYXYtb3BlbicpO1xuICAgIG5hdlRvZ2dsZS50ZXh0Q29udGVudCA9ICdTdMOkbmcgbWVueSc7XG4gIH1cbn1cbiQoZnVuY3Rpb24oKSB7XG4gIC8vIGZvbGxvd2luZyBmdW5jdGlvbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQ2NTMzNDYvanF1ZXJ5LWJpbmQtcnVuLWZ1bmN0aW9uLWJlZm9yZS1tZWRpYS1lbmRzXG4gICQoJ3ZpZGVvJykub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBjdXJyZW50ID0gTWF0aC5yb3VuZChldmVudC50YXJnZXQuY3VycmVudFRpbWUgKiAxMDAwKTtcbiAgICB2YXIgdG90YWwgPSBNYXRoLnJvdW5kKGV2ZW50LnRhcmdldC5kdXJhdGlvbiAqIDEwMDApO1xuXG4gICAgaWYgKCAoIHRvdGFsIC0gY3VycmVudCApIDwgMjAwMCApIHtcbiAgICAgICQoJy53ZWxjb21lJykuYWRkQ2xhc3MoJ3ZpZGVvLWVuZGVkJyk7XG4gICAgfVxuICB9KTtcbn0pO1xuIl19
