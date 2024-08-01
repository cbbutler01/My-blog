const submitBtn = document.getElementById('submit');
import { createAndRenderBlog, toggleButton } from "./logic.js";

// import basic logic for blog
document.addEventListener('DOMContentLoaded', () => {
const modeBtn = document.getElementById('displayMode')
modeBtn.addEventListener('click', toggleButton);
});

// Add event listener to the submit button
submitBtn.addEventListener('click', createAndRenderBlog);
