'use strict';

const timeout = 2000;

const imgEl = document.querySelector('[data-id="loader"]');
setTimeout(() => {
  imgEl.style.display = 'none';
}, timeout);