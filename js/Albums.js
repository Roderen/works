"use strict";

class Albums {
  QUERY_LINKS = {
    ALBUMS: 'https://jsonplaceholder.typicode.com/albums/',
    PHOTOS: 'https://jsonplaceholder.typicode.com/photos/?albumId=',
  }

  selector = null;
  albumList = null;

  constructor(selector) {
    this.selector = document.querySelector(selector);

    this.renderPosts()
        .then(() => {
          this.albumList.forEach(({title, userId}) => {
            this.selector.innerHTML += `
            <div class="albums__list-item col-6" data-user-id="${userId}">
              <div class="p-3 border bg-light d-flex justify-content-between align-items-center">
                <span>${title}</span>
                <button type="button" class="btn btn-primary">Watch</button>
              </div>
            </div>
            `
          })
        })

    this.#eventHandlers();
  }

  async renderPosts() {
    const albums = fetch(this.QUERY_LINKS.ALBUMS);

    let data = await albums;
    this.albumList = await data.json();
  }

  // Events
  #eventHandlers() {
    this.selector.addEventListener('click', (e) => this.viewGallery(e));
  }

  async viewGallery(e) {
    const target = e.target;
    if (!target.closest('.btn-primary')) return;
    const albumId = e.target.closest('.albums__list-item').getAttribute('data-user-id');
    const photos = fetch(this.QUERY_LINKS.PHOTOS + albumId);
    let data = await photos;
    data = await data.json();

    if (data.length === 0) return;
    localStorage.setItem('albumPhotos', JSON.stringify(data));
    window.location.pathname = 'homeworks/photos.html';
  }
}

new Albums('.album__list');