// ==UserScript==
// @name         UncheckRakutenMailMagazine
// @namespace    https://github.com/w-masahiro-ct/tampermonkey-userscripts
// @version      1.0
// @description  Uncheck the opt-in checkboxes on the Rakuten purchase page.
// @author       M
// @match        *://*.step.rakuten.co.jp/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAOVBMVEVHcEz///+7AAD76+v///////+/AAD////////////HKCjRZ2f33t7ux8fag4PhnJzotrbJPDzOVVWBNgs/AAAACnRSTlMA////FBX/sLcXjdlF0wAAAW9JREFUWIXtl8uShCAMRXk4aCPv///YaUph1AmYyGJ6MXdJVU6FSxKAsWnhjzW/GHs9D8/6YvMYYGFj8Zz/A0CAEkep5CURoNVZQiQzBMgINwZ4I+IgQKkWAQ0QKxmwn0IlWCIg+iwXfxA0QE3ZaNFL4R7Aeey5gAHIksJTAHcbQUAFiQJY0TYBBTB/DvCjHujBU9gPAe4nBKDEC08CqCRNllelGcAd3Hdj7SU4Afw8UBqMJwyUxmzGAsAaIABi827AZvAEcDqDhoW9Qko2hGBjobWulnYGWyXKWkbwUL4vZVsJsA33vVBaoWEDopmqqaANCEDfBsw86NpAGeugDShAzwYcoGMDDtCxAQJsk+h8lbryarvaAADWTR5cXVO4BdD0WQCJlclXhgQySAIlvbpgJZDBoWav2t/dztvrdL54EK6EdiQM4OYYuCXbeaoDAC71r23SAO9t4CLbAJo+ADDw9c6a2TQGyN/3ge/3MrFvt0sk+DjaH/0AAAAASUVORK5CYII=
// @grant        none
// @updateURL    https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/uncheck-rakuten-mail-magazine.user.js
// @downloadURL  https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/uncheck-rakuten-mail-magazine.user.js
// @supportURL   https://github.com/w-masahiro-ct/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const ICHIBA_CONTAINER_ID = 'mail-magazine-id';
  // The id and the --mailMagazine / --favoriteShop sections name their purpose, so the whole
  // container is safe to clear. .register-mag also wraps unrelated blocks, so its opt-ins are
  // matched by name instead.
  const OPT_IN_CHECKBOX_SELECTOR = [
    `#${ICHIBA_CONTAINER_ID} input[type="checkbox"]`,               // Rakuten Ichiba
    '.p-cartv2__sectionInner--mailMagazine input[type="checkbox"]', // Rakuten Biccamera
    '.p-cartv2__sectionInner--favoriteShop input[type="checkbox"]', // Rakuten Biccamera
    '.register-mag input[name="news_check"]',                       // Rakuten Books
    '.register-mag input[name^="bookmark_"]',                       // Rakuten Books
  ].join(', ');

  // Ichiba's favorite-shop block follows the mail magazine one and carries nothing but hashed
  // class names, so it can only be found by position. Its checkboxes are then narrowed to the
  // smallest element still holding this text: a layout that one day wraps a consent checkbox in
  // beside them must not take that one down too.
  const FAVORITE_SHOP_TEXT = 'お気に入りショップ';

  const favoriteShopCheckboxes = () => {
    const block = document.getElementById(ICHIBA_CONTAINER_ID)?.nextElementSibling;
    if (!block?.textContent.includes(FAVORITE_SHOP_TEXT)) {
      return [];
    }

    let scope = [...block.querySelectorAll('*')]
      .findLast((element) => element.textContent.includes(FAVORITE_SHOP_TEXT)) ?? block;
    while (scope !== block && !scope.querySelector('input[type="checkbox"]')) {
      scope = scope.parentElement;
    }

    return [...scope.querySelectorAll('input[type="checkbox"]')];
  };

  const optInCheckboxes = () => [
    ...document.querySelectorAll(OPT_IN_CHECKBOX_SELECTOR),
    ...favoriteShopCheckboxes(),
  ];

  // A real click is trusted while our own click() is not, so anything the user turns back on is
  // left alone from then on. The change event cannot tell them apart: the browser marks it
  // trusted even when click() started it. checked is already toggled by the capture phase, so it
  // tells us which way the user went -- turning one back off hands it to the script again.
  const userControlled = new WeakSet();
  document.addEventListener('click', (event) => {
    if (!event.isTrusted || !optInCheckboxes().includes(event.target)) {
      return;
    }

    if (event.target.checked) {
      userControlled.add(event.target);
    } else {
      userControlled.delete(event.target);
    }
  }, true);

  const task = () => {
    optInCheckboxes().forEach((checkbox) => {
      if (!checkbox.checked || userControlled.has(checkbox)) {
        return;
      }

      // click() rather than assigning checked: Ichiba controls these with React and would revert it.
      checkbox.click();
      if (checkbox.checked) {
        // Fallback for a page that cancels the click and toggles checked in its own handler.
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event('input', { bubbles: true }));
        checkbox.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  };
  setTimeout(task, 10);
  setTimeout(task, 25);
  setTimeout(task, 50);
  setTimeout(task, 100);
  setTimeout(task, 250);
  setTimeout(task, 500);
  // Polling instead of a MutationObserver: Ichiba restores checked as a property, which emits no
  // mutation record, and observing would re-enter on the re-render our own click triggers.
  setInterval(task, 1000);
})();
