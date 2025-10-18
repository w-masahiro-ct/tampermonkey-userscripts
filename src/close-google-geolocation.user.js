// ==UserScript==
// @name         CloseGoogleGeolocationDialog
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Close Google Geolocation Dialog.
// @author       M
// @match        https://google.com/*
// @match        https://www.google.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/google-geolocation.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/google-geolocation.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const task = () => {
    const gRaisedButtons = document.querySelectorAll('g-raised-button');
    for (const gRaisedButton of gRaisedButtons) {
      if (gRaisedButton.innerText === '後で') {
        gRaisedButton.click();
        break;
      }
    }
  };
  setTimeout(task, 10);
  setTimeout(task, 25);
  setTimeout(task, 50);
  setTimeout(task, 100);
  setTimeout(task, 250);
  setTimeout(task, 500);
  setTimeout(task, 1000);
  setTimeout(task, 5000);
  setTimeout(task, 10000);
})();
