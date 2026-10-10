// ==UserScript==
// @name         GoogleMeetMuteIndicator
// @namespace    https://github.com/w-masahiro-ct/tampermonkey-userscripts
// @version      1.0
// @description  Turn the system mic mute warning into a compact mute indicator.
// @author       M
// @match        https://meet.google.com/*
// @icon         data:image/png;base64,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
// @grant        none
// @updateURL    https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/google-meet-mute-indicator.user.js
// @downloadURL  https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/google-meet-mute-indicator.user.js
// @supportURL   https://github.com/w-masahiro-ct/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  // Type 5 is the "システムでマイクがミュートされています" warning. data-is-auto-hide limits this to
  // the popup, so a modal such as the settings dialog is left alone should it embed the warning.
  // Restyled rather than rebuilt: Meet keeps showing and removing the popup itself, and CSS hides the
  // full warning before it is ever painted.
  const WARNING_SELECTOR = '[role="dialog"][data-is-auto-hide="true"]:has([data-peripheral-error-type="5"])';
  // Meet keeps a gap between the popup and the mic button; the pill drops into it.
  const PILL_DROP_PX = 20;
  // Meet moves the popup into place (from the top-left when the mic button is clicked), so the pill
  // waits until the popup holds still. Turning off Meet's transitions instead could break how it
  // hides the popup and leave the pill on screen after unmuting.
  const SETTLED_ATTRIBUTE = 'data-mute-indicator-settled';
  const SETTLE_MS = 100;

  const style = document.createElement('style');
  style.textContent = `
    ${WARNING_SELECTOR} {
      background: transparent !important;
      border-color: transparent !important;
      box-shadow: none !important;
      pointer-events: none !important;
      overflow: visible !important;
    }

    /* visibility rather than display: the box keeps the size Meet placed above the mic button, so
       its bottom edge stays just above the button. Hidden buttons also cannot take focus. */
    ${WARNING_SELECTOR} * {
      visibility: hidden !important;
    }

    ${WARNING_SELECTOR}[${SETTLED_ATTRIBUTE}]::after {
      all: initial;
      /* all: initial would make it visible; inherit so it hides along with the popup. */
      visibility: inherit;
      pointer-events: none;
      content: 'ミュート中';
      position: absolute;
      bottom: -${PILL_DROP_PX}px;
      left: 50%;
      transform: translateX(-50%);
      padding: 6px 14px 6px 36px;
      border-radius: 999px;
      background: #d93025 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z'/%3E%3C/svg%3E") no-repeat 12px center / 18px 18px;
      color: #fff;
      font: 500 14px/20px 'Google Sans', Roboto, Arial, sans-serif;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
  `;
  document.head.append(style);

  const isSameRect = (a, b) => a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;

  const watchedPopups = new Map();

  const tick = (now) => {
    watchedPopups.forEach((state, popup) => {
      if (!popup.isConnected || !popup.matches(WARNING_SELECTOR)) {
        popup.removeAttribute(SETTLED_ATTRIBUTE);
        watchedPopups.delete(popup);
        return;
      }

      const rect = popup.getBoundingClientRect();
      // Meet may hide the popup without removing it; it has to come to rest again once shown.
      const isShown = popup.checkVisibility({ opacityProperty: true, visibilityProperty: true });
      const isStill = isShown && state.lastRect != null && isSameRect(rect, state.lastRect);
      const stillSince = isStill ? (state.stillSince ?? now) : null;
      watchedPopups.set(popup, { lastRect: rect, stillSince });
      popup.toggleAttribute(SETTLED_ATTRIBUTE, stillSince != null && now - stillSince >= SETTLE_MS);
    });

    if (watchedPopups.size > 0) {
      requestAnimationFrame(tick);
    }
  };

  const watchNewPopups = () => {
    const isIdle = watchedPopups.size === 0;
    document.querySelectorAll(WARNING_SELECTOR).forEach((popup) => {
      if (!watchedPopups.has(popup)) {
        watchedPopups.set(popup, { lastRect: null, stillSince: null });
      }
    });

    if (isIdle && watchedPopups.size > 0) {
      requestAnimationFrame(tick);
    }
  };

  // The attribute filter catches a popup that Meet reuses for a different peripheral error.
  new MutationObserver(watchNewPopups).observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['data-peripheral-error-type'],
  });
  watchNewPopups();
})();
