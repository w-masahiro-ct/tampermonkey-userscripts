// ==UserScript==
// @name         AdSpeedUp
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Close AdSpeedUp page.
// @author       M
// @match        https://www.adspeedup.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/adspeedup.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/adspeedup.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

// This script is deprecated.

(() => {
  'use strict';
  const title = document.querySelector('title');
  const head = document.querySelector('head');
  head.innerHTML = '';
  head.appendChild(title);
  const body = document.querySelector('body');
  body.style = 'padding: 0; margin: 0;';
  body.innerHTML = '<h1 style="width: 100vw; height: 100vh; padding: 0; margin: 0; line-height: 100vh; font-size: 3rem; text-align: center;">AdSpeedUp is blocked.</h1>';
  setTimeout(() => {
    window.close();
  }, 1000);
})();
