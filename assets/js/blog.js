const backBtn = document.getElementById('backButton');
import { loadUpBlogPosts, switchPage, toggleButton } from "./logic.js";

document.addEventListener('DOMContentLoaded', () => {
const modeBtn = document.getElementById('displayMode');
modeBtn.addEventListener('click',toggleButton);
});

backBtn.addEventListener('click',switchPage);
window.onload = loadUpBlogPosts;