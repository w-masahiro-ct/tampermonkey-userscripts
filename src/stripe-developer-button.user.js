// ==UserScript==
// @name         StripeDeveloperButton
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Expand width of developer button on stripe.
// @author       M
// @match        https://dashboard.stripe.com/*
// @icon         data:image/png;base64,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
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/stripe-developer-button.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/stripe-developer-button.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const stripeDeveloperButton = () => {
    const task = () => {
      const aTags = document.querySelectorAll('a[href="/developers"]');
      const developerButton = Array.from(aTags).filter(aTag => aTag.innerText === '開発者')[0];
      if (developerButton) {
        developerButton.style.whiteSpace = 'nowrap';
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
  };
  stripeDeveloperButton();
  const observer = new MutationObserver(stripeDeveloperButton);
  observer.observe(document, { childList: true, subtree: true });
  window.addEventListener('popstate', stripeDeveloperButton);
})();
