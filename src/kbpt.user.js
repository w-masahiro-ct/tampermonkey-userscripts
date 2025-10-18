// ==UserScript==
// @name         KBPT
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Show availability of stock.
// @author       M
// @match        https://kouboupath.base.ec/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAdVBMVEVHcEyRQTf/3LnX07b/3Ln/3rr/3Ln/3Ln627nzzKv/3LmQQDaRQTeQQDaRQDb/3LmRQTeMNS2RQTeRQTb/3Ln+27j+3Ln/3LgRr6r6YoEAran/4LuRQTeqyLKRQDb8q6Hg1bf8j5T+yrBzvq9TuK2KMir8p59qZNdmAAAAFHRSTlMALo/z0XFQM/cVp8lIofq1hWr+6TUDi8wAAALpSURBVFiFpVaJssIgDFSn1db7CKEtFc/n/3/iS6BY6lQtuBMPhIRNllBHo88Yj78s+Ia6jvUcL82HtgGWwUTG9d5nsK+DIyzqbRtgWy9C/UdjrXP60Jrecq0jarkyuxoGi3oV7s++SxtgGSnFVh9sCge9jQowOtQ7ZrCrD3H+RH3NAdb1MjLAaKFX6/VKh0voMK71fq/Dz1CLVU2IktBhr/X6F//R7u9v91OAVKn0F/9cIIj8hwBzIaSYx/vPwGAWHSABCWRJrP+U+LPBNDJAZhIQAFmc/wSemMT450Ig0stYjJQbJi/A1BE34f4z6CBcykRY2BTCpUwRmhSQUwAIbQkroT1IbKFSTnz+1oKkzB1/NmSjbyFSUhNIjz9bUEtMDWvkvYU1Hge0RGJaCNsUTBgcXMeUODcpCC8FEAOlzEV7ABsNGwxsibmVEJ7N1FZi0O02M/ylBK+ZwOUzpCUSeA8xQMqp8LoIu4eR7LuUGfNH00PefeDG31si/ZCAwRcpcyG8FF77yWjzWcq55JPXSQE7KcBnKdt7TL7eB8NutwQR2ITb0W6N6I8/SDkFIdkkevcBgpePwXspM+QAAqWQkptQGjcKyD+ZscFbKSdMNgObRcOa7wGvjpiJ9w+qnIt1vIGfgrpcVCeF25E59Eu5IYpZVZ3BpS5AXcvyannbGOeq4vu690E14wW3qrrTYtPEdCLUpSyJgm1nnr9X1Y2/9ElJXYjnqiiq45MyEyAKCqBJ4cjzRFH1SJnyebnzggKd/FAaqCYFwILn7/0tweXlDQwFm4I62QAnZVPA53yPlBO3AS2ozs11VDYQ0FSwMPNEUb5KmcNzA1pxU0yZK2hxseObm++RMqEdssqEL0yd6PxcyyeuHKAhwPPZ63+3KYckiRwKclCtv6EARTvPUndagg9HdvRwprPwOD1OjAeBK+DPZ906pvwc6zY9VV21oAQFvABbKXMjsvkNnbnm8e+DFwN0dcxnkeAA//cSf6rDU3K+AAAAAElFTkSuQmCC
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/kbpt.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/kbpt.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const kbpt = () => {
    const task = () => {
      const infoContainers = document.querySelectorAll('[class^="items-grid_infoContainer"]');
      for (const infoContainer of infoContainers) {
        infoContainer.style.opacity = 0.8;
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
  kbpt();
  const observer = new MutationObserver(kbpt);
  observer.observe(document, { childList: true, subtree: true });
  window.addEventListener('popstate', kbpt);
})();
