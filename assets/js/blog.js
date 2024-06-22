const backBtn = document.getElementById('backButton');
const modeBtn = document.getElementById('displayMode');
import { loadUpBlogPosts, switchPage } from "./logic.js";

backBtn.addEventListener('click',switchPage);
//modeBtn.addEventListener('click', )
window.onload = loadUpBlogPosts;