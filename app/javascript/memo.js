'use strict';
function memo() {
  const submit = document.getElementById('submit');
  submit.addEventListener('click', event =>{
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/posts', true);
    xhr.responseType = 'json';
    
    const form = document.getElementById('form');
    const formData = new FormData(form);
    xhr.send(formData);
    // フォームに入力された値を取得し送信

    xhr.onload = ()=>{
      const item = xhr.response.post;
      const html = `
        <div class="post" data-id="${item.id}">
          <div class="post-date">
            posted at: ${item.created_at}
          </div>
          <div class="post-content">
            ${item.memo}
          </div>
        </div>
      `;
      const list = document.getElementById('list');
      list.insertAdjacentHTML('afterbegin', html);

      document.getElementById('text').value = '';

      if(xhr.status !== 200){
        alert(`${xhr.status} ${xhr.statusText}`);
      }
    };
    xhr.onerror = ()=>{
      alert('request fail');
    };

    event.preventDefault();
  });
}
window.addEventListener('load', memo);