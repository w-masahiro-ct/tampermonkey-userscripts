// ==UserScript==
// @name         ClickGmailMore
// @namespace    https://github.com/w-masahiro-ct/tampermonkey-userscripts
// @version      1.0
// @description  Click Gmail More Button.
// @author       M
// @match        https://mail.google.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAA/JJREFUWMPtl0toXVUUhv+19r6vxDYP1BANiabGQgY2Uu8tLdbH1VCFWBx0JLTEkZcO7KwUcWBBpJiBOlOMxIE4kAxCQdA0D5OSWC7JwDQdRGkVhGDaoG2Se+7jnL2Wgzx6k9zYPEpxkB82HM7m7H/t9a2z9jnArna1RhP19VWTzc3h+72ufoewXkbV2vu8fPFT4+NNPzc29HiWJjO5THp03xOn7pd5/hKfkkdM2gV20g3anlxvuGl5jgBgrLa2LBcLDZazSeREYIigAETw+QLxudYbN+5sx/jvS6jYw6ELxmiKCFAHUBQIMpq2WfcyHYfHAJCL2WYGJTwRCABfFU4VYYNUU81Dvf+0xlu2aj5z5EiL7Xm610Y0JQ4IfMAJ4DyAmBJ+1DavICDRMlrLDEBWFBFjEqrUP5uMt2/WfDYZbzdh12/yNhEUFKqr1yUCYFAGABYAjMspURRCZj0/EUSIqg2ja/aVxKE75M7t6xsvieT6qwcrKtRcMISUyOKzpaqZoeDA3S3C0Wfexu3yWoRcvuSOnCoCVUQNpSqVe2dKIJlpjbdUKvdGDaWCJYSlZMnhpsTQXWjSlQC+feFj7mz7Br/VPY9QkMViCa5H4jmBZU5YwSoks8l4uxX0W+aE5wSlrGnJPF2owTu3j+LsQgIrCPYG83KrshFdr32F1rFPcXSiE6wOjm1JJIaomgldN5PxOAAw02ldmislA4UA+Nrbjy+8ZmRhUYUcfl8OAACM+HAmhO8Pv4c/Hz2A4yPnUbEwvSESAhAxfBoAClJ613dTXo6OhQP4MV+HEAlCtPi2oTgAACAVWJfHL0+14a/q/Xjz8vtowK+gJQRrkWy04+WUxxhIF2rw0dyzuB7sRZRccftZ3QmLFQpyuFXZiK7XO2Wi5lCfkYJviTbdAywRLKk/Yiv6zswdlj/cniLzDVrxOm7iQ0Nl/O5zX34YDrInoDodZb6neZQZUJ2OFfTEyTcaPvDVcggbZ+o/VyRV1MqCKR+euuiJJn2RgZhh0EYpNwxfZMATTUZHxy7WZvzIvULmzaa1bnBsKpMxbdlAOpggxUgsEZgg2UA6MhnTVjc4NrVpXFvp7/VXrmQBnJ1JHkyHiD+LMj8GAIHIdKBypmZgvHurZwZv55SrGRjv9kSTBXHDBdFhTzS5HfNtB7CMZD4oPzYfxI5tJeU7QrBWTw4N5Xb6scIAoALCA5Y6pZUA2FgfxA/MnJiAsPFXApjPe9fU+SMmXA620aIRAe+gTkSIOWywakQsNJCRUH7+2koNpM8/PPfiJ9qGQv4ldRKDW2qbxoAYV7cbQET8q0Ge3lrVYY3J5iU3dPXkD3O7/yC7+l/oX8LKuOW7KUMeAAAAAElFTkSuQmCC
// @grant        none
// @updateURL    https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/click-gmail-more-button.user.js
// @downloadURL  https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/click-gmail-more-button.user.js
// @supportURL   https://github.com/w-masahiro-ct/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const task = () => {
    document.querySelector('[aria-label="その他のラベル"]')?.click();
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
