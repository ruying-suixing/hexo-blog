var posts=["article/101/","article/102/","article/102/","article/103/","article/103/","article/103/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };