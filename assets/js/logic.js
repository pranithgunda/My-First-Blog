let blogPosts = [];

blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

console.log(blogPosts);

const blogContainer = document.getElementById('blogcontainer');

console.log(blogContainer);
console.log(blogContainer.innerHTML);

for(let i=0;i<blogPosts.length;i++){
    const userName = blogPosts[i].username;
    const title = blogPosts[i].title;
    const content = blogPosts[i].content;

    const section = document.createElement('section');
    section.setAttribute("id","blogpost");
    section.setAttribute("data-index",i);
    section.innerHTML = `<h8 id="blogtitle"></h8>
                         <p id="blogcontent"></p>
                         <span id="blogauthor"></span>      
                         </section>`

    blogContainer.appendChild(section);

    const parent = document.querySelector(`[data-index = "${i}"]`);

    console.log(parent);

    const blogTitle = parent.querySelector('#blogtitle');
    blogTitle.textContent = title;

    const blogContent = parent.querySelector('#blogcontent');
    blogContent.textContent = content;

    const blogAuthor =  parent.querySelector('#blogauthor');
    blogAuthor.textContent =`Posted by user: ${userName}`;

    


}
