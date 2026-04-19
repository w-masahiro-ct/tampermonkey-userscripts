// ==UserScript==
// @name         ClickYahooMailSkipButton
// @namespace    https://github.com/w-masahiro-ct/tampermonkey-userscripts
// @version      1.0
// @description  Click Yahoo Mail Skip Button.
// @author       M
// @match        https://mail.yahoo.co.jp/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEVHcEwIBgcAAADg4ODV1dV/ABr6ADIXFhdhX2Dp6enU1NTZ3d3v8vP5EjKDABf9ACbJycnq6uriwsa8w8P/ADLh4eH/ATf29fXEw8Pk5OTAv7//ACP5+vr2I0Lo4eLGy8vW6efHx8fq//+00s7nSl/YaXfVrrTs6evSh5HklaLEfIcNEAqiAAAAFHRSTlMAAwH+0V79DCzs9v38/UX8sLXt/tX80usAAAD6SURBVHicvdLbcoIwFIVhNG1tS5AeCCFnSBVs3/8BuxNSCpGoV/6j48X6ZIZAlt2jzYVuu8L+Mdne7buiqhMJ9ezAR1E+rVYWjQdYK1FXZ8H/ee7BixxWBOyf5nUEVOJDLGpxMIYHILG0kYD9q+MToJTa41zU4gh7MwfUnkQVSF3B3kALQO13ELD/+D0C1PalE/A5jXsMKO4LAcdX9C1fBQS1XAk4nlbnDT8HDIHolDKtRgx5sQAEEQLfriMafhmCu5wBiZHboTzXxEuyOIdpn0KEmf+THOL5TwSAc7QaC08TsWSDA5u3h2TvuyvvfZZtr7zx475Nlt2lX2UPLZbum6y5AAAAAElFTkSuQmCC
// @grant        none
// @updateURL    https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/click-yahoo-mail-skip-button.user.js
// @downloadURL  https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/click-yahoo-mail-skip-button.user.js
// @supportURL   https://github.com/w-masahiro-ct/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const task = () => {
    document.querySelector('#ly-linkage-promotion-modal--dialog .lylpm--button[data-type="skip"]')?.click();
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
