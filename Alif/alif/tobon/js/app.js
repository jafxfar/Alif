'use strict';

function bindPartnerToEl(partner, el) {
  const linkEl = el.querySelector('[data-id="partner-link"]');
  const logoEl = el.querySelector('[data-id="logo"]');
  const titleEl = el.querySelector('[data-id="title"]');
  const categoryEl = el.querySelector('[data-id="category"]');
  const periodEl = el.querySelector('[data-id="period"]');
  linkEl.setAttribute('href', `${partner.url}`);
  logoEl.setAttribute('src', `${partner.logoUrl}`);
  logoEl.setAttribute('alt', `${partner.logoUrl}`);
  titleEl.innerHTML = partner.url;
  periodEl.innerHTML = partner.period;
  categoryEl.innerHTML = partner.category;
}

const partner = {
  id: 'tobon',
  url: 'https://salom.alif.tj/partners/tobon',
  logoUrl: 'https://alif-skills.pro/media/.svg',
  title: 'Тобон',
  category: 'Отопление',
  period: 12
};

const partnerEl = document.querySelector('[data-block="partner"]');
bindPartnerToEl(partner, partnerEl);

