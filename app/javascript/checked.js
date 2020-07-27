'use strict';
function check() {
  const post = document.getElementsByClassName('post');

  const arrayPost = Array.from(post);
  // HTMLcollectionを配列処理できるよう変換

  arrayPost.forEach(element => {

    function markAsRead (element){
      element.addEventListener('click', event => {
      
        const postId = element.getAttribute('data-id');
        // data-id属性に付与している値（post.id）を取得 << index.html.erb:9
  
        const xhr = new XMLHttpRequest();
        // XHRのメソッドを利用する為インスタンス生成
  
        xhr.open('GET', `/posts/${postId}`, true);
        // リクエスト処理を上記に設定（HTTP method, path, Asynchronous?）
  
        xhr.responseType = 'json';
        // レスポンスをJson形式に設定
  
        xhr.send();
        // リクエスト送信
  
        xhr.onload = ()=>{
          // レスポンス時のイベント設定
  
          const item = xhr.response.post;
          // 受け取ったJsonを読み取り << posts_controller:21
  
          switch(item.checked){
            // checkedカラムの値を判定
            case true:
              element.setAttribute('data-check', 'true');
              // data-check属性の値をtrueに
              break;
            case false:
              element.removeAttribute('data-check');
              // data-check属性を<div>から消去
              break;
          }
  
          if(xhr.status !== 200){
            alert(`${xhr.status} ${xhr.statusText}`);
            // レスポンスが成功（status code = 200）以外の時に上記を表示
          } else{
            return null;
          }
        };
  
        xhr.onerror = ()=>{
          // the following event happens if request fails
          alert('request fail');
        };
  
        // event.preventDefault();
      });
    }

    // if(element.getAttribute('data-load') !== null){
    //   return null;
    // }
    // element.setAttribute('data-load', 'true');
    
    markAsRead(element);
  });
}
window.addEventListener('load', check);
// setInterval(check, 1000);
