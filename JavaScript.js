const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const responseMsg = document.getElementById('responseMsg');


function moveButton() {
    const maxX = 200;
    const maxY = 200;
    
    const randomX = Math.random() * maxX - (maxX / 2);
    const randomY = Math.random() * maxY - (maxY / 2);
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}


noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);


yesBtn.addEventListener('click', () => {
    responseMsg.textContent = "وأنا بحبك كتير يا أجمل إنسان بحياتي! ❤️✨";
    responseMsg.classList.remove('hidden');
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    const headings = document.querySelectorAll('.game-container h2');
    headings.forEach(h => h.style.display = 'none');
    document.body.classList.add('new-background');
});