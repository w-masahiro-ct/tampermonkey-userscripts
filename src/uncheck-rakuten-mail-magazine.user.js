// ==UserScript==
// @name         UncheckRakutenMailMagazine
// @namespace    https://github.com/w-masahiro-ct/tampermonkey-userscripts
// @version      1.0
// @description  Uncheck the mail magazine checkboxes on the Rakuten purchase page.
// @author       M
// @match        *://*.step.rakuten.co.jp/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAOVBMVEVHcEz///+7AAD76+v///////+/AAD////////////HKCjRZ2f33t7ux8fag4PhnJzotrbJPDzOVVWBNgs/AAAACnRSTlMA////FBX/sLcXjdlF0wAAAW9JREFUWIXtl8uShCAMRXk4aCPv///YaUph1AmYyGJ6MXdJVU6FSxKAsWnhjzW/GHs9D8/6YvMYYGFj8Zz/A0CAEkep5CURoNVZQiQzBMgINwZ4I+IgQKkWAQ0QKxmwn0IlWCIg+iwXfxA0QE3ZaNFL4R7Aeey5gAHIksJTAHcbQUAFiQJY0TYBBTB/DvCjHujBU9gPAe4nBKDEC08CqCRNllelGcAd3Hdj7SU4Afw8UBqMJwyUxmzGAsAaIABi827AZvAEcDqDhoW9Qko2hGBjobWulnYGWyXKWkbwUL4vZVsJsA33vVBaoWEDopmqqaANCEDfBsw86NpAGeugDShAzwYcoGMDDtCxAQJsk+h8lbryarvaAADWTR5cXVO4BdD0WQCJlclXhgQySAIlvbpgJZDBoWav2t/dztvrdL54EK6EdiQM4OYYuCXbeaoDAC71r23SAO9t4CLbAJo+ADDw9c6a2TQGyN/3ge/3MrFvt0sk+DjaH/0AAAAASUVORK5CYII=
// @grant        none
// @updateURL    https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/uncheck-rakuten-mail-magazine.user.js
// @downloadURL  https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/uncheck-rakuten-mail-magazine.user.js
// @supportURL   https://github.com/w-masahiro-ct/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const task = () => {
    document.querySelectorAll('#mail-magazine-id input[type="checkbox"]').forEach((checkbox) => {
      if (checkbox.checked) {
        // React controls these checkboxes, so assigning checked would be reverted on re-render.
        checkbox.click();
      }
    });
  };
  setTimeout(task, 10);
  setTimeout(task, 25);
  setTimeout(task, 50);
  setTimeout(task, 100);
  setTimeout(task, 250);
  setTimeout(task, 500);
  // Polling instead of a MutationObserver: React restores checked as a property, which emits no
  // mutation record, and observing would re-enter on the re-render our own click triggers.
  setInterval(task, 1000);
})();
