"use strict";

class Albums {
  QUERY_LINKS = {
    ALBUMS: 'https://jsonplaceholder.typicode.com/albums/',
  }

  selector = null;

  constructor(selector) {
    this.selector = document.querySelector(selector);

    this.renderPosts()
    this.#eventHandlers();
  }

  async queryFetch(link) {
    const albums = fetch(link);
    let data = await albums;
    return await data.json();
  }

  async renderPosts() {
    const data = await this.queryFetch(this.QUERY_LINKS.ALBUMS);
    this.createTemplate(data);
  }

  // Events
  #eventHandlers() {
    this.selector.addEventListener('click', this.viewGallery);
  }

  viewGallery(e) {
    const { target } = e;
    if (!target.closest('.btn-primary')) return;
    const albumId = e.target.closest('.albums__list-item').getAttribute('data-user-id');
    window.location.href = 'photos.html' + '?' + 'albumId=' + albumId;
  }

  createTemplate(data) {
    data.forEach(({title, id}) => {
      this.selector.innerHTML += `
      <div class="albums__list-item col-6" data-user-id="${id}">
        <div class="p-3 border bg-light d-flex justify-content-between align-items-center">
          <span>${title}</span>
          <button type="button" class="btn btn-primary">Watch</button>
        </div>
      </div>
      `
    })
  }
}

new Albums('.album__list');