const backBtn = document.getElementById('backButton');
const modeBtn = document.getElementById('displayMode');
function goBack(){
    window.location.href = 'form.html';
};
backBtn.addEventListener('click', goBack);