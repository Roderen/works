"use strict"

class Photos {
  selector = null;

  constructor(selector) {
    this.selector = document.querySelector(selector);

    this.renderGallery();
  }

  async renderGallery() {
    const data = await JSON.parse(localStorage.getItem('albumPhotos'));
    if (data.length < 1) {
      this.selector.innerHTML = `
      <div class="not-found">
        <h1>Gallery not found!</h1>
        <a href="/index.html">Choose other gallery</a>
      </div>
      `;
    }
    data.forEach(({title, url}) => {
      this.selector.innerHTML += `
      <div class="gallery__images-item">
        <a href="${url}" target="_blank" class="gallery__images-link">
          <img loading="lazy" src="${url}" alt="Image">
          <p>${title}</p>
        </a>
      </div>
      `
    })
  }
}

new Photos('.gallery__images');