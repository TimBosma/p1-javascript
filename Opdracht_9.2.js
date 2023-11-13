const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

closedFace.onclick = toggleFaces;
openFace.onclick = toggleFaces;

function toggleFaces() {
    closedFace.classList.toggle('active');
    openFace.classList.toggle('active');
}

function openFaceFunction() {
    if (openFace.classList.contains('closed')) {
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
}
