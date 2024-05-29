document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');

    noButton.addEventListener('mouseover', function() {
        const maxX = window.innerWidth - this.clientWidth;
        const maxY = window.innerHeight - this.clientHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        this.style.left = randomX + 'px';
        this.style.top = randomY + 'px';
    });

    yesButton.addEventListener('click', function() {
        alert("Sabía que dirías que sí");
    });
});
