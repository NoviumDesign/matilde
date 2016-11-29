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
  $('video').on('ended', function() {
    // $('video')[0].autoplay = false;
    // $('video')[0].load();
    $('video').remove();
  });
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfU3lzdGVtL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcGxpY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBuYXZUb2dnbGUgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkby10b2dnbGUtbmF2JyksXG4gICAgYm9keSAgICAgICAgPSBkb2N1bWVudC5ib2R5LFxuICAgIG1lbnVJdGVtcyAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tbmF2JykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcblxubmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIHRvZ2dsZU5hdigpO1xufSwgZmFsc2UpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICBtZW51SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB0b2dnbGVOYXYoKTtcbiAgfSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVOYXYoKSB7XG4gIGlmIChib2R5LmNsYXNzTGlzdC5jb250YWlucygnbmF2LW9wZW4nKSkge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW4nKTtcbiAgICBuYXZUb2dnbGUudGV4dENvbnRlbnQgPSAnVmlzYSBtZW55JztcbiAgfSBlbHNlIHtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ25hdi1vcGVuJyk7XG4gICAgbmF2VG9nZ2xlLnRleHRDb250ZW50ID0gJ1N0w6RuZyBtZW55JztcbiAgfVxufVxuJChmdW5jdGlvbigpIHtcbiAgJCgndmlkZW8nKS5vbignZW5kZWQnLCBmdW5jdGlvbigpIHtcbiAgICAvLyAkKCd2aWRlbycpWzBdLmF1dG9wbGF5ID0gZmFsc2U7XG4gICAgLy8gJCgndmlkZW8nKVswXS5sb2FkKCk7XG4gICAgJCgndmlkZW8nKS5yZW1vdmUoKTtcbiAgfSk7XG59KTsiXX0=
