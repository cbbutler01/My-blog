const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const blogBoard = document.getElementById('blogBoard')
export function switchPage(){
    const currentUrl = window.location.href;
    if (currentUrl.includes('form.html')){
        window.location.href = 'blog.html';
    }else if (currentUrl.includes('blog.html')){
        window.location.href = 'form.html';
    };
};
// Function to create and render blog
export function createAndRenderBlog(event) {
    event.preventDefault();
    // Trim input values
    const username = usernameInput.value.trim();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    // Check if all fields are filled
    if (username && title && content) {
        // Create a blog object
        const blog = { username, title, content };

        // Retrieve blogs from localStorage
        let blogs = [];
        try {
            const storedBlogs = localStorage.getItem('blogs');
            if (storedBlogs) {
                blogs = JSON.parse(storedBlogs);
            }
        } catch (error) {
            console.error('Error parsing blogs from localStorage:', error);
        }

        // Add new blog to the array
        blogs.push(blog);

        // Save updated blogs array to localStorage
        localStorage.setItem('blogs', JSON.stringify(blogs));

        console.log('Blog successfully added ;)');

        // Redirect to blog page
        switchPage();

    } else {
        // Alert if not all fields are filled
        alert('Please fill out all fields.');
    }
};
export function loadUpBlogPosts() {
    let blogs = [];
    try {
        const storedBlogs = localStorage.getItem('blogs');
        if (storedBlogs) {
            blogs = JSON.parse(storedBlogs);
        }
    } catch (error) {
        console.error('Error retrieving blogs from localStorage:', error);
    }
    if (blogs.length > 0) {
        const blogHTML = blogs.map(blog => `
            <div class="blog">
                <h2>${blog.title}</h2>
                <p>${blog.content}</p>                
                <p>Published by ${blog.username}</p>
            </div>
        `).join('');

        // Update the blogsContainer with the generated HTML
        blogBoard.innerHTML = blogHTML;
    } else {
        // Display a message if there are no blogs
        console.log('no blog found :(')
    }
};

export function toggleButton() {
    document.body.classList.toggle('darkmode');
};