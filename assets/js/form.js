const UsernameInput = document.getElementById('username')
const titleInput = document.getElementById('title')
const contentInput = document.getElementById('content')

function createAndRenderBlog() {
    const blog = {
        username: UsernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }
    const blogs = localStorage.getitem('blogs')
    blogs.push(blog)
    localStorage.setitem(JSON.stringify(blog))
};
