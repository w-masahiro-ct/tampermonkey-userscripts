// ==UserScript==
// @name         Wappalyzer
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Close Wappalyzer donation page.
// @author       M
// @match        https://www.wappalyzer.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAq1BMVEX///9GCK0cAXJJCLFEAKw/AKs5AKkZAG8yAKcrAKbZ0uwAAGsNAG4AAGMAAGitntfn4vPOxeaJccbw7PeXg8329PvJv+SnltQUAKGQecssAJBIPYYtBIglA30AAFnPzd0/B6LBvtNeVpKIgqyyrslNQ4minb3k4uw9MYB7X8BcM7VnRbm7rt11V75VKbKgj9GDacRiPbdQH7FtTbt8d6FwaJ00JnwjDnV3caFMVTd/AAACYklEQVRYhe2WW1erMBSECSQhgUDphWpvaq1a21q13v//LzshQCWbpIX65DrOI+QbktkDC8f503+gweBn/Iqx1Q/wdE0Rouv0VD4hBEkRkpzGdzlGSph1T+E7HO3FO+35HkMVsV5bfkORJrpphfcRQUAE9ZvzAcOQz6IMmvIP3MBLB/7QjB8wE66G0ajXWxAfqmyHbo/i6SOMj1SvkMcjvU4o5OVDe1WHw70e1uIj8thpNRTMh3b+jCMo8pRd12LhZzb+GcaPGcU82zLWNsaezfyuFj8JOpSts6Pp1nRnwPsYxofVl6Sj3sSdno2h1916e/FLkYz0SUA69V6fQ55SQkff93tgf/gcGMAD8E6w4Vw+Zlg8Ctwn+HCENBt2smIZ+ZpZBPogTDGOqn1b5Y1Nutnx2SYADSOjOu+8jb3KCr7dp/RECdMn7I3f6vwk9Kde9SHspXz91yBgb+qHE8gL4br+TA+asoF6c16Bwcx3XSGAwYUr5bvI05bKk3TB99FDcpnUBTC4jNVl/0p3QITqDfOu8nXxJTzD0hXqzhg4gOOPFS/cpWEMk1A5TA84yPiyNfUIc73HymFmdfBmio/fzbzj3EW5g80g56M7G+84c+XgujDKPL78XjS38zLKUBiHsY9fhKb4Kko/QuMwivjDj+O/K9exYRhF/PH1UVxqYYiyiG/RhHecm0jvddne6KYZD3ttb69d/c/vXpft/WzxgyF1W/a6bO9tK1zqqxhGEf9XW77sddG+A+21ax75Oe4fbq9dS6GiFOJIe+1K72WU4f3JP9tO1utm7bVr0bC9f/rd+gecqCJKzDwnWAAAAABJRU5ErkJggg==
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/wappalyzer.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/wappalyzer.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  if (location.pathname.startsWith('/upgraded')) {
    const title = document.querySelector('title');
    const head = document.querySelector('head');
    head.innerHTML = '';
    head.appendChild(title);
    const body = document.querySelector('body');
    body.style = 'padding: 0; margin: 0;';
    body.innerHTML = '<h1 style="width: 100vw; height: 100vh; padding: 0; margin: 0; line-height: 100vh; font-size: 3rem; text-align: center;">Wappaplyzer is blocked by uBlocklist.</h1>';
    setTimeout(() => {
      window.close();
    }, 1000);
  }
})();
