const popup = document.getElementById('popup');
const question = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Fungsi untuk mengacak posisi popup
function randomizePosition() {
    const x = Math.random() * (window.innerWidth - popup.offsetWidth);
    const y = Math.random() * (window.innerHeight - popup.offsetHeight);
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
}

// Event listener untuk tombol 'iya'
yesBtn.addEventListener('click', () => {
    window.location.href = 'love/love.html';
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
});

// Event listener untuk tombol 'tidak'
noBtn.addEventListener('click', () => {
    randomizePosition();
});
