// ==UserScript==
// @name         YouTubeTop
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Disable opening the top page.
// @author       M
// @match        *://www.youtube.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAe1BMVEVHcEymAACFhYXkAAC/AADyAADTAAD/////Ly//AwPhBgbxAAAmAAD5AADxAADJAADVBATaDw+BAADTAgL/LCzWAADhCAjfGhr/KCjnAAD0AADOAAD/AAD/////9/f/7+//e3v/UFD/vr7/qan/PT3/39//kJD/Kir/zc0Q/tNHAAAAHHRSTlMALQOZg+HKD8j9S+wQ88ttWX4fO6+0imqYqbniBuNvagAAAZNJREFUWIXtlt1ygjAQhTdEaBOSQEQBNVGrrfX9n7ABRlvR/EhueuGZYRgg52MTluwCvPTSv1LCEKpo00jZtovF4n0sc69ta9k0Ja0QYsnIPpdrkeZEKdUdv6erhmvSn3ieCoHpXztWT4uotLz4Wfq8v1cz+FE+0a/UEMNqsl/l/QJM9w8hFDEAHDcDpQSDRMQA0jnMp37DXhxFAggFxG0P9+N0fqQSKuuw7TmAUEBpB2h99CJqRxoYgD5/eADYAzBBfDoBK5h5AHq3dwGWfoDWX455BAH09mgdlAUBHPMIBWh9eLyYGdSBgN3p4SARGoElgNAp2L9DGOD0bR0UAjjY7V0e+FLZnYhegEkh4vwjMZQugCuJLwBqfYEv+l4SKuuWdvC+XnU7UkRl7FTG7soVsKjCkiOAdUwApjKBjIlgbYprFQOQXYMQs4qsA9Dp/npokiYT6kubVk5LpqvfSIo8pBZfRbjA7KZVZYgWM7zMsk3O+V2f2nsI4TzdZNkSzwpa3drHfXOSvN3J3HR32y+9FKEfw10c+oXU9S4AAAAASUVORK5CYII=
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/youtube-top.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/youtube-top.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const youTubeTop = () => {
    const task = () => {
      try {
        // if ((new Date()).getDay() != 0) { // 日曜日以外
          if (location.pathname === '/') {
            document.querySelector('body').style.visibility = 'hidden';
            location.href = 'https://www.google.com/';
          }
        // }
      } catch {
      }
    }
    setTimeout(task, 1);
    setTimeout(task, 50);
    setTimeout(task, 100);
  };
  youTubeTop();
  const observer = new MutationObserver(youTubeTop);
  observer.observe(document, { childList: true, subtree: true });
  window.addEventListener('popstate', youTubeTop);
})();
