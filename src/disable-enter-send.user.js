// ==UserScript==
// @name         DisableEnterSend
// @namespace    https://github.com/w-masahiro-ct/tampermonkey-userscripts
// @version      1.0
// @description  Insert a newline with Enter and send with Ctrl+Enter on AI chat services.
// @author       M
// @match        https://chatgpt.com/*
// @match        https://claude.ai/*
// @match        https://gemini.google.com/*
// @match        https://grok.com/*
// @match        https://copilot.microsoft.com/*
// @match        https://m365.cloud.microsoft/*
// @match        https://chat.deepseek.com/*
// @match        https://www.perplexity.ai/*
// @match        https://www.genspark.ai/*
// @match        https://notebooklm.google.com/*
// @match        https://v0.app/*
// @match        https://cursor.com/*
// @match        https://manus.im/*
// @match        https://www.kimi.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// @updateURL    https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/disable-enter-send.user.js
// @downloadURL  https://github.com/w-masahiro-ct/tampermonkey-userscripts/raw/main/src/disable-enter-send.user.js
// @supportURL   https://github.com/w-masahiro-ct/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';

  const isEnterKey = (event) => event.code === 'Enter' || event.code === 'NumpadEnter';

  const isTextarea = (target) => target.tagName === 'TEXTAREA';

  const isEditableDiv = (target) => target.tagName === 'DIV' && target.isContentEditable;

  const isProseMirror = (target) => isEditableDiv(target) && target.classList.contains('ProseMirror');

  const isLexicalTextbox = (target) => isEditableDiv(target) &&
    target.getAttribute('data-lexical-editor') === 'true' &&
    target.getAttribute('role') === 'textbox';

  const dispatchEnter = (target, options) => {
    target.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Enter',
      code: 'Enter',
      bubbles: true,
      cancelable: true,
      ...options,
    }));
  };

  const stopAndRedispatch = (options) => (event) => {
    event.stopImmediatePropagation();
    dispatchEnter(event.target, options);
  };

  const blockAndRedispatch = (options) => (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    dispatchEnter(event.target, options);
  };

  const nativeTextareaValueSetter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set;

  const insertTextareaNewline = (textarea) => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    nativeTextareaValueSetter.call(textarea, `${textarea.value.slice(0, start)}\n${textarea.value.slice(end)}`);
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  };

  const isCursorAgentsPath = () => /^\/(?:[a-z]{2}(?:-[A-Za-z]{2})?\/)?agents(?:\/|$)/.test(location.pathname);

  const SITE_BEHAVIORS = {
    'chatgpt.com': {
      shouldHandle: (event) => event.target.id === 'prompt-textarea' || isTextarea(event.target),
      onEnter: (event) => {
        if (event.target.id !== 'prompt-textarea') {
          return;
        }
        event.preventDefault();
        dispatchEnter(event.target, { shiftKey: true });
      },
      onCtrlEnter: (event) => {
        if (!event.ctrlKey) {
          return;
        }
        event.preventDefault();
        dispatchEnter(event.target, { metaKey: true });
      },
    },

    'claude.ai': {
      shouldHandle: (event) => isEditableDiv(event.target) || isTextarea(event.target),
      onEnter: (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        dispatchEnter(event.target, { shiftKey: true });
        if (isTextarea(event.target)) {
          insertTextareaNewline(event.target);
        }
      },
      onCtrlEnter: (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        const saveButton = isTextarea(event.target)
          ? event.target
            .closest('[data-cds="UserMessage"]')
            ?.querySelector('button:not([disabled]):has(> span.bg-fill-primary)')
          : null;
        if (saveButton) {
          saveButton.click();
          return;
        }
        dispatchEnter(event.target, {});
      },
    },

    'gemini.google.com': {
      shouldHandle: (event) => (isEditableDiv(event.target) && event.target.classList.contains('ql-editor')) || isTextarea(event.target),
      onEnter: stopAndRedispatch({ shiftKey: true }),
      onCtrlEnter: stopAndRedispatch({}),
    },

    'grok.com': {
      shouldHandle: (event) => isTextarea(event.target) || isEditableDiv(event.target),
      onEnter: stopAndRedispatch({ shiftKey: true }),
      onCtrlEnter: stopAndRedispatch({}),
    },

    'copilot.microsoft.com': {
      shouldHandle: (event) => isTextarea(event.target),
      onEnter: (event) => {
        event.stopImmediatePropagation();
      },
    },

    'm365.cloud.microsoft': {
      shouldHandle: (event) => location.pathname.startsWith('/chat') && event.target.id === 'm365-chat-editor-target-element',
      onEnter: blockAndRedispatch({ shiftKey: true }),
      onCtrlEnter: stopAndRedispatch({ keyCode: 13 }),
    },

    'chat.deepseek.com': {
      shouldHandle: (event) => isTextarea(event.target),
      onEnter: stopAndRedispatch({ shiftKey: true, keyCode: 13, composed: true }),
      onCtrlEnter: stopAndRedispatch({ keyCode: 13, composed: true }),
    },

    'www.perplexity.ai': {
      shouldHandle: (event) => isEditableDiv(event.target),
      onEnter: blockAndRedispatch({ shiftKey: true }),
      onCtrlEnter: blockAndRedispatch({}),
    },

    'www.genspark.ai': {
      shouldHandle: (event) => isTextarea(event.target) || isEditableDiv(event.target),
      onEnter: (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (isTextarea(event.target)) {
          insertTextareaNewline(event.target);
          return;
        }
        document.execCommand('insertLineBreak');
      },
      onCtrlEnter: (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!isTextarea(event.target)) {
          dispatchEnter(event.target, {});
          return;
        }
        document.querySelector('.enter-icon-wrapper')?.click();
      },
    },

    'notebooklm.google.com': {
      shouldHandle: (event) => isTextarea(event.target) && event.target.classList.contains('query-box-input'),
      onEnter: stopAndRedispatch({ shiftKey: true }),
      onCtrlEnter: (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        const submitButton = document.querySelector('query-box form button[type="submit"]');
        if (submitButton) {
          submitButton.click();
          return;
        }
        dispatchEnter(event.target, {});
      },
    },

    'v0.app': {
      shouldHandle: (event) => isTextarea(event.target) || isProseMirror(event.target),
      onEnter: (event) => {
        if (isTextarea(event.target)) {
          event.stopPropagation();
          return;
        }
        event.preventDefault();
        event.stopImmediatePropagation();
        dispatchEnter(event.target, { shiftKey: true });
      },
      onCtrlEnter: (event) => {
        if (isTextarea(event.target)) {
          return;
        }
        event.preventDefault();
        event.stopImmediatePropagation();
        dispatchEnter(event.target, {});
      },
    },

    'cursor.com': {
      shouldHandle: (event) => isCursorAgentsPath() && isLexicalTextbox(event.target),
      onEnter: blockAndRedispatch({ shiftKey: true }),
      onCtrlEnter: (event) => {
        const button = event.target.closest('form')?.querySelector('button[type="submit"]:not([disabled])');
        if (button == null) {
          return;
        }
        event.preventDefault();
        event.stopImmediatePropagation();
        button.click();
      },
    },

    'manus.im': {
      shouldHandle: (event) => isProseMirror(event.target),
      onEnter: blockAndRedispatch({ shiftKey: true }),
      onCtrlEnter: blockAndRedispatch({}),
    },

    'www.kimi.com': {
      shouldHandle: (event) => isLexicalTextbox(event.target),
      onEnter: blockAndRedispatch({ shiftKey: true }),
      onCtrlEnter: blockAndRedispatch({}),
    },
  };

  const behavior = SITE_BEHAVIORS[location.hostname];
  if (behavior == null) {
    return;
  }

  const handleKeydown = (event) => {
    if (event.isComposing || event.keyCode === 229 || !event.isTrusted) {
      return;
    }
    if (!isEnterKey(event) || event.shiftKey || !behavior.shouldHandle(event)) {
      return;
    }

    if (event.ctrlKey || event.metaKey) {
      behavior.onCtrlEnter?.(event);
      return;
    }
    behavior.onEnter?.(event);
  };

  document.addEventListener('keydown', handleKeydown, { capture: true });
})();
