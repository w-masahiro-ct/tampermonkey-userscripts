// ==UserScript==
// @name         AdblockPlus
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Close Adblock Plus donation page or plan page.
// @author       M
// @match        https://new.adblockplus.org/*
// @match        https://accounts.adblockplus.org/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADU0lEQVRYhcWWTUwTQRiGn0XQKtkGKeBfpKaG9iJLkHDGNhJJCMemB6/e2pvHxmOPhAu90ZuiqPHgRY2mJSbKgRCyGkMsUojBn5IQAduYADoe2I7d7W5LFOqXbHZmvnfmfeZnN6NQI6YSCfE5Hq8ls42ziQSReFyppqmanEokRGM8zoW/sodl4GcNCMfEv5rvF8K28aDM9wNR0TCVSIimeBzvAZnXgjBVDsu8FCvArgVCFg7b3AlCqae5HYRSb3MrhPIIRL3NyyEa7MxPT0xwWQguC8HpiQlTzh2Nylzp6dJ12kdHTTqr5lI+j/fpUxr9fqm5ADTakan9/bLc2N/POuCpMhNV01A1jR9A4eZNW83Rjg48167R9OQJ2YsXaTDaG+zEqqaxmcuxUyzSoWkUHYzvKAoPAwHW3rwBoOXqVTYsmulYjDuKwnQsBoDb50PcuiXzFQDuaBSA9cVFNpeW9gY22uzCl82yMzsLwHahwJaNphNwJ5NsGqAur1fqKrbgRG8vAMXVVXZXV2nTNDy9vWwAzRbtuWiUk62ttI+MAPBhcpIjjqjm2e44AZwMBgFYn5+nrbUVgPPBIF9tAK6Mj8vyu1SKT8kknQ7m7aOjqJoGwOcXL/7AzIEoPbrfL0pxG8RsKCTrj/1+MQdiMRqVbXldF3ldF9uFghBCiJX79+VYTpHXdXEbxCtDZzoDaiQiy4O6TmBsTNY9kQi/LLN63tPD654eZm7cAMAbDvOt7DMrj+LaGu8fPOBlOEwz4DLaTVvQ3N0tyx3GckmA7m6+AC2WgTsB7t2Du3cBODI4yK9sVuanYzE+JZMAHAVUoK2svwlA7esD4G0qxfr8PABnBgYIhMOc6utj2XZumH5W3xcWKg5iJ5XnpwLgWCjEcZ8PgJXJSVzpNC6M0xoO0+LzoYRCps7XhTDVc8+esZVO0+5gZhfyDLiHhwHYKRbZSqdRDeptY/kAPMPD7NoMspHL8TaVYmZoiBb2lnq/ocyBnMYG8MWgCliEC8b7DNAEfLTkXYAb8y+71KfaFihbmYxYNL79ekdXJrN3IfkfEF2ZDO5gUJFXsnpClMzBcimtB0S5eQXAYUNYzW0BDgvCztwR4KAhnMyrAhwURDXzmgD/ClHLHOA3OvqijL1V9i8AAAAASUVORK5CYII=
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/adblockplus.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/adblockplus.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  if (/^(\/[a-zA-Z]+)?\/update.*$/.test(location.pathname)) {
    const title = document.querySelector('title');
    const head = document.querySelector('head');
    head.innerHTML = '';
    head.appendChild(title);
    const body = document.querySelector('body');
    body.style = 'padding: 0; margin: 0;';
    body.innerHTML = '<h1 style="width: 100vw; height: 100vh; padding: 0; margin: 0; line-height: 100vh; font-size: 3rem; text-align: center;">Adblock Plus is blocked by uBlocklist.</h1>';
    setTimeout(() => {
      window.close();
    }, 1000);
  }
  if (/^(\/[a-zA-Z]+)?\/block-cookie-banners.*$/.test(location.pathname)) {
    const title = document.querySelector('title');
    const head = document.querySelector('head');
    head.innerHTML = '';
    head.appendChild(title);
    const body = document.querySelector('body');
    body.style = 'padding: 0; margin: 0;';
    body.innerHTML = '<h1 style="width: 100vw; height: 100vh; padding: 0; margin: 0; line-height: 100vh; font-size: 3rem; text-align: center;">Adblock Plus is blocked.</h1>';
    setTimeout(() => {
      window.close();
    }, 1000);
  }
})();
