// ==UserScript==
// @name         ReleasePR
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Disable merge button of release PR.
// @author       M
// @match        https://github.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX///8kKS74+PgsMTY+Q0f8/Pzw8PGRk5ZNUVXr6+xDSEzCxMUpLjLV1tY/Q0gwNTq3ubuUl5lbX2NTV1uLjpFKTlKxs7Xh4uOFh4rn5+h3en1vcnZ9gIPc3d6/wcJzd3o3PECmqKpjZ2rOz9CfoaSlrvTgAAABVElEQVQ4jW1T4cKCIAzcEEUTQ0uzLMu+ev9n/GBDUvH+oLtjsNsACBD1PZday/xeC4hRDAkGJI9iQwulcYWkSZd8dsYIp+zHjzLmEQ+3cPy0x1uFzyFy+3Nu8yXXtScX5GquLnIBKA+IpjsbRFkCPF1UOb6n+1cuVUU5M1p6qsVV+8JZsMJI4avdxgZctgI6Ak0KNX1M2VYgjkR8/Anv2PsLES2Qh3qnO4J68wdk4hTzAB0ZAqQ77Akot2GB2RPQLRNeMCpirl9yIqxjQclN507YNcLJl8lG4XfLvzn+BGH4az1iacNRI6jbj7d1QzZhUG/NPGKt+9NonsWRbSPcw9xQu0FZq/vK+VGyoAqChgu2kzTAR6mv74gIg+cDtwn1ygj/RmS41GjHuhuUmgvxfP/b0vOtV4Lfs3DIHgtBStO4bU81aD1nSPQwbp21KMKZ/eJt/wMYKw1xTr8+YQAAAABJRU5ErkJggg==
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/release-pr.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/release-pr.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const releasePr = () => {
    const task = () => {
      const h1Tags = document.querySelectorAll('h1');
      const filteredH1Tags = Array.from(h1Tags).filter(h1Tag => h1Tag.innerText.startsWith('Staging Release') || h1Tag.innerText.startsWith('Main Release'));
      const mergeButton = document.querySelector('.merge-box-button.btn-group-merge');
      if (filteredH1Tags.length > 0 && mergeButton) {
        mergeButton.disabled = true;
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
  releasePr();
  const observer = new MutationObserver(releasePr);
  observer.observe(document, { childList: true, subtree: true });
  window.addEventListener('popstate', releasePr);
})();
