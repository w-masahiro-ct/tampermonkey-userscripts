// ==UserScript==
// @name         AmazonPrimeVideo
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Customize progress bar.
// @author       M
// @match        https://www.amazon.co.jp/gp/video/mystuff/watchlist
// @match        https://www.amazon.co.jp/gp/video/mystuff/watchlist/all/*
// @icon         data:image/png;base64,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
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/amazon-prime-video.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/amazon-prime-video.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const amazonPrimeVideo = () => {
    const task = () => {
      const progressBars = document.querySelectorAll('span[data-testid="progress-bar"]');
      for (const progressBar of progressBars) {
        progressBar.style.backgroundColor = '#FF2200';
        progressBar.style.minWidth = '5%';
        progressBar.style.height = '15px';
        progressBar.parentElement.style.backgroundColor = 'hsla(0, 0%, 100%, 0.75)';
        progressBar.parentElement.style.boxShadow = '0 4px 6px 0 rgba(0, 0, 0, 1), 0 12px 20px 8px rgba(0, 0, 0, 0.75);';
        progressBar.parentElement.style.height = '15px';
      };
    }
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
  amazonPrimeVideo();
  const observer = new MutationObserver(amazonPrimeVideo);
  observer.observe(document, { childList: true, subtree: true });
  window.addEventListener('popstate', amazonPrimeVideo);
})();
