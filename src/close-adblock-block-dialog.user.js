// ==UserScript==
// @name         CloseAdBlockBlockDialog
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Close Ad Block Block Dialog.
// @author       M
// @match        http://*/*
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/close-adblock-block-dialog.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/close-adblock-block-dialog.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const task = () => {
    document.querySelector('.fc-ab-dialog .fc-close')?.click();
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
