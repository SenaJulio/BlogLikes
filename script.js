async  function getPosts(){
    let url = 'https://jsonplaceholder.typicode.com/posts';
    try {   
    const res = await fetch(url);
    const posts = await res.json();

  let postSection = document.querySelector('.posts');

    for(let post of posts){
    let h2 = document.createElement('h2');
    h2.innerHTML = post.title;

    let p = document.createElement('p');
    p.innerHTML = post.body;

    let button = document.createElement('button');
    button.innerHTML = 'Like';

    let small = document.createElement('small');
    small.innerHTML = '99 liks'

    let article = document.createElement('article');
    article.appendChild(h2)
    article.appendChild(p)
    article.appendChild(button)
    article.appendChild(small)
  
    postSection.appendChild(article)
  


    }

 } catch(error){
    alert("Não conseguimos carregar os posts");
    
 }
 }
 
  getPosts();