const username = document.getElementById('username');
const title = document.getElementById('title');
const content =  document.getElementById('content');
const submit =  document.getElementById('submit');

// Alert user if form fields are blank
function alertUser(){
        window.alert('Please complete the form')
}

submit.addEventListener('click', function (event) {
    event.preventDefault();
    if(username.value === ''|| title.value === '' || content.value ===''){
        alertUser();
    }else{
        const blogPost = {
            username:username.value,
            title:title.value,
            content:content.value}
            // Check if Array already exists in localStorage
            const blogPostsArray = JSON.parse(localStorage.getItem('blogPosts'))
            //If exists push object to Array
            if(blogPostsArray !== null){
                blogPosts = blogPostsArray;
                blogPosts.push(blogPost);
                localStorage.setItem('blogPosts',JSON.stringify(blogPosts));
                location.href="blog.html";
            }
            //Else instantiate array and push the blogPost
            else{
                let blogPosts = [];
                blogPosts.push(blogPost);
                localStorage.setItem('blogPosts',JSON.stringify(blogPosts));
                location.href="blog.html";
            }


        }})