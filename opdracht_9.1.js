document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('verifyAge').addEventListener('click', function() {
    var age = document.getElementById('ageInput').value;
    if (age >= 18) {
        window.location.href = 'https://www.google.com';
    } else {
        document.getElementById('modal').style.display = 'none';
        document.body.innerHTML = '<div class="too-young">Helaas, je bent te jong</div>';
    }
});
