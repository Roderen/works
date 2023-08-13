"use strict";
(function () {
  const POSTS = 'https://jsonplaceholder.typicode.com/posts/';
  const COMMENTS = 'https://jsonplaceholder.typicode.com/comments/?postId=';

  const postContainer = document.querySelector('.post-container');

  const getPost = (e) => {
    e.preventDefault();
    const target = e.target
    const postId = target.querySelector('.post-id').value;

    if (postId <= 100 && postId >= 0 && postId !== '') {
      const post = fetch(POSTS + postId);

      post
          .then(data => data.json())
          .then((data) => {
            postContainer.innerHTML = `
            <div class="post-info">
              <div class="post-info__text">
                <div class="post-info__title">${data.title}</div>
                <div class="post-info__body">${data.body}</div>
              </div>
              <button class="open-comments">Open Comments</button>
            </div>
            `
            postContainer.querySelector('.open-comments').addEventListener('click', (e) => getComments(e, postId));
          })
          .catch((err) => {
            console.log(err)
          })
    } else {
      throw new Error('id not defined')
    }
  }

  const getComments = (e, postId) => {
    const comments = fetch(COMMENTS + postId);
    postContainer.querySelector('.open-comments').remove();

    comments
        .then(data => data.json())
        .then((data) => {
          const commentsBlock = document.createElement('div');
          commentsBlock.classList.add('post-comments-list');
          postContainer.appendChild(commentsBlock);

          data.forEach(item => {
            commentsBlock.innerHTML += `
            <div class="post-comment">
              <div class="post-comment__name">${item.name}</div>
              <div class="post-comment__email">${item.email}</div>
              <div class="post-comment__body">${item.body}</div>
            </div>
            `
          })
        })
        .catch((err) => {
          console.log(err);
        })
  }

  document.querySelector('.form-container').addEventListener('submit', (e) => getPost(e));
})();