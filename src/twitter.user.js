// ==UserScript==
// @name         Twitter
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Restrict twitter.
// @author       M
// @match        https://twitter.com/*
// @match        https://x.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAAD////f398QEBAgICDv7+9wcHBAQECAgIC/v7/Pz8+vr6+QkJAwMDBQUFCfn59gYGBA/ZVxAAAA2ElEQVQ4jc1SSRLDIAzD7GuS/7+2yKQNENJrqwMMFiBbthB/gkSMrY/F/qik8d4bo69QJt9fd2SFOCh8An7k8aAIseMaw1KaslBSKig1kUL1NMFRxsIiWko98xBxWCx4s+CFihCJRquIqwsUJFZMvFKdYcFYmgvsEKAdHgQ4exOw3EucRfKXL2BoehSpBRo29EkkkbXN0LUIdzA1Q7clj3fvrt1FNoq8O9rhapj5Wv7ZoUzHWfDAXx1uUxHGjioJA07wVLCrQ4HdKdPufexD04jW/4Dl2PwELxkCBNiT/pD8AAAAAElFTkSuQmCC
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/twitter.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/twitter.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const twitter = () => {
    const task = () => {
      try {
        // if ((new Date()).getDay() != 0) { // 日曜日以外
          const trend = document.querySelector('div[aria-label="タイムライン: トレンド"]');
          if (trend) {
            trend.style.visibility = 'hidden';
          }
          if (location.pathname !== '/notifications') {
            document.querySelector('body').style.visibility = 'hidden';
            location.href = 'https://www.google.com/';
          }
        // }
      } catch {
      }
    };
    setTimeout(task, 1);
    setTimeout(task, 50);
    setTimeout(task, 100);
    setTimeout(task, 250);
    setTimeout(task, 500);
    setTimeout(task, 1000);
    setTimeout(task, 1500);
    setTimeout(task, 2000);
    setTimeout(task, 2500);
    setTimeout(task, 3000);
    setTimeout(task, 3500);
    setTimeout(task, 4000);
    setTimeout(task, 4500);
    setTimeout(task, 5000);
  };
  twitter();
  const observer = new MutationObserver(twitter);
  observer.observe(document, { childList: true, subtree: true });
  window.addEventListener('popstate', twitter);
})();
