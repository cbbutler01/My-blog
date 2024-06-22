// import basic logic for blog
const modeBtn = document.getElementById('displayMode')
const submitBtn = document.getElementById('submit');
import { createAndRenderBlog,  } from "./logic.js";

// Add event listener to the submit button
// modeBtn.addEventListener('click', );
submitBtn.addEventListener('click', createAndRenderBlog);
