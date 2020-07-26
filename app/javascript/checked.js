'use strict';
function check() {
  const post = document.getElementsByClassName('post');
  const arrayPost = Array.from(post);
  arrayPost.forEach(element => {
    element.addEventListener('click', event => {
      const postId = element.getAttribute('data-id');
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `/posts/${postId}`, true);
      xhr.responseType = 'json';
      xhr.send();
    });
  });
}
window.addEventListener('load', check);