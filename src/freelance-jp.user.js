// ==UserScript==
// @name         FreelanceJP
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Click my page menu button.
// @author       M
// @match        https://www.freelance-jp.org/mypage
// @icon         data:image/png;base64,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
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/freelance-jp.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/freelance-jp.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const freelanceJp = () => {
    const task = () => {
      const myPageMenuButton = document.querySelector('#my-page-menu-btn');
      const myPageMenuContainer = document.querySelector('#my-page-menu-container');
      if (myPageMenuButton && myPageMenuContainer && window.getComputedStyle(myPageMenuContainer).display === 'none') {
        myPageMenuButton.click();
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
  freelanceJp();
  const observer = new MutationObserver(freelanceJp);
  observer.observe(document, { childList: true, subtree: true });
  window.addEventListener('popstate', freelanceJp);
})();
