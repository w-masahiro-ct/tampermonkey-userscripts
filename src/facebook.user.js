// ==UserScript==
// @name         Facebook
// @namespace    https://github.com/watanabemasahiro128/tampermonkey-userscripts
// @version      1.0
// @description  Hide related user.
// @author       M
// @match        https://www.facebook.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEtklEQVRYhaVXT2icRRT/vdkvm4SUtGqzLmlao6QijXorFL0k0oNECBTBS0TwIEIPRTyIUAlL2pwK6a2IFD1IBHMRAu21PcmCx5JcDFjbNd0kVJrUr0k2O+/n4fvm+79JrA+Gmd2Zee/3fvPmvfkEh5TRJZb//h3jQkwSOCPAIIlBABDBKoFVAZYpWHzxNO4sjUrrMHrloAXDt1ht7WBaiSmA/alJEhAJegAMFRKyJcL5nl4zc/8DaT4XgJHb7P7H18tQfEmwL2Mh3C0xiELl4sNw7kifmV2ZkN1DAxheYHVb7S8kziXt5STDQF57MCdG6r2mdOH+R3k2cgAqP/Ftqr0FcMgZd4sIQiBgCMmNxa3IbEjjk4ZBaWLtY7nXEcDAAqvYbf9G1aHAAQFJSAeK3RxDBrLrc/PGNNDtnd1IMBFpHrnN7s31vbsEzyUsZChOu1gywBdvGXz4WgmnjgBGgO02sNUCHu8Q52+1MxQSIqZ+tNI15mLCc7aerLUuUxPGIwCIAUj83/Ee4Pv3uvBO1aS2dJWB/jIwdERAS6QRAISee7LWugxgOmJg4AdWaXdXyDDaO0iSkJ/f78L5k6X9luP4zZ3M/uh4fOP1jGx8Kk0DANramda29qklaAmNmiZ6BTQYv/uyHGgcQKhLwVAv1enXvnZrZxoAzOgCy7Q6RSWgwSJEDYke4RzwyRsHGwfi9Yz0xv+J1anRBZa9R4/9cbUIMlzu3mWCMByffiF/K35c3sPV+h7Wnyk6pJeUfgL9j9b8cc+2OHmAH4n9QQYYOWZyq67+2sL6M4b6s6m5WCww6UF5Zn8AsWhISF9X3sPmUxuZYyrqY8lmbhE541ExmC8mxSIIwqEYXdJcsYbsLAWDHlQHk6mc2R0JRNwHHS0LYgj7eiSGgx4s4/kOG55+faxYQ0K2vjqa+v1gU/Hmt1ugxpTnEqsCnipWSb5eiDBReP6rPNy0UBsfrRukWDSy6tFyFQgAZBE+r/EAQJC4cs+F5HFbrHq0ugxgrGD+f8nDJzasBengS71nwGUjIovZVOkyV5TBnkMamxruT2bCdKYVkUUZrbH8h328QbI/W7+z4ua2rw7k5nq/2cjd83wijd8LIrL1aumlAbNUkxYt52k1yNVhn8zbzgO12pkRDQqY65Nj53GyoNFyfqkmLQMApswZtfQZVj9aDRsTPQHXFwgV4fEhrn6dm2/KnAEAAwB+rdI04BzD6hecm2MBOUYKCUh45zwmEfVkyCQBgHN+rdKMAADA0FB1lsp6EIha3NwRFcVH6LmkGEiyqI7B+qmh6qzbFwFYuSS75VLpgiga2VsQtX1iQK0CjHswTM+MAQnRKJdKF1Yuxd8IqbrqX6s0IWYCRAOhJ0h4FP1XFAOJ1497QSUDl2QDYib8a5XUt0GusLeuV+91t7vOwrKO0OvoTN0dLqQg/4JyTYh6T3f5bOt69V52W/5lAcC/UWkOl06MCeQKCd8FpYuDQvshWE3GkNIX4sqwnBjLeu7kwI/Tvovr1e32zjTBKUD6QUK/O5VbZz5/gCjRimwJMd/r9cz4N4oNHxpAJDWWvb8ejrdVJ3nzlYs5RZ/9eRfEMoxZxImTd1A73Of5vzUT5iP/7xTcAAAAAElFTkSuQmCC
// @grant        none
// @updateURL    https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/facebook.user.js
// @downloadURL  https://github.com/watanabemasahiro128/tampermonkey-userscripts/raw/main/src/facebook.user.js
// @supportURL   https://github.com/watanabemasahiro128/tampermonkey-userscripts
// ==/UserScript==

(() => {
  'use strict';
  const spans = document.querySelectorAll('span');
  for (const span of spans) {
    if (span.innerText === '知り合いかも') {
      span.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }
  }
})();
