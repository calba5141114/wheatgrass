//jshint esversion:6
window.sr = ScrollReveal();
sr.reveal('.rev');

const sample_button = document.getElementById('sample_button');
const content_area = document.getElementById('content_area');

sample_button.onclick = () => {
    content_area.innerHTML = `
<h1> ${Date.now()} is the current date.</h1>
`;
};