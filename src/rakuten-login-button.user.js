// ==UserScript==
// @name         RakutenLoginButton
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Enlarge the login button.
// @author       M
// @match        *://www.rakuten-sec.co.jp/*
// @match        *://*.id.rakuten.co.jp/*
// @match        *://www.rakuten-card.co.jp/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAOVBMVEVHcEz///+7AAD76+v///////+/AAD////////////HKCjRZ2f33t7ux8fag4PhnJzotrbJPDzOVVWBNgs/AAAACnRSTlMA////FBX/sLcXjdlF0wAAAW9JREFUWIXtl8uShCAMRXk4aCPv///YaUph1AmYyGJ6MXdJVU6FSxKAsWnhjzW/GHs9D8/6YvMYYGFj8Zz/A0CAEkep5CURoNVZQiQzBMgINwZ4I+IgQKkWAQ0QKxmwn0IlWCIg+iwXfxA0QE3ZaNFL4R7Aeey5gAHIksJTAHcbQUAFiQJY0TYBBTB/DvCjHujBU9gPAe4nBKDEC08CqCRNllelGcAd3Hdj7SU4Afw8UBqMJwyUxmzGAsAaIABi827AZvAEcDqDhoW9Qko2hGBjobWulnYGWyXKWkbwUL4vZVsJsA33vVBaoWEDopmqqaANCEDfBsw86NpAGeugDShAzwYcoGMDDtCxAQJsk+h8lbryarvaAADWTR5cXVO4BdD0WQCJlclXhgQySAIlvbpgJZDBoWav2t/dztvrdL54EK6EdiQM4OYYuCXbeaoDAC71r23SAO9t4CLbAJo+ADDw9c6a2TQGyN/3ge/3MrFvt0sk+DjaH/0AAAAASUVORK5CYII=
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/rakuten-login-button.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/rakuten-login-button.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const rakutenLoginButton = () => {
    const task = () => {
      if (location.hostname === 'www.rakuten-sec.co.jp') {
        const button = document.querySelector('#login-btn');
        if (button == null) {
          return;
        }

        button.style.cssText = 'padding: 100px 0;';
        return;
      }

      const button = document.querySelector('.loginButton');
      if (button == null) {
        return;
      }

      button.style.minHeight = '350px';
      button.style.minWidth = '350px';
    };
    setTimeout(task, 10);
    setTimeout(task, 50);
    setTimeout(task, 100);
    setTimeout(task, 250);
    setTimeout(task, 500);
    setTimeout(task, 1000);
    setTimeout(task, 5000);
  };
  rakutenLoginButton();
})();
