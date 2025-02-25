// ==UserScript==
// @name         YouTubeShort
// @namespace    https://github.com/w-masahiro-ct/tampermonkey-userscripts
// @version      1.0
// @description  Hide related shorts.
// @author       MM
// @match        *://www.youtube.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAe1BMVEVHcEymAACFhYXkAAC/AADyAADTAAD/////Ly//AwPhBgbxAAAmAAD5AADxAADJAADVBATaDw+BAADTAgL/LCzWAADhCAjfGhr/KCjnAAD0AADOAAD/AAD/////9/f/7+//e3v/UFD/vr7/qan/PT3/39//kJD/Kir/zc0Q/tNHAAAAHHRSTlMALQOZg+HKD8j9S+wQ88ttWX4fO6+0imqYqbniBuNvagAAAZNJREFUWIXtlt1ygjAQhTdEaBOSQEQBNVGrrfX9n7ABRlvR/EhueuGZYRgg52MTluwCvPTSv1LCEKpo00jZtovF4n0sc69ta9k0Ja0QYsnIPpdrkeZEKdUdv6erhmvSn3ieCoHpXztWT4uotLz4Wfq8v1cz+FE+0a/UEMNqsl/l/QJM9w8hFDEAHDcDpQSDRMQA0jnMp37DXhxFAggFxG0P9+N0fqQSKuuw7TmAUEBpB2h99CJqRxoYgD5/eADYAzBBfDoBK5h5AHq3dwGWfoDWX455BAH09mgdlAUBHPMIBWh9eLyYGdSBgN3p4SARGoElgNAp2L9DGOD0bR0UAjjY7V0e+FLZnYhegEkh4vwjMZQugCuJLwBqfYEv+l4SKuuWdvC+XnU7UkRl7FTG7soVsKjCkiOAdUwApjKBjIlgbYprFQOQXYMQs4qsA9Dp/npokiYT6kubVk5LpqvfSIo8pBZfRbjA7KZVZYgWM7zMsk3O+V2f2nsI4TzdZNkSzwpa3drHfXOSvN3J3HR32y+9FKEfw10c+oXU9S4AAAAASUVORK5CYII=
// @grant        none
// @updateURL    https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/youtube-short.user.js
// @downloadURL  https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/youtube-short.user.js
// @supportURL   https://github.com/w-masahiro-ct/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const youTubeShort = () => {
    const task = () => {
      try {
        if (location.pathname.startsWith('/shorts')) {
          document.addEventListener('touchmove', (e) => { e.preventDefault(); }, { passive: false });
          document.addEventListener('mousewheel', (e) => { e.preventDefault(); }, { passive: false });
          document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              e.stopPropagation();
            }
          }, true);
          document.getElementById('1').style.visibility = 'hidden';
          document.getElementById('2').style.visibility = 'hidden';
          document.getElementById('3').style.visibility = 'hidden';
          document.getElementById('4').style.visibility = 'hidden';
          document.getElementById('5').style.visibility = 'hidden';
          document.getElementById('6').style.visibility = 'hidden';
          document.getElementById('7').style.visibility = 'hidden';
          document.getElementById('8').style.visibility = 'hidden';
          document.getElementById('9').style.visibility = 'hidden';
          document.getElementById('10').style.visibility = 'hidden';
          document.getElementById('11').style.visibility = 'hidden';
          document.getElementById('12').style.visibility = 'hidden';
          document.getElementById('13').style.visibility = 'hidden';
          document.getElementById('14').style.visibility = 'hidden';
          document.getElementById('15').style.visibility = 'hidden';
          document.getElementById('16').style.visibility = 'hidden';
        }
      } catch {
      }
    };
    setTimeout(task, 10);
    setTimeout(task, 50);
    setTimeout(task, 100);
    setTimeout(task, 250);
    setTimeout(task, 500);
    setTimeout(task, 1000);
    setTimeout(task, 5000);
  };
  youTubeShort();
  const observer = new MutationObserver(youTubeShort);
  observer.observe(document, { childList: true, subtree: true });
  window.addEventListener('popstate', youTubeShort);
})();
