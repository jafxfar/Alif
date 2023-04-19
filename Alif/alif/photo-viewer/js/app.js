'use strict';

const photos = [
  {id: 1, src: 'img/1.png', alt: 'img/1.png',},
  {id: 2, src: 'img/2.png', alt: 'img/2.png',},
  {id: 3, src: 'img/3.png', alt: 'img/3.png',},
  {id: 4, src: 'img/4.png', alt: 'img/4.png',},
];

function bindPhotoToViewer(photo, el) {
  imgEl.setAttribute('src', photos[el].src);
  imgEl.setAttribute('alt', photos[el].alt);
}


const imgEl = document.querySelector('[data-id="photo"]');
let currentImg = 0;
const prevEl = document.querySelector('[data-action="prev"]');
const nextEl = document.querySelector('[data-action="next"]');
prevEl.disabled = true;
bindPhotoToViewer(imgEl, currentImg);

prevEl.onclick = () => {
  bindPhotoToViewer(imgEl, --currentImg);
  if (currentImg === 0) prevEl.disabled = true;
  if (currentImg === 2) nextEl.disabled = false;
}

nextEl.onclick = () => {
  bindPhotoToViewer(imgEl, ++currentImg);
  if (currentImg === 3) nextEl.disabled = true;
  else if (currentImg === 1) prevEl.disabled = false;
}
