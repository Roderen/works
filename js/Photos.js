"use strict"

class Photos {
  QUERY_LINKS = {
    PHOTOS: 'https://jsonplaceholder.typicode.com/photos/?albumId=',
  }

  selector = null;
  albumId = null;

  constructor(selector) {
    this.selector = document.querySelector(selector);

    const params = new URLSearchParams(document.location.search);
    this.albumId = params.get('albumId');

    this.renderGallery();
  }

  async queryFetch(link) {
    const albums = fetch(link);
    let data = await albums;
    return await data.json();
  }

  async renderGallery() {
    const data = await this.queryFetch(this.QUERY_LINKS.PHOTOS + this.albumId);
    this.createTemplate(data);
  }

  createTemplate(data) {
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