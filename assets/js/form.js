// Get input elements by their IDs
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

// Function to create and render blog
function createAndRenderBlog() {
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

        alert('Blog successfully added ;)');

        // Redirect to blog page
        window.location.href = 'blog.html';
    } else {
        // Alert if not all fields are filled
        alert('Please fill out all fields.');
    }
}

// Add event listener to the submit button
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', createAndRenderBlog);
